import { StyleSheet, Image, TouchableOpacity, Text, View, } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Card } from "@rneui/themed";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  OverlayContainer: {
    flex: 1/2.8,
    width: 450,
  },
  OverlayContainer1: {
    flex: 1 ,
    backgroundColor: 'white',
    width: '100%',
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
  },
  viewTextStyle: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center"
  },
  Text1: {
    fontSize: 30,
    color: 'blue',
    marginTop: 150,
    
  }

});

let { OverlayContainer, Container, Text1, viewTextStyle, OverlayContainer1 } = styles

const Help = () => {
  return (
    <>
      <View style={Container} >
        <Image style={OverlayContainer} source={require('../assets/images/SignUp.jpg')} />
        <View style = {OverlayContainer1}></View>
      </View>
      <View style={viewTextStyle} >
        <Text style={Text1}>Help</Text>
      </View>
      
    </>
  );
}

export default Help;

