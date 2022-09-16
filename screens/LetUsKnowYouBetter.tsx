import { StyleSheet, SafeAreaView } from 'react-native';
import { Button, Text } from "galio-framework";
import { View } from '../components/Themed';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';



const styles = StyleSheet.create({
     OverlayContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,

    },
    TextStyle: {
        marginTop: 20,
        marginRight: '15%',
        marginLeft: '10%',
        textAlign: 'center'
    },
    TextStyle1: {
        marginTop: 60,
        marginRight: '25%',
        marginLeft: '10%',
        textAlign: 'center',
    },
    ActionBtn: {
        alignSelf: "center",
    },
    btn: {
        marginTop: 500,
        justifyContent: "flex-end"
    }
});

const Kyc = () => {
    const navigation = useNavigation();

    return (
        
            <View style={styles.OverlayContainer}>
                <Text style={styles.TextStyle1} color="black" size={25} >Let Us Know you better. </Text>
                <Text style={styles.TextStyle} color="black" size={17} >we will ask you a few questions related to your lifestyle which will help us to provide better service.It will take less than a minute. </Text>
                <View style = {styles.btn}>
                <Button onPress={() => navigation.navigate('PHYSICALDETAILS')}
                    style={styles.ActionBtn} color="success" round size="medium">
                    <Text color="white" size={18}>I am in</Text>
                </Button>
                <Button onPress={() => navigation.navigate('SIGNIN')}
                    style={styles.ActionBtn} color="success" round size="medium">
                    Skip
               </Button>
               </View>
            </View>
    
    );
}

export default Kyc;

