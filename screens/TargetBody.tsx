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
    marginRight: '10%',
    marginLeft: '10%',
    //textAlign: 'center'
  },
  NameStyle: {
    flexDirection: "row"
  },
  input: {
    height: 45,
    width: 180,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginLeft: 10,
    textAlign: 'center',
    borderRadius: 13,
    backgroundColor: "#76E606"

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
  input2: {
    height: 45,
    width: 175,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginLeft: 15,
    textAlign: 'center',
    borderRadius: 20,
    borderColor: "#76E606"

  },
  ActionBtn: {
      margin:210,
    alignSelf: "center"
  }
});

const SignUpSignIn = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [diet, setDiet] = React.useState("");


  return (
    <ImageBackground
      source={require('../assets/images/SignUp.jpg')}
      style={styles.LogoStyle}>

      <View style={styles.OverlayContainer}>
        <Text style={styles.TextStyle1} color="black" size={25} >What part of your body you would like to target ?</Text>
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
              placeholder="Upper Body"
              onChangeText={setFirstName}
              value={firstName}
            />
                      <TextInput
              style={styles.input1}
              placeholder="Mid Body"
              onChangeText={setLastName}
              value={lastName}
            />
                      <TextInput
              style={styles.input1}
              placeholder="Lower Body"
              onChangeText={setDiet}
              value={diet}
            />

          <Button onPress={() => navigation.navigate('HEALTHISSUE')}
            style={styles.ActionBtn} color="success" round size="small">
            Next
           </Button>
        </SafeAreaView>
      </View>

    </ImageBackground>

  );
}

export default SignUpSignIn;

