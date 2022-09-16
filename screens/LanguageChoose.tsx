import { StyleSheet } from 'react-native';
import { Button, Text } from "galio-framework";
import { View } from '../components/Themed';
import { useNavigation } from '@react-navigation/core';

const styles = StyleSheet.create({
//   LogoStyle: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//     overflow: "hidden",
//     justifyContent: 'flex-end',
//   },
  OverlayContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'space-evenly',
  },
  TextStyle: {
    fontSize: 18,
    marginTop: 10,
    lineHeight: 250,
    marginRight: '10%',
    marginLeft: '10%',
    textAlign: 'center'
  },
  ActionBtn: {
    alignSelf: "center"
  }
});

const LanguageChoose = () => {
  const navigation = useNavigation();

  return (
    // <ImageBackground source={require('../assets/images/Logo.jpg')} style={styles.LogoStyle}>
      <View style={styles.OverlayContainer}>
          <Text style = {styles.TextStyle}>Choose your preferred Language</Text>
        <Button onPress={() => navigation.navigate('DEMO_ONE')} style={styles.ActionBtn} color="black" round size="small"> Next </Button>
        <Button onPress={() => navigation.navigate('DEMO_ONE')} style={styles.ActionBtn} color="success" round size="small"> Next </Button>
        <Button onPress={() => navigation.navigate('DEMO_ONE')} style={styles.ActionBtn} color="success" round size="small"> Next </Button>
        <Button onPress={() => navigation.navigate('DEMO_ONE')} style={styles.ActionBtn} color="success" round size="small"> Next </Button>
        <Button onPress={() => navigation.navigate('DEMO_ONE')} style={styles.ActionBtn} color="success" round size="small"> Next </Button>
        <Button onPress={() => navigation.navigate('DEMO_ONE')} style={styles.ActionBtn} color="success" round size="small"> Next </Button>
        <Button onPress={() => navigation.navigate('DEMO_ONE')} style={styles.ActionBtn} color="success" round size="small"> Next </Button>
        <Button onPress={() => navigation.navigate('DEMO_ONE')} style={styles.ActionBtn} color="success" round size="small"> Next </Button>
        <Button onPress={() => navigation.navigate('DEMO_ONE')} style={styles.ActionBtn} color="success" round size="small"> Next </Button>
        <Button onPress={() => navigation.navigate('DEMO_ONE')} style={styles.ActionBtn} color="success" round size="small"> Next </Button>
      </View>
    // </ImageBackground>
  );
}

export default LanguageChoose;

