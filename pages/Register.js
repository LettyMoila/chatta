import { borderRadius } from "@mui/system";
import { View, StyleSheet, Text, Button, TouchableOpacity, TextInput } from "react-native";

export default function Register(){
    return(
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.appName}>chatta</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.innerContainer}>
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
                    <View style={styles.registeredSec}>
                        <Text style={styles.registeredText}>Registered?</Text>
                        <Text style={styles.signInText}>sign In</Text>
                    </View>
                </View>
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
        paddingVertical: 80,
        alignItems: 'center'
    },
    topContainer:{
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    appName:{
       fontSize: 54,
       fontWeight: 'bold',
       color: '#fff',
       fontFamily: 'berkshire'
    },
    bottomContainer:{
        flex: 2.8,
        justifyContent: 'center',
        minHeight: 420
    },
    innerContainer:{
        padding: 20,
        height:420,
        width: 320,
        backgroundColor:'#fff',
        borderRadius: 25
    },
    actionContainer:{
        flex: 1
    },
    inputContainer:{
        flex: 3,
    },
    textInput:{
        height: 46,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#1EA0E5',
        padding: 10,
        marginVertical: 10
    },
    actionContainer:{
        flex: 1
    },
    actButton:{
        backgroundColor: '#1EA0E5',
        borderRadius: 15,
        height: 46,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signUp:{
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
    registeredSec:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    registeredText:{
        fontSize: 16
    },
    signInText:{
        color: '#1EA0E5',
        fontWeight: 'bold',
        fontSize: 16
    }
})