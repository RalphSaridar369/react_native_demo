import React, { useContext, useState } from 'react';
import { View, Image } from 'react-native';
import { MainContext } from '../../MainContext';
import { formValidator } from '../../helpers/formValidator';
import { Alert, TouchableOpacity, TextInput, PassInput } from '../../components/index';
import { styles } from './RegisterStyle';

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
                label="Email" onChangeText={(e) => settingCreds(e, "email")} value={userCred.email}
                left="account-outline"
            />
            <PassInput
                label="Password" onChangeText={(e) => settingCreds(e, "password")} value={userCred.password}
                left="lock-outline"
            />
            <PassInput
                label="Confirm Password" onChangeText={(e) => settingCreds(e, "confirm")} value={userCred.confirm}
                left="lock-outline"
            />
            <TouchableOpacity text="Register" onPress={() => formValidator(userCred, "register", () => Alert("SignUp", "User registered successfully", [{ text: "Ok", onPress: () => navigation.navigate("login") }]))}
                settings={["primary", "outlined"]} />
        </View>
    )
}

export default Register