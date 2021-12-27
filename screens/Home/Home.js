import React, { useEffect } from 'react'
import {View,Text} from 'react-native';
import { useContext } from 'react';
import { MainContext } from '../../MainContext';

const Home = ({navigation}) =>{
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text onPress={()=>navigation.navigate("homeDetailed")}>Home Page</Text>
        </View>
    )
}

export default Home