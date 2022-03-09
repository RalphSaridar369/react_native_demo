import React, { useEffect } from 'react'
import {Text, KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import TextInput from '../../../components/TextInput';

const Products = () =>{
    return(
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
        <TextInput 
            main={{placeholder:"Email", value:'test'}} />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center'
    },
})

export default Products