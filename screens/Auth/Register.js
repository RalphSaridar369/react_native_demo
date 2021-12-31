import React, { useContext, useState } from 'react';
import { View, Image } from 'react-native';
import { MainContext } from '../../MainContext';
import { AntDesign } from '@expo/vector-icons';
import { formValidator } from '../../helpers/formValidator';
import { Alert, TouchableOpacity, TextInput } from '../../components/index';
import {styles} from './RegisterStyle';

const Register = ({ navigation }) => {
    const [userCred, setUserCred] = useState({ email: '', password: '', confirm: '' });
    const [showPass, setShowPass] = useState(true);

    const settingCreds = (e, t) => {
        setUserCred({ ...userCred, [t]: e })
    };

    return (
        <View style={styles.loginContainer}>
            <View style={styles.LogoImgContainer}>
                <Image source={require('../../assets/Logo-Drawer.png')} style={styles.LogoImg} resizeMode='cover' />
            </View>
            <TextInput
                main={{ placeholder: "Email", onChangeText: (e) => settingCreds(e, "email"), value: userCred.email }}
                leftIcon={{
                    icon: <AntDesign name="user" size={24} color="black" />,
                    onPress: () => setShowPass(!showPass)
                }} />
            <TextInput
                main={{ placeholder: "Password", onChangeText: (e) => settingCreds(e, "password"), value: userCred.password, secureTextEntry: showPass }}
                leftIcon={{
                    icon: <AntDesign name="key" size={24} color="black" />,
                    onPress: () => setShowPass(!showPass)
                }}
                rightIcon={{
                    icon: <AntDesign name="eyeo" size={24} color="black" />,
                    onPress: () => setShowPass(!showPass)
                }} />
            <TextInput
                main={{ placeholder: "Confirm Password", onChangeText: (e) => settingCreds(e, "confirm"), value: userCred.confirm, secureTextEntry: showPass }}
                leftIcon={{
                    icon: <AntDesign name="key" size={24} color="black" />,
                    onPress: () => setShowPass(!showPass)
                }}
                rightIcon={{
                    icon: <AntDesign name="eyeo" size={24} color="black" />,
                    onPress: () => setShowPass(!showPass)
                }} />
            <TouchableOpacity text="Register" onPress={() => formValidator(userCred, "register", () => Alert("SignUp", "User registered successfully", [{ text: "Ok", onPress: () => navigation.navigate("login") }]))}
                settings={["primary", "outlined"]} />
        </View>
    )
}

export default Register