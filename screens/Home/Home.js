import React, { useEffect,useContext } from 'react'
import {View,Text} from 'react-native';
import { MainContext } from '../../MainContext';

const Home = ({navigation}) =>{
    const [state, dispatch] = useContext(MainContext);
    useEffect(()=>{

    },[])
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>{state.LoggedIn?"logged in":"not logged in"}</Text>
            <Text onPress={()=>navigation.navigate("homeDetailed")}>Home Page</Text>
        </View>
    )
}

export default Home