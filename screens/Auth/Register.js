import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import TextInputComponent from '../../components/TextInput';
import { MainContext } from '../../MainContext';
import { AntDesign } from '@expo/vector-icons';
import TouchableOpacityComponent from '../../components/TouchableOpacity';
import AlertComponent from '../../components/Alert';

const Login = ({ navigation }) => {
    const { signIn } = useContext(MainContext)
    const [userCred, setUserCred] = useState({ email: '', password: '', confirm:'' })
    const [showPass, setShowPass] = useState(true)

    const settingCreds = (e, t) => {
        setUserCred({ ...userCred, [t]: e })
    }

    return (
        <View style={styles.loginContainer}>
            <View style={styles.LogoImgContainer}>
                <Image source={require('../../assets/Logo-Drawer.png')} style={styles.LogoImg} resizeMode='cover' />
            </View>
            <TextInputComponent placeholder="Email" onTextChange={(e) => settingCreds(e, "email")} value={userCred.email}
                leftIcon={{
                    icon: <AntDesign name="user" size={24} color="black" />,
                    onPress: () => setShowPass(!showPass)
                }} />
            <TextInputComponent placeholder="Password" onTextChange={(e) => settingCreds(e, "password")} value={userCred.password} secureTextEntry={showPass}
                leftIcon={{
                    icon: <AntDesign name="key" size={24} color="black" />,
                    onPress: () => setShowPass(!showPass)
                }}
                rightIcon={{
                    icon: <AntDesign name="eyeo" size={24} color="black" />,
                    onPress: () => setShowPass(!showPass)
                }} />
            <TextInputComponent placeholder="Confirm Password" onTextChange={(e) => settingCreds(e, "confirm")} value={userCred.confirm} secureTextEntry={showPass}
                leftIcon={{
                    icon: <AntDesign name="key" size={24} color="black" />,
                    onPress: () => setShowPass(!showPass)
                }}
                rightIcon={{
                    icon: <AntDesign name="eyeo" size={24} color="black" />,
                    onPress: () => setShowPass(!showPass)
                }} />
            <TouchableOpacityComponent text="Register" onPress={() => AlertComponent("SignUp","User registered successfully")}
                settings={["primary", "outlined"]} />
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    Button: {
        alignItems: 'center',
        backgroundColor: 'blue',
        width: 200,
        marginVertical: 10,
        paddingVertical: 10
    },
    ButtonText: {
        color: '#fff'
    },
    Header: {
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 300
    },
    LogoImgContainer: {
        alignItems: 'center',
        marginBottom: 30
    },
    LogoImg: {
        width: 200,
        height: 200,
    },
})

export default Login