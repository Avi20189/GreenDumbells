
import {StyleSheet, Text, ImageBackground, View, } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { Button} from "galio-framework";




const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      coverImage: {
        width: '100%',
        height: 200,
      },
    textView: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 280,
        bottom: 530,
      },
      imageText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
      },
      imageText1: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        top: 20,
        left: 10,
      },
      imageText2: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        top: 20,
        left: 10,
      },
      imageText3: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        top: 80,
        left: 10,
      },
      imageText4: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        top: 80,
        left: 10,
      },
      imageText5: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        top: 130,
        left: 10,
      },
      imageText6: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        top: 130,
        left: 10,
      },
      imageText7: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        top: 150,
        left: 10,
        paddingTop: 5
      },
      imageText8: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        top: 180,
        left: 15,
      },
      imageText9: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        top: 170,
        left: 10,
        paddingTop: 9,
      },
      input: {
        height: 20,
        width: 220,
        margin: 10,
        borderWidth: 1,
        padding: 3,
        marginTop: 5
      },    
      ActionBtn: {
        alignSelf: "center"
      }


});
// let {  Text1, viewTextStyle } = styles


const MyDairyNext = () => {
    const navigation = useNavigation();
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");


    return (
        <>
            <View style = {styles.container}>
                <ImageBackground style={styles.coverImage} source={require('../assets/images/green.jpg')} />
                   <View style = {styles.textView}>
                        <Text style = {styles.imageText}>User Name</Text>
                </View>
                <Text style = {styles.imageText1}>Mood</Text>
                <Text style = {styles.imageText2}>How do you feel ?</Text>
                <Text style = {styles.imageText3}>Energy</Text>
                <Text style = {styles.imageText4}>How is your energy level ? </Text>
                <Text style = {styles.imageText5}>Beverages</Text>
                <Text style = {styles.imageText6}>What did you have in the morning ? </Text>
                <Text style = {styles.imageText7}> Coffee </Text>
                <Text style = {styles.imageText7}> Tea </Text>
                <Text style = {styles.imageText7}> Butter Milk</Text>
                <Text style = {styles.imageText7}> Fruit Juice </Text>
                <Text style = {styles.imageText7}> Green Tea</Text>
                <Text style = {styles.imageText7}> Coconut Water </Text>
                <Text style = {styles.imageText8}>Diet</Text>
                <Text style = {styles.imageText9}>  Breakfast</Text>
                </View>  
        <View >
            <TextInput
              style={styles.input}
              placeholder="First Name"
              onChangeText={setFirstName}
              value={firstName}
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              onChangeText={setLastName}
              value={lastName}
            />
            <Text style = {{fontSize: 16, fontWeight: "bold",marginLeft: 10}}>Lunch</Text>
            

        </View> 
        <Button onPress={() => navigation.navigate('WORKOUTLOG')}
            style={styles.ActionBtn} color="success" round size="medium">
            Move to workout Log
           </Button>
  
        </>
    );
}

export default MyDairyNext;

