import React from 'react'
import {View,Text} from 'react-native'

const About = ({navigation}) =>{
    return(
        <View>
            <Text  style={{textAlign:'center',textAlignVertical:'center',height:300}} onPress={()=>navigation.navigate("aboutDetailed")}>About Page</Text>
        </View>
    )
}

export default About