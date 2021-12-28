import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { AntDesign } from '@expo/vector-icons';
import { Alert } from './index';

const DocumentPickerComponent = (props) =>{
    const [gotDocument,setGotDocument] = useState(false) 

    const validateType = (value) =>{
        let document = value.split('.') 
        let extension = document[document.length-1];
        if(props.types.includes(extension.toUpperCase()) ||
        props.types.includes(extension.toLowerCase())) 
            return true
        return false
    }

    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        setGotDocument(result.uri && validateType(result.name)?true:false);
        console.log(result);
        if(result.uri && validateType(result.name))
            props.setDocument(result.uri)
        else
            Alert("Error","This extension is not an option")
    }

    return(
        <TouchableOpacity style={styles.documentContainer} onPress={()=>pickDocument()}>
        {props.leftIcon && <View>
            {props.leftIcon.icon}
            </View>}
            <Text>{props.text}</Text>
            <View>
                {props.rightIcon ? 
                props.rightIcon.icon :
                !gotDocument?
                <AntDesign name="closecircleo" size={24} color="red" />:
                <AntDesign name="checkcircleo" size={24} color="green" />}    
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    documentContainer:{
        borderWidth:1,
        borderColor:'lightblue',
        marginVertical:10,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:300
    }
})

export default DocumentPickerComponent