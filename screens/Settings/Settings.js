import React from 'react'
import {View,Text} from 'react-native'

const Settings = ({navigation}) =>{
    return(
        <View>
            <Text style={{textAlign:'center',textAlignVertical:'center',height:300}} onPress={()=>navigation.navigate("settingsDetailed")}>Settings Page</Text>
        </View>
    )
}

export default Settings