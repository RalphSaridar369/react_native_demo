import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, Platform } from "react-native";
import { TextInput } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

export const TextInputComponent = ({ left, right, ...props }) => {
    const [error, setError] = useState(false);
    return (
        <View style={[styles.container,props.containerStyle]}>
            <TextInput
                {...props}
                activeOutlineColor='#31C2AA'
                selectionColor='#31C2AA'
                activeUnderlineColor='#31c2aa'
                mode={props.variant?props.variant:  Platform.OS=='ios'?'flat':'outlined'}
                style={[styles.textInput,Platform.OS==='ios' && props.style?props.style:Platform.OS==='ios'?styles.ios:styles.android, props.style]}
                left={left ?<TextInput.Icon name={left=='search'?()=><MaterialIcons name="search" color="black" size={20} />:left}  style={{marginTop:14}}/> : null}
                right={right ?<TextInput.Icon name={right=='search'?()=><MaterialIcons name="search" color="black" size={20} />:right}  style={{marginTop:14}}/> : null}
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
                activeOutlineColor='#31C2AA'
                selectionColor='#31C2AA'
                activeUnderlineColor='#31c2aa'
                secureTextEntry={show}
                mode={props.variant?props.variant:Platform.OS=='ios'?'flat':'outlined'}
                style={[styles.textInput,Platform.OS==='ios' && props.style?props.style:Platform.OS==='ios'?styles.ios:styles.android]}
                left={left ? <TextInput.Icon name={left} style={{marginTop:14}} /> : null}
                right={<TextInput.Icon name={!show ? "eye-off-outline" : "eye-outline"} style={{marginTop:14}} onPress={() => setShow(!show)} />}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: Dimensions.get('screen').width * 0.8,
        height: 40,
        alignItems: 'center',
        marginBottom: Platform.OS=='ios'?30:40,
    },
    textInput: {
        paddingHorizontal: 10,
        // alignSelf:'flex-end',
        width: Dimensions.get('screen').width * 0.8,
        // height: 60,
        backgroundColor:'#fff',
        borderColor:'lightgray'
    },
    ios:{
        // height:60
    },
    android:{
        // height:60,
    }
})
