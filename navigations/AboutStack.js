import { createStackNavigator } from '@react-navigation/stack'

import AboutScreen from '../screens/About/About';
import AboutDetailedScreen from '../screens/About/AboutDetailed';

const AStack = createStackNavigator();

const AboutStack = () =>{
    return(
        <AStack.Navigator
        detachInactiveScreens>
            <AStack.Screen name="about" 
            component={AboutScreen} 
            options={{headerShown:false}} />
            <AStack.Screen name="aboutDetailed" 
            component={AboutDetailedScreen} 
            options={{headerShown:false}} />
        </AStack.Navigator>
    )
}

export default AboutStack