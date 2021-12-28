import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { AntDesign } from '@expo/vector-icons';

const DocumentPickerComponent = (props) =>{

    const [gotDocument,setGotDocument] = useState(false) 

    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        alert(result.uri);
        setGotDocument(result.uri?true:false);
        console.log(result);
        props.setDocument(result.uri)
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