import { StyleSheet, Image, ImageBackground } from 'react-native';
import { Block, Button, Text, theme } from "galio-framework";
import { View } from '../components/Themed';
import {useNavigation} from '@react-navigation/core';
import DemoPic2 from './DemoScreenTwo';
import SignUp from './SignUp';
import SignIn from './SignIn';



const styles = StyleSheet.create({
  LogoStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: "hidden",
    justifyContent: 'flex-end',
  },
  OverlayContainer: {
    flex: 1 / 2.5,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'space-evenly',
  },
  TextStyle: {
    fontSize: 18,
    marginTop: 10,
    lineHeight: 32,
    marginRight: '10%',
    marginLeft: '10%',
    textAlign: 'center'
  },
  ActionBtn: {
    alignSelf: "center"
  }
});

const SignUpSignIn = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/images/SignUp.jpg')}
      style={styles.LogoStyle}>

      <View style={styles.OverlayContainer}>
        <Text style={styles.TextStyle} color="black" size={18} >Get started with our affordable plans especially tailored for you </Text>
        <Button onPress={() => navigation.navigate('SIGNUP')}
          style={styles.ActionBtn} color="success" round size="small">
          Sign Up
           </Button>
           <Button onPress={() => navigation.navigate('SIGNIN')}
          style={styles.ActionBtn} color="success" round size="small">
          Sign In
           </Button>
      </View>
    </ImageBackground>
  );
}

export default SignUpSignIn;

