import React, { useContext, useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { MainContext } from '../../MainContext';
import { formValidator } from '../../helpers/formValidator';
import { TextInput, PassInput, Link, TouchableOpacity, KeyboardAvoidingView, CheckBox, Alert } from '../../components';
import { styles } from './LoginStyle';
import { storeData, removeKey, getData } from '../../helpers/asyncStorage';
import { emptyString } from '../../helpers/emptyString';
import AlertComponent from '../../components/Alert';

const Login = ({ navigation }) => {

    const [state, dispatch] = useContext(MainContext);
    const [userCred, setUserCred] = useState({ email: '', password: '' });
    const [rememberMe, setRememberMe] = useState(false);

    const signIn =()=>{
        dispatch({type: 'SIGN_IN', payload: {
            UserData:{
                email:'user1@yopmail.com'
            },
        }})
        navigation.navigate("Home");
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
        <KeyboardAvoidingView>
            <View style={styles.LogoImgContainer}>
                <Image source={require('../../assets/Logo-Drawer.png')} style={styles.LogoImg} resizeMode='cover' />
            </View>
            <TextInput
                label="Email" onChangeText={(e) => settingCreds(e, "email")} value={userCred.email}
                left="account-outline"
            />
            <PassInput
                label="Password" onChangeText={(e) => settingCreds(e, "password")} value={userCred.password}
                left="lock-outline"
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
    )
}

export default Login