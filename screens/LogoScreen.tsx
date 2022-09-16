import { StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Logo from '../assets/images/Logo.jpg';
import Exercise from './Exercise';
import { createNavigationContainerRef } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import RN from 'react-native';
import { Block, Button, Text, theme } from "galio-framework";
import Navigation from '../navigation';
import DemoPic from './DemoScreenOne';
import Tracker from './DemoScreenOne';
const { height, width } = Dimensions.get("screen");

import materialTheme from "../constants/Theme";



export default function TabOneScreen(props) {
  console.log('props: ', props);
  const { navigation } = props;
  return (

    <ImageBackground
      source={require('../assets/images/Logo.jpg')}
      style={styles.LogoStyle}>
      <View style={styles.OverlayContainer}>
        <View>
        <Block ><Text style={styles.TextStyle} color="black" size={18} >All  you  need  is  to  enjoy</Text></Block>
        <Block><Text style={styles.TextStyle1} color="black" size={18}>yourself  and  let  us  track  your</Text></Block>
        <Block><Text style={styles.TextStyle2} color="black" size={18}>exercise   professionally !! </Text></Block>
        </View>
        <Button onPress={() => navigation.navigate('DemoPic')}
          style={styles.button} color="success" round size="small">
          Next
         </Button>
      </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,

  // },
  LogoStyle: {
    flex: 1,
    position: "relative",
    width: '100%',
    height: '100%',



  },
  OverlayContainer: {
    flex: 1 / 3,
    backgroundColor: 'white',
    justifyContent: "space-around",  
    position: 'absolute',
    bottom: 0,
    // top: 500,
    // left: 0,
    // right: 0,
    // bottom: 0,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35

  },
  TextStyle: {
    marginTop: 10,
    marginLeft: 100
  },
  TextStyle1: {
    marginLeft: 80
  },
  TextStyle2: {
    marginLeft: 100
  },
  button: {
    marginTop: 15,
    marginLeft: 140,
  }


});
