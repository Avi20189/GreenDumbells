import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
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
    flex: 1,
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
    marginTop: 50,
    //lineHeight: 20,
    //marginRight: '10%',
    marginLeft: '10%',
    //textAlign: 'center'
  },
  NameStyle: {
    flexDirection: "row"
  },
  input1: {
    height: 85,
    width: 190,
    marginLeft: 110,
    borderWidth: 1,
    marginTop: 50,
    padding: 20,
    borderColor: "#76E606",
    borderRadius: 15,
    textAlign: "center"
  },
  ActionBtn: {
      margin:320,
    alignSelf: "center"
  }
});

const SignUpSignIn = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");


  return (
    <ImageBackground
      source={require('../assets/images/SignUp.jpg')}
      style={styles.LogoStyle}>

      <View style={styles.OverlayContainer}>
        <Text style={styles.TextStyle1} color="black" size={25} >Do you want to request a consulation for your other queries ?</Text>
        <View
          style={{
            borderBottomColor: 'grey',
            marginTop: 15,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}>
        </View>
        <SafeAreaView>

          <TextInput
              style={styles.input1}
              placeholder="Yes"
              onChangeText={setFirstName}
              value={firstName}
            />
                      <TextInput
              style={styles.input1}
              placeholder="No"
              onChangeText={setLastName}
              value={lastName}
            />

          <Button onPress={() => navigation.navigate('HOMESCREEN')}
            style={styles.ActionBtn} color="success" round size="small">
            Next
           </Button>
        </SafeAreaView>
      </View>

    </ImageBackground>

  );
}

export default SignUpSignIn;

