import { StyleSheet, Image, ImageBackground } from 'react-native';
import Logo from '../assets/images/Logo.jpg';
import { Block, Button, Text, theme } from "galio-framework";
import { View } from '../components/Themed';
import DemoPic2 from './DemoScreenTwo';
import {useNavigation} from '@react-navigation/core';





const DemoPic = () => {
    const navigation = useNavigation();
    return (
  
        <ImageBackground 
         source={require('../assets/images/DemoPic2.jpg')}
         style={styles.LogoStyle}>
         
         <View style = {styles.OverlayContainer}>
           <Block ><Text style = {styles.TextStyle} color="black" size={18} >Take some time to rest after finishing</Text></Block>
           <Block><Text style = {styles.TextStyle1} color="black" size={18}>      Each routine</Text></Block>
  
           <Button  onPress = {() => navigation.navigate('DemoPic2')}
           style ={styles.button}color="success" round size="small">
              S k i p  
           </Button>
               
     
          </View> 
          </ImageBackground>
  
    );
  }

  export default DemoPic;
  
  const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
  
    // },
    LogoStyle: {
       flex:1,
       width: '100%',
       height: '100%',
       overflow: "hidden",

    },
    OverlayContainer: {
      flex: 1/3,
      backgroundColor: 'white',
      marginTop: 260,
      top: 360,
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35 
     
    },
    TextStyle: {
      marginTop:10,
      marginLeft:60
    },
      TextStyle1: {
          marginTop:5,
      marginLeft:120
    },
    TextStyle2: {
      marginLeft:100
    },
    button: {
      marginTop:30,
      marginLeft:140,
    }
  
  
  });
  