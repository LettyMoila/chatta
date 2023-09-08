import { View, StyleSheet, Text } from "react-native";

export default function Register(){
    return(
        <View style={StyleSheet.container}>
            <View style={StyleSheet.topContainer}>
                <Text style={StyleSheet.appName}>chatta</Text>
            </View>
            <View style={StyleSheet.bottomContainer}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#26394D',
        paddingVertical: 80
    },
    topContainer:{
        flex: 1.5,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    appName:{
       fontSize: 48,
       fontWeight: 'bold',
       color: '#fff',
       fontFamily: 'berkshire'
    },
    bottomContainer:{
        flex: 2.8,
        backgroundColor: 'green'
    }
})