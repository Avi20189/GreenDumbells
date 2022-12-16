import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import CheckBox from 'react-native-check-box';
import { Button, Text } from "galio-framework";
import { View } from '../components/Themed';
import { useNavigation } from '@react-navigation/core';
import { TextInput } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogoScreen from './LogoScreen';
import Trackers from './Trackers';
import ExerciseRecord from './ExerciseRecord';
import PushNotifications from './PushNotifications';
import Exercise from './ExercisePlan';



const styles = StyleSheet.create({
  LogoStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: "hidden",
    justifyContent: 'flex-end',
    backgroundColor: 'white'
  },
  OverlayContainer: {
    flex: 1/3.5,
    bottom: 300,
    backgroundColor: 'white',
    //borderTopLeftRadius: 55,
    //borderTopRightRadius: 55,
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
    alignSelf: 'center',


  },
  input1: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  ActionBtn: {
    height: 88,
    width:  88,
    borderRadius: 88,
    marginLeft: 20,    
  },
  iconStyle: {
    flexDirection: 'row'
  },
ViewStyle: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  
},
});

const BottomTabs = createBottomTabNavigator();
const AppStart = () => {
  return (

    <>
      <BottomTabs.Navigator initialRouteName="profile"
        screenOptions={{
          headerShown: false,
        }}>
        <BottomTabs.Screen name="profile" component={LogoScreen} />
        <BottomTabs.Screen name="Tracker" component={Trackers} />
        <BottomTabs.Screen name="Record" component={ExerciseRecord} />
        <BottomTabs.Screen name="Notifications" component={PushNotifications} />
        <BottomTabs.Screen name="Exercise" component={Exercise} />
      </BottomTabs.Navigator>
    </>
  );
}

const SignUpSignIn = () => {
  const navigation = useNavigation();

  return (
<>
    <View style={styles.OverlayContainer}>
    <Text style = {styles.NameStyle}>Wellbeing</Text>
  </View>
    <ImageBackground
      source={require('../assets/images/SignIn.jpg')}
      style={styles.LogoStyle}>
     <View>
      <View style = {styles.ViewStyle}>
           <Button onPress={() => navigation.navigate('DIETPLAN')}
            style={styles.ActionBtn} color="success" round size="small">
           </Button>
           <Text style = {styles.NameStyle}>Diet Plans</Text> 
           </View>
           <View style = {styles.ViewStyle}>
           <Button onPress={() => navigation.navigate('FITNESS PLAN')}
            style={styles.ActionBtn} color="success" round size="small">
            Fitness plan
           </Button>
           <Text style = {styles.NameStyle}>Fitness Plan</Text> 
           </View>
           <View style = {styles.ViewStyle}>
           <Button onPress={() => navigation.navigate('MYDAIRY')}
            style={styles.ActionBtn} color="success" round size="small">
            My Dairy
           </Button>
           <Text style = {styles.NameStyle}>My Dairy</Text> 
           </View>
           <View style = {styles.ViewStyle}>
           <Button onPress={() => navigation.navigate('CONSULTATION')}
            style={styles.ActionBtn} color="success" round size="small">
           Consultation
           </Button>  
           <Text style = {styles.NameStyle}>Consulatation</Text> 
           </View>
           <View style = {styles.ViewStyle}>         
           <Button onPress={() => navigation.navigate('LIVE')}
            style={styles.ActionBtn} color="success" round size="small">
            My Shopping Cart
           </Button>
           <Text style = {styles.NameStyle}>My Shopping Cart</Text> 
           </View>
           <View style = {styles.ViewStyle}>
           <Button onPress={() => navigation.navigate('MYDAIRYNEXT')}
            style={styles.ActionBtn} color="success" round size="small">
            Live
           </Button>
           <Text style = {styles.NameStyle}>Live</Text> 
           </View>
           </View>
    </ImageBackground>
    

    </>

  );
}

export default SignUpSignIn;

