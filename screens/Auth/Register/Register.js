import React, { useContext, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { formValidator } from '../../../helpers/formValidator';
import { Alert, TouchableOpacity, TextInput, PassInput } from '../../../components/index';
import { styles } from './RegisterStyle';

const Register = ({ navigation }) => {
    const [userCred, setUserCred] = useState({ email: '', password: '', confirm: '' });
    const [showPass, setShowPass] = useState(true);

    const settingCreds = (e, t) => {
        setUserCred({ ...userCred, [t]: e })
    };

    return (
        <View style={styles.login_container}>
            <ScrollView>
                <View style={styles.card}>
                    <TextInput
                        label="Email" onChangeText={(e) => settingCreds(e, "email")} value={userCred.email}
                    />
                    <PassInput
                        label="Password" onChangeText={(e) => settingCreds(e, "password")} value={userCred.password}
                    />
                    <PassInput
                        label="Confirm Password" onChangeText={(e) => settingCreds(e, "confirm")} value={userCred.confirm}
                    />
                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity text="Register" onPress={() => formValidator(userCred, "register", () => Alert("SignUp", "User registered successfully", [{ text: "Ok", onPress: () => navigation.navigate("login") }]))}
                            settings={["primary", "outlined"]} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Register