import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

import HomeScreen from '../screens/Home/Home';
import HomeDetailed from '../screens/Home/HomeDetailed';

import HomeStack from './HomeStack';
import SettingStack from './SettingsStack';

const Icon = (title,icon) =>{
    return <TouchableOpacity style={styles.IconContainer}>
        {icon}
        <Text style={styles.IconTitle}>{title}</Text>
    </TouchableOpacity>
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="HomeStack"
    backBehavior="initialRoute"
    screenOptions={{
      tabBarShowLabel:false,
      tabBarActiveTintColor: 'green',
    //   tabBarActiveBackgroundColor: '#e91e63',
    }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown:false,
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size }) => (
            <MaterialCommunityIcons name="home" color={focused?"green":"red"} size={focused?28:24} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingStack}
        options={{
          headerShown:false,
          tabBarLabel: 'Settings',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="settings" color={focused?"green":"red"} size={focused?28:24} />
          ),
        //   tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    IconContainer:{
        alignItems:'center'
    },
    IconTitle:{
        fontSize:12
    }
})

export default MyTabs