import React, { useContext, useEffect, useState } from 'react';
import { View, Image, Alert } from 'react-native';
import { MainContext } from '../../../MainContext';
import { formValidator } from '../../../helpers/formValidator';
import { TextInput, PassInput, Link, TouchableOpacity, KeyboardAvoidingView, CheckBox } from '../../../components';
import { styles } from './LoginStyle';
import { storeData, removeKey, getData } from '../../../helpers/asyncStorage';
import { emptyString } from '../../../helpers/emptyString';
import { LinearGradient } from 'expo-linear-gradient';

const Login = ({ navigation }) => {

    const [state, dispatch] = useContext(MainContext);
    const [userCred, setUserCred] = useState({ email: '', password: '' });
    const [rememberMe, setRememberMe] = useState(false);

    const confirmSignIn =(choice)=>{
        dispatch({type: 'SIGN_IN', payload: {
            UserData:{
                email:userCred.email,
                usertype:choice,
            },
        }})
        navigation.navigate("Home");
    }

    const signIn =()=>{
        let email = userCred.email;
        console.log(email)
        if(!email.toLowerCase() === "user1@yopmail.com" || !email.toLowerCase() === "user2@yopmail.com"){
            Alert.alert("Error","Wrong Email")
        }
        else{
           Alert.alert("Sign in","Do you want to sign in as a seller",[
                {text:"No", onPress:()=>confirmSignIn(1)},
                {text:"Yes", onPress:()=>confirmSignIn(2)},
            ])
        }
    }

    const settingCreds = (e, t) => {
        setUserCred({ ...userCred, [t]: e })
    }

    const asyncRemember = async () => {
        if (!rememberMe && (emptyString(userCred))) {
            Alert("Error", "Please insert both email and password first");
            return;
        }
        else {
            if (rememberMe) {
                setRememberMe(!rememberMe);
                await removeKey('remember_me');
            }
            else {
                setRememberMe(!rememberMe);
                await storeData('remember_me', userCred);
                // console.log("added")
            }
        }
    }

    useEffect(() => {
        const checkForRemember = async () => {
            if (await getData('remember_me') !== undefined) {
                let json = await getData('remember_me');
                setUserCred({ email: json?.email + "", password: json?.password + "" });
                setRememberMe(true);
            }
        }
        checkForRemember()
    }, [setUserCred])

    return (
        
      <LinearGradient
      // Background Linear Gradient
        colors={['#FF6863', '#fff', '#fff']}
      style={{flex:1}}
    >
        <KeyboardAvoidingView>
            <View style={styles.LogoImgContainer}>
                <Image source={require('../../../assets/logo.png')} style={styles.LogoImg} resizeMode='cover' />
            </View>
            <TextInput
                label="Email" style={Platform.OS==='ios' &&{ height:40}}  variant="outlined" onChangeText={(e) => settingCreds(e, "email")} value={userCred.email}
                left="email-outline"
            />
            <PassInput
                label="Password" style={Platform.OS==='ios' &&{ height:40}} variant="outlined" onChangeText={(e) => settingCreds(e, "password")} value={userCred.password}
            />
            <View>
                <CheckBox
                    right="Remember me"
                    value={rememberMe}
                    onValueChange={() => asyncRemember()} />
            </View>
            <TouchableOpacity text="Login" onPress={() => formValidator(userCred, "login", () => signIn())}
                settings={["primary", "outlined"]} />
            <Link text={"Register"} settings={["primary", "underline"]} onPress={() => navigation.navigate("Auth", { screen: 'register' })} />
        </KeyboardAvoidingView>
        </LinearGradient>
    )
}

export default Login