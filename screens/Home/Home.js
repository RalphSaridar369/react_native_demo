import React, { useEffect } from 'react'
import {View,Text} from 'react-native';
import { useContext } from 'react';
import { MainContext } from '../../MainContext';

const Home = ({navigation}) =>{
    return(
        <View>
            <Text style={{textAlign:'center',textAlignVertical:'center',height:300}} onPress={()=>navigation.navigate("homeDetailed")}>Home Page</Text>
        </View>
    )
}

export default Home