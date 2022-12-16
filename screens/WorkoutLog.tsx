
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
        height: '47%',
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
        
        //fontWeight: 'bold',
      },
      imageText1: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        bottom: 180,
        left: 10,
      },
      imageText2: {
        fontSize: 20,
        color: 'black',
        bottom: '22%',
        left: 30,
        fontFamily: 'Sans-serif',
      },
      imageText3: {
        fontSize: 20,
        color: 'black',
        bottom: '22%',
        left: 30,
      },
      imageText4: {
        fontSize: 20,
        color: 'black',
        bottom: '22%',
        left: 30,
      },
      imageText5: {
        fontSize: 20,
        color: 'black',
        bottom: '22%',
        left: 30,
      },
      imageText6: {
        fontSize: 20,
        color: 'black',
        bottom: '22%',
        left: 30,
      },
      imageText7: {
        fontSize: 20,
        color: 'black',
        bottom: '22%',
        left: 30,
      },
      imageText8: {
        fontSize: 20,
        color: 'black',
        bottom: '22%',
        left: 30,
      },   
         imageText9: {
        fontSize: 20,
        color: 'black',
        bottom: '22%',
        left: 30,
      },      
      imageText10: {
        fontSize: 20,
        color: 'black',
        bottom: '22%',
        left: 30,
      },     
       imageText11: {
        fontSize: 20,
        color: 'black',
        bottom: '22%',
        left: 30,
      },      
      imageText12: {
        fontSize: 20,
        color: 'black',
        bottom: '22%',
        left: 30,
      },      
      imageText13: {
        fontSize: 20,
        color: 'black',
        bottom: '22%',
        left: 30,
      },      
      imageText14: {
        fontSize: 20,
        color: 'black',
        bottom: '22%',
        left: 30,
      },      
      imageText15: {
        fontSize: 20,
        color: 'black',
        bottom: '22%',
        left: 30,
      },      
      imageText16: {
        fontSize: 20,
        color: 'black',
        bottom: '22%',
        left: 30,
      },      
      imageText17: {
        fontSize: 20,
        color: 'black',
        bottom: '22%',
        left: 30,
      },    
        imageText18: {
        fontSize: 20,
        color: 'black',
        bottom: '22%',
        left: 30,
      },
      imageText19: {
        fontSize: 20,
        color: 'black',
        bottom: '22%',
        left: 30,
      },
      imageText20: {
        fontSize: 20,
        color: 'black',
        bottom: '22%',
        left: 30,
      },
      imageText21: {
        fontSize: 20,
        color: 'black',
        bottom: '22%',
        left: 30,
      },
      imageText22: {
        fontSize: 20,
        color: 'black',
        bottom: '22%',
        left: 30,
      },
      ActionBtn: {
        alignSelf: "center"
      }

 
  


});
// let {  Text1, viewTextStyle } = styles


const WorkoutLog = () => {
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
                <Text style = {styles.imageText1}>Workout</Text>
                <Text style = {styles.imageText2}>Push Ups</Text>
                <Text style = {styles.imageText3}>Crunches</Text>
                <Text style = {styles.imageText4}>Squats</Text>
                <Text style = {styles.imageText5}>Plank</Text>
                <Text style = {styles.imageText6}>Wall Sit</Text>
                <Text style = {styles.imageText7}>High Jumps</Text>
                <Text style = {styles.imageText8}>Knee Pushps</Text>
                <Text style = {styles.imageText9}>Jumping Jacks</Text>
                <Text style = {styles.imageText10}>Cross body crunches</Text>
                <Text style = {styles.imageText11}>superman</Text>
                <Text style = {styles.imageText12}>jump squat</Text>
                <Text style = {styles.imageText13}>Crab walk</Text>
                <Text style = {styles.imageText14}>Mountain Climbers</Text>
                <Text style = {styles.imageText15}>Cross body crunches</Text>
                <Text style = {styles.imageText16}>Side to side lunges</Text>
                <Text style = {styles.imageText17}>Leg Raises</Text>
                <Text style = {styles.imageText18}>Knee crunches</Text>
                <Text style = {styles.imageText19}>Jack Knives</Text>
                <Text style = {styles.imageText20}>Windsheild wipers</Text>
                <Text style = {styles.imageText21}>Burpees</Text>
   
                </View>  
       
                <Button onPress={() => navigation.navigate('WORKOUTLOG')}
            style={styles.ActionBtn} color="success" round size="medium">
            Move to sleep Log
           </Button>
            
        </>
    );
}

export default WorkoutLog;

