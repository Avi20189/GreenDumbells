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
    flex: 1 / 2.3,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    //justifyContent: 'space-evenly',
  },
  TextStyle: {
    marginTop: 5,
    //lineHeight: 12,
    marginRight: '10%',
    marginLeft: '10%',
    textAlign: 'center'
  },
  TextStyle1: {
    marginRight: '10%',
    marginLeft: '10%',
    textAlign: 'center',
  },
  NameStyle: {
    flexDirection: "row"
  },
  input1: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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
      source={require('../assets/images/SignIn.jpg')}
      style={styles.LogoStyle}>

      <View style={styles.OverlayContainer}>
        <Text style={styles.TextStyle1} color="black" size={25} >Login with your </Text>
        <Text style={styles.TextStyle} color="black" size = {30} >GREEN DUMBELLS </Text>
        <Text style={styles.TextStyle} color="black" size = {25} >account.</Text>
        <SafeAreaView>
          <TextInput
            style={styles.input1}
            placeholder="Email / Mobile"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            style={styles.input1}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
          />
          <Button onPress={() => navigation.navigate('SIGNIN')}
            style={styles.ActionBtn} color="success" round size="small">
            Sign In
           </Button>
        </SafeAreaView>
      </View>

    </ImageBackground>

  );
}

export default SignUpSignIn;

