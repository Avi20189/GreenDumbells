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
    height: 85,
    width: 180,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginLeft: 10,
    textAlign: 'center',
    borderRadius: 13,
    borderColor: "#76E606"

  },

  NameStyle: {
    flexDirection: "row"
  },
  ActionBtn: {
      margin:100,
    alignSelf: "center"
  }
});

const SignUpSignIn = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [diet, setDiet] = React.useState("");


  return (
    <ImageBackground
      source={require('../assets/images/SignUp.jpg')}
      style={styles.LogoStyle}>

      <View style={styles.OverlayContainer}>
        <Text style={styles.TextStyle1} color="black" size={25} >Do you have any allergy to specific food item ?</Text>
        <View
          style={{
            borderBottomColor: 'grey',
            marginTop: 15,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}>
        </View>
        <SafeAreaView>

        <View style = {styles.NameStyle}>
            <TextInput
              style={styles.input}
              placeholder="Cow's Milk"
              onChangeText={setFirstName}
              value={firstName}
            />
            <TextInput
              style={styles.input}
              placeholder="Eggs"
              onChangeText={setNumber}
              value={number}
            />
          </View>

        <View style = {styles.NameStyle}>
            <TextInput
              style={styles.input}
              placeholder="Tree Nuts"
              onChangeText={setFirstName}
              value={firstName}
            />
            <TextInput
              style={styles.input}
              placeholder="Peanuts"
              onChangeText={setNumber}
              value={number}
            />
          </View>

        <View style = {styles.NameStyle}>
            <TextInput
              style={styles.input}
              placeholder="wheat"
              onChangeText={setFirstName}
              value={firstName}
            />
            <TextInput
              style={styles.input}
              placeholder="Soy"
              onChangeText={setNumber}
              value={number}
            />
          </View>


        <View style = {styles.NameStyle}>
            <TextInput
              style={styles.input}
              placeholder="Shell Fish"
              onChangeText={setFirstName}
              value={firstName}
            />
            <TextInput
              style={styles.input}
              placeholder="Meat"
              onChangeText={setNumber}
              value={number}
            />
          </View>

        <View style = {styles.NameStyle}>
            <TextInput
              style={styles.input}
              placeholder="Others"
              onChangeText={setFirstName}
              value={firstName}
            />
            <TextInput
              style={styles.input}
              placeholder="None"
              onChangeText={setNumber}
              value={number}
            />
          </View>
 

          <Button onPress={() => navigation.navigate('OTHERQUERIES')}
            style={styles.ActionBtn} color="success" round size="small">
            Next
           </Button>
        </SafeAreaView>
      </View>

    </ImageBackground>

  );
}

export default SignUpSignIn;

