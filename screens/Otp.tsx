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
    fontSize: 19,
    marginTop: 5,
    //lineHeight: 12,
    marginRight: '10%',
    marginLeft: '10%',
    textAlign: 'center'
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
    marginTop: 30,
    borderWidth: 1,
    padding: 10,
  },
  ActionBtn: {
    alignSelf: "center",
    marginTop: 50
  }
});

const SignUpSignIn = () => {
  const navigation = useNavigation();

  const [email, setEmail] = React.useState("");

  return (
    <ImageBackground
      source={require('../assets/images/SignUp.jpg')}
      style={styles.LogoStyle}>

      <View style={styles.OverlayContainer}>
        <Text style={styles.TextStyle} color="black" size = {25} >Otp has been sent to your registered mobile number </Text>
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
            placeholder="Enter Otp"
            onChangeText={setEmail}
            value={email}
          />
          {/* <TextInput
            style={styles.input1}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
          />
          <TextInput
            style={styles.input1}
            placeholder="Confirm Password"
            onChangeText={setPassword}
            value={password}
          />  */}
    

          <Button onPress={() => navigation.navigate('PROFILEDETAILS')}
            style={styles.ActionBtn} color="success" round size="small">
            Join In
           </Button>
        </SafeAreaView>
      </View>

    </ImageBackground>

  );
}

export default SignUpSignIn;

