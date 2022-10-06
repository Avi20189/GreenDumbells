import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import CheckBox from 'react-native-check-box';
import { Button, Text } from "galio-framework";
import { View } from '../components/Themed';
import { useNavigation } from '@react-navigation/core';
import { TextInput } from 'react-native-gesture-handler';
import React, { useState } from 'react';



const styles = StyleSheet.create({
  LogoStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: "hidden",
    justifyContent: 'flex-end',
  },
  OverlayContainer: {
    flex: 1 / 2.8,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    //justifyContent: 'space-evenly',
  },
  TextStyle: {
    fontSize: 18,
    marginTop: 5,
    //lineHeight: 12,
    marginRight: '10%',
    marginLeft: '10%',
    textAlign: 'center'
  },
  TextStyle1: {
    //marginTop: 5,
    //lineHeight: 20,
    marginRight: '10%',
    marginLeft: '10%',
    textAlign: 'center'
  },
  NameStyle: {
    flexDirection: "row"
  },
  input: {
    height: 40,
    width: 180,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  input1: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  checkbox: {
    marginLeft: 10,
    alignSelf: "flex-start",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  label: {
    fontSize: 15,
    marginLeft: 8,
  },
  ActionBtn: {
    alignSelf: "center"
  }
});

const SignUpSignIn = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isSelected, setSelection] = useState(false);

  return (
    <ImageBackground
      source={require('../assets/images/SignUp.jpg')}
      style={styles.LogoStyle}>

      <View style={styles.OverlayContainer}>
        <Text style={styles.TextStyle1} color="black" size={30} >Sign Up </Text>
        <Text style={styles.TextStyle} color="black" >please enter your mobile number to get started </Text>
        <View
          style={{
            borderBottomColor: 'grey',
            marginTop: 15,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}>
        </View>
        <SafeAreaView>
          {/* <View style = {styles.NameStyle}>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              onChangeText={setFirstName}
              value={firstName}
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              onChangeText={setLastName}
              value={lastName}
            />
          </View> */}
           <TextInput
            style={styles.input1}
            placeholder="Mobile No."
            onChangeText={setEmail}
            value={email}
          />
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label} color="black" >I accept term of use & privacy policy </Text>
          </View>

          <Button onPress={() => navigation.navigate('OTP')}
            style={styles.ActionBtn} color="success" round size="small">
            Join In
           </Button>
        </SafeAreaView>
      </View>

    </ImageBackground>

  );
}

export default SignUpSignIn;

