import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from 'react-native-paper';

export const TextInputComponent = ({ left, right, ...props }) => {
    const [error, setError] = useState(false);
    return (
        <View style={styles.container}>
            <TextInput
                {...props}
                mode='outlined'
                style={[styles.textInput]}
                left={left ? <TextInput.Icon name={left} /> : null}
                right={right ? <TextInput.Icon name={right} /> : null}
            />
        </View>
    )
}

export const PassInputComponent = ({ left, right, ...props }) => {
    const [error, setError] = useState(false);
    const [show, setShow] = useState(false);
    return (
        <View style={styles.container}>
            <TextInput
                {...props}
                secureTextEntry={show}
                mode='outlined'
                style={[styles.textInput]}
                left={left ? <TextInput.Icon name={left} /> : null}
                right={<TextInput.Icon name={!show?"eye-off-outline":"eye-outline"} onPress={()=>setShow(!show)} />}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 250,
        height: 40,
        alignItems: 'center',
        marginBottom: 20,
    },
    textInput: {
        paddingHorizontal:10,
        width: 250,
        height: 40,
    },
})
