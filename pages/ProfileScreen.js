import React from 'react';
import { View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import icon from '../assets/camera-solid.svg'

export default function ProfileScreen(){
    return(
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_960,c_limit/phonepicutres-TA.jpg'}} />
                    <View style={styles.camContainer}>
                        <Image style={styles.camIcon} source={{uri: icon}}/>
                    </View>
                </View>
                
            </View>
            <View style={styles.bottomContainer}>
            <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} placeholder="Email"/>
                    <TextInput style={styles.textInput} placeholder="Name"/>
                    <TextInput style={styles.textInput} placeholder="Password"/>
                    <TextInput style={styles.textInput} placeholder="Confirm Password"/>
                </View>
                <View style={styles.actionContainer}>
                    <TouchableOpacity style={styles.actButton} title="Sign Up">
                        <Text style={styles.signUp}>Sign Up</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#26394D',
        alignItems: 'center'
    },
    imageContainer:{
        width: 200,
        height: 200,

    },
    image:{
        width:200,
        height: 200,
        borderRadius: 100
    },
    camContainer:{
        height: 42,
        width: 42,
        backgroundColor: '#1EA0E5',
        borderRadius: 21,
        justifyContent: 'center',
        position: 'absolute',
        top: 146,
        left: 146
    },
    camIcon:{
        width: 24,
        height: 20
    },
    topContainer:{
        height: 200,
        width: '100%',
        justifyContent: 'center'
    },
    bottomContainer:{},
    saveOpt:{
        backgroundColor: '#1EA0E5',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 46
    },
    saveText:{
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    }
})