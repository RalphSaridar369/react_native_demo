import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";

const TextInputComponent = (props) => {
    const [focused,setFocused] = useState(false);
    const [error,setError] = useState(false);
    return (
        <View style={[styles.container,{borderColor:!focused?"lightblue":error?"red":"green"}]}>
            {props.leftIcon && <TouchableOpacity onPress={() => props.leftIcon.onPress()}>
                {props.leftIcon.icon}
            </TouchableOpacity>}
            <TextInput
                {...props.main}
                onFocus={(e)=>{
                    setFocused(true)
                }}
                onBlur={(e)=>{
                    setFocused(false)
                }}
                style={[styles.textInput]} />
            {props.rightIcon && <TouchableOpacity onPress={() => props.rightIcon.onPress()}>
                {props.rightIcon.icon}
            </TouchableOpacity>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 250,
        height: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'lightblue',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    textInput: {
        paddingHorizontal: 10,
        height: 40,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default TextInputComponent