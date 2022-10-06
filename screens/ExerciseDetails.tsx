import { StyleSheet, Image, TouchableOpacity, Text, View, } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Button } from "galio-framework";

const styles = StyleSheet.create({

    OverlayContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    overlayText: {
        //alignItems: 'flex-end',
        //justifyContent: 'flex-end',
        backgroundColor: 'green',
        width: '100%',
        fontSize: 30
    },
    cardText: {
        fontSize: 30,
        marginLeft: '7%',
    },
    card: {
        backgroundColor: '#0000',
        alignSelf: "center",
        marginBottom: '50%',
        marginTop: '40%',
        marginLeft: '2%',
        marginRight: '2%',
        width: '96%',
        shadowColor: 'red',
        shadowOffset: {
            width: 100,
            height: 10,
        },

    },
    cardImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        
    },
    OverlaycardImage: {
        width: '100%',
        height: 120,
    },
    ActionBtn: {
        flex: 1/10,
        marginTop: 30,
        backgroundColor: 'grey',
        width: '96%',
    }

});

let { OverlayContainer, cardText, card, cardImage, OverlaycardImage, ActBtn } = styles

const DietPlan = () => {
    const navigation = useNavigation();

    return (

        <>
            <View style={OverlayContainer}>
                <Image style={OverlaycardImage} source={require('../assets/images/green.jpg')} />
                <TouchableOpacity style={card}>
                    <Image style={cardImage} source={require('../assets/images/SignIn.jpg')} />
                </TouchableOpacity>
            </View>
            <Button onPress={() => navigation.navigate('WARMUP')}
            style={styles.ActionBtn} color="success" round size="small">
           Warm up
           </Button>              
           <Button onPress={() => navigation.navigate('WARMUP')}
            style={styles.ActionBtn} color="success" round size="small">
           Shoulders
           </Button>           
           <Button onPress={() => navigation.navigate('WARMUP')}
            style={styles.ActionBtn} color="success" round size="small">
           Chest
           </Button>           
           <Button onPress={() => navigation.navigate('WARMUP')}
            style={styles.ActionBtn} color="success" round size="small">
          Abs
           </Button>           
           <Button onPress={() => navigation.navigate('WARMUP')}
            style={styles.ActionBtn} color="success" round size="small">
           Arms
           </Button>           
           <Button onPress={() => navigation.navigate('WARMUP')}
            style={styles.ActionBtn} color="success" round size="small">
           Glutes
           </Button>               
           <Button onPress={() => navigation.navigate('WARMUP')}
            style={styles.ActionBtn} color="success" round size="small">
           Legs
           </Button>    



        </>
    );
}

export default DietPlan;

