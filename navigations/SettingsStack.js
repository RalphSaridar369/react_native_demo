import { createStackNavigator } from '@react-navigation/stack'

import SettingsScreen from '../screens/Settings/Settings';
import SettingsDetailedScreen from '../screens/Settings/SettingsDetailed';

const SStack = createStackNavigator();

const SettingStack = () =>{
    return(
        <SStack.Navigator>
            <SStack.Screen name="settings" 
            component={SettingsScreen} 
            options={{headerShown:false}} />
            <SStack.Screen name="settingsDetailed" 
            component={SettingsDetailedScreen} 
            options={{headerShown:false}} />
        </SStack.Navigator>
    )
}

export default SettingStack