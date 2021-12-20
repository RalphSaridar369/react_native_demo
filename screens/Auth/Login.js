import React from 'react'
import {View,Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Login = ({navigation}) =>{
    return(
        <View>
            <Text style={styles.Header}>Login Page</Text>
            <TouchableOpacity style={styles.Button}>
                <Text style={styles.ButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate("register")}>
                <Text style={styles.ButtonText}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Button:{
        alignItems:'center',
        backgroundColor:'blue',
        width:200,
        marginVertical:10,
        paddingVertical:10
    },
    ButtonText:{
        color:'#fff'
    },
    Header:{
        textAlign:'center',
        textAlignVertical:'center',
        height:300
    }
})

export default Login