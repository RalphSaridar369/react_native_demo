import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Searchbar } from 'react-native-paper';

const SearchbarC =(props)=>{
    return(
        <Searchbar {...props}
        selectionColor='#31c2aa'
        activeOutlineColor="#31c2aa"
         />
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'lightgray',
    }
})

export default SearchbarC