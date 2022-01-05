import React, { useEffect } from 'react'
import {View,Text} from 'react-native';
import { useContext } from 'react';
import { MainContext } from '../../MainContext';

const Products = () =>{
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Products Page</Text>
        </View>
    )
}

export default Products