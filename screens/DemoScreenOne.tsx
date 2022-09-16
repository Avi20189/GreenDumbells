import { StyleSheet, ImageBackground } from 'react-native';
import { Button, Text } from "galio-framework";
import { View } from '../components/Themed';
import { useNavigation } from '@react-navigation/core';

const styles = StyleSheet.create({
  LogoStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: "hidden",
    justifyContent: 'flex-end',
  },
  OverlayContainer: {
    flex: 1 / 3,
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

const DemoScreenOne = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../assets/images/Logo.jpg')} style={styles.LogoStyle}>
      <View style={styles.OverlayContainer}>
        <Text style={styles.TextStyle} color="black" size={18} >Choose a suitable workout regime from our database and start tracking your performance </Text>
        <Button onPress={() => navigation.navigate('DEMO_TWO')} style={styles.ActionBtn} color="success" round size="small">
          Next
           </Button>
      </View>
    </ImageBackground>
  );
}

export default DemoScreenOne;

