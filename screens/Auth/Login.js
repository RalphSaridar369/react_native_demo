import React, { useContext, useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { MainContext } from '../../MainContext';
import { AntDesign } from '@expo/vector-icons';
import { formValidator } from '../../helpers/formValidator';
import { TextInput, Link, TouchableOpacity, ViewContainer, CheckBox, Alert } from '../../components';
import {styles} from './LoginStyle';
import { storeData, removeKey, getData } from '../../helpers/asyncStorage';
import { emptyString } from '../../helpers/emptyString';

const Login = ({ navigation }) => {
    const { signIn } = useContext(MainContext)
    const [userCred, setUserCred] = useState({ email: '', password: '' })
    const [showPass, setShowPass] = useState(true)
    const [rememberMe,setRememberMe] = useState(false)

    const settingCreds = (e, t) => {
        setUserCred({ ...userCred, [t]: e })
    }

    const asyncRemember = async() => {
        if(!rememberMe && (emptyString(userCred))){
            Alert("Error","Please insert both email and password first");
            return;
        }
        else{
            if(rememberMe){
                setRememberMe(!rememberMe);
                await removeKey('remember_me');
            }
            else{
                setRememberMe(!rememberMe);
                await storeData('remember_me',userCred);
                // console.log("added")
            }
        }
    }

    useEffect(()=>{
        const checkForRemember = async() =>{
            if(await getData('remember_me')!==undefined){
                let json = await getData('remember_me');
                setUserCred({email:json?.email+"",password:json?.password+""});
                setRememberMe(true);
            }
        }
        checkForRemember()
    },[setUserCred])

    return (
        <ViewContainer>
            <View style={styles.LogoImgContainer}>
                <Image source={require('../../assets/Logo-Drawer.png')} style={styles.LogoImg} resizeMode='cover' />
            </View>
            <TextInput 
                main={{placeholder:"Email", onChangeText:(e) => settingCreds(e, "email"), value:userCred.email}}
                leftIcon={{
                    icon: <AntDesign name="user" size={24} color="black" />,
                    onPress: () => setShowPass(!showPass)
                }} />
            <TextInput
                main={{placeholder:"Password", onChangeText:(e) => settingCreds(e, "password"), value:userCred.password,secureTextEntry:showPass}}
                leftIcon={{
                    icon: <AntDesign name="key" size={24} color="black" />,
                    onPress: () => setShowPass(!showPass)
                }}
                rightIcon={{
                    icon: <AntDesign name="eyeo" size={24} color="black" />,
                    onPress: () => setShowPass(!showPass)
                }} />
                <View>
                    <CheckBox
                    right="Remember me"
                    value={rememberMe}
                    onValueChange={()=>asyncRemember()} />
                </View>
            <TouchableOpacity text="Login" onPress={() =>formValidator(userCred,"login",()=>signIn(navigation))}
                settings={["danger", "outlined"]} />
            <Link text={"Register"} settings={["primary", "underline"]} onPress={() => navigation.navigate("Auth", { screen: 'register' })} />
            <Text onPress={async()=>{
                alert(userCred+"")
            }}>Test me </Text>
        </ViewContainer>
    )
}

export default Login