import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MainContext } from '../../MainContext';
import { AntDesign } from '@expo/vector-icons';
import { formValidator } from '../../helpers/formValidator';
import { TextInput, Link, TouchableOpacity, ViewContainer } from '../../components';

const Login = ({ navigation }) => {
    const { signIn } = useContext(MainContext)
    const [userCred, setUserCred] = useState({ email: '', password: '' })
    const [showPass, setShowPass] = useState(true)

    const settingCreds = (e, t) => {
        setUserCred({ ...userCred, [t]: e })
    }

    return (
        <ViewContainer>
            <View style={styles.LogoImgContainer}>
                <Image source={require('../../assets/Logo-Drawer.png')} style={styles.LogoImg} resizeMode='cover' />
            </View>
            <TextInput placeholder="Email" onChangeText={(e) => settingCreds(e, "email")} value={userCred.email}
                leftIcon={{
                    icon: <AntDesign name="user" size={24} color="black" />,
                    onPress: () => setShowPass(!showPass)
                }} />
            <TextInput placeholder="Password" onChangeText={(e) => settingCreds(e, "password")} value={userCred.password} secureTextEntry={showPass}
                leftIcon={{
                    icon: <AntDesign name="key" size={24} color="black" />,
                    onPress: () => setShowPass(!showPass)
                }}
                rightIcon={{
                    icon: <AntDesign name="eyeo" size={24} color="black" />,
                    onPress: () => setShowPass(!showPass)
                }} />
            <TouchableOpacity text="Login" onPress={() =>formValidator(userCred,"login",()=>signIn(navigation))}
                settings={["danger", "outlined"]} />
            <Link text={"Register"} settings={["primary", "underline"]} onPress={() => navigation.navigate("Auth", { screen: 'register' })} />
        </ViewContainer>
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