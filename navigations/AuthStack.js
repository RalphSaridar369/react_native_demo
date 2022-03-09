import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Auth/Login/Login';
import Register from '../screens/Auth/Register/Register';

const AStack = createStackNavigator();

const AuthStack = () =>{
    return(
        <AStack.Navigator
        detachInactiveScreens
        >
            <AStack.Screen name="login" 
            component={Login} 
            options={{headerShown:false}} />
            <AStack.Screen name="register" 
            component={Register} 
            options={{headerShown:false}} />
        </AStack.Navigator>
    )
}

export default AuthStack