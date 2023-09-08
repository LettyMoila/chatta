import React from "react";
import { View , StyleSheet, TextInput, TouchableOpacity, Text} from "react-native";

export default function LoginScreen(){
    return(
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.appName}>
                    chatta
                </Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.innerContainer}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} placeholder="Email"/>
                    <TextInput style={styles.textInput} placeholder="Password"/>
                </View>
                <View style={styles.actionContainer}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Text style={styles.signIn}>Sign In</Text>
                    </TouchableOpacity>
                    <View style={styles.signUpOpt}>
                        <Text style={styles.noAccount}>No account?</Text>
                        <Text style={styles.signUp}>Sign Up</Text>
                    </View>
                    <View style={styles.forgotPassContainer}>
                        <Text style={styles.forgotPass}>forgot password</Text>
                    </View>
                </View>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 80,
        alignItems: 'center',
        backgroundcolor: '#26394D'
    },
    topContainer: {
        flex: 1.2,
        backgroundcolor: 'red',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    appName: {
        fontFamily: 'berkshire',
        fontSize: 54,
        color: '#1EA0E5'
    },
    bottomContainer: {
        flex: 2.8,
        backgroundcolor: 'green',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerContainer:{
        height: 320,
        backgroundColor: '#fff',
        borderRadius: 25,
        width: 320,
        padding: 20
    },
    inputContainer:{
        height: 120
    },
    textInput:{
      borderRadius: 15,
      height: 46,
      borderColor: '#1EA0E5',
      borderWidth: 1,
      marginVertical: 10,
      padding: 10
    },
    actionContainer:{
        height: 140,
        top: 20
    },
    actionButton:{
        color: '#fff',
        backgroundColor: '#1EA0E5',
        height: 46,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUpOpt:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    noAccount:{
        fontSize: 16
    },
    signUp: {
        color: '#1EA0E5',
        fontSize: 15,
        fontWeight: 'bold',
        padding: 10
    },
    forgotPassContainer:{
        alignItems: 'center'
    },
    forgotPass:{
        color: '#1EA0E5',
        fontSize: 16,
        fontWeight: 'bold'

    },
    signIn:{
        color: '#fff',
        fontWeight: 'bold'
    }
})