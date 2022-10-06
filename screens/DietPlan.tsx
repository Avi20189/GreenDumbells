import { StyleSheet, Image, TouchableOpacity,Text, View,} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Card } from "@rneui/themed";

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

const DietPlan = () => {
  const navigation = useNavigation();

  return (
    

      <View style={OverlayContainer}>
        <TouchableOpacity style ={card}>
        <Image style = {cardImage} source={require('../assets/images/Diet1.jpg')} />
        <Text style = {cardText}>Daily Meals</Text>
        </TouchableOpacity>
        <TouchableOpacity style ={card}>
        <Image style = {cardImage} source={require('../assets/images/Diet2.jpg')} />
        <Text style = {cardText}>Do's & Don'ts</Text>
        </TouchableOpacity>
        <TouchableOpacity style ={card}>
        <Image style = {cardImage} source={require('../assets/images/Diet3.jpg')} />
        <Text style = {cardText}>Habits</Text>
        </TouchableOpacity>
      </View>

  );
}

export default DietPlan;

