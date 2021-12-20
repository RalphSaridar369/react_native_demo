import React from 'react'
import {View,Text} from 'react-native'

const Home = ({navigation}) =>{
    return(
        <View>
            <Text style={{textAlign:'center',textAlignVertical:'center',height:300}} onPress={()=>navigation.navigate("homeDetailed")}>Home Page</Text>
        </View>
    )
}

export default Home