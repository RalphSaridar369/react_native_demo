import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home/Home';
import HomeDetailedScreen from '../screens/Home/HomeDetailed';

const HStack = createStackNavigator();

const HomeStack = () =>{
    return(
        <HStack.Navigator>
            <HStack.Screen name="test" 
            component={HomeScreen} 
            options={{headerShown:false}} />
            <HStack.Screen name="homeDetailed" 
            component={HomeDetailedScreen} 
            options={{headerShown:false}} />
        </HStack.Navigator>
    )
}

export default HomeStack