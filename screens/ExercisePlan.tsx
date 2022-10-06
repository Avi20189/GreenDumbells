import { StyleSheet, Image, TouchableOpacity,Text, View,} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Button } from "galio-framework";


const styles = StyleSheet.create({

  OverlayContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 30,
    marginLeft: '7%',
  },
  card: {
    backgroundColor: '#fff',
    alignSelf: "center",
    marginBottom: 10,
    marginLeft: '2%',
    marginRight: '2%',
    width: '96%',
    shadowColor: '#000',
    shadowOpacity:1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    borderBottomLeftRadius:50,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    borderTopLeftRadius:50
 
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderBottomLeftRadius:10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 50,
    borderTopLeftRadius:50,
    alignItems: 'center'

  },

});

let {OverlayContainer, cardText, card, cardImage} = styles


const ExercisePlan = () => {

    const navigation = useNavigation();

    const onPress = () => navigation.navigate('EXERCISEDETAILS');
    // const onPress = () => navigation.navigate('STRETCHING');


  return (
    

      <View style={OverlayContainer}>
          
        <TouchableOpacity style ={card} onPress= {onPress}>
            
        <Image style = {cardImage} source={require('../assets/images/SignIn.jpg')} />
        <Text style = {cardText}>Exercise</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style ={card}>
        <Image style = {cardImage} source={require('../assets/images/SignUp.jpg')} />
        <Text style = {cardText}>Stretching</Text>
        </TouchableOpacity>
        <TouchableOpacity style ={card}>
        <Image style = {cardImage} source={require('../assets/images/Logo.jpg')} />
        <Text style = {cardText}>Meditation</Text>
        </TouchableOpacity>
      </View>

  );
}

export default ExercisePlan;

