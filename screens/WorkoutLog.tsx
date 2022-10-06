
import {StyleSheet, Text, ImageBackground, View, } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';



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
      input: {
        height: 20,
        width: 220,
        margin: 10,
        borderWidth: 1,
        padding: 1,
        bottom: 50
      },    


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

                </View>  
        <View >
            <TextInput
              style={styles.input}
              placeholder="First Name"
              onChangeText={setFirstName}
              value={firstName}
            />

        </View> 
   

            
        </>
    );
}

export default WorkoutLog;

