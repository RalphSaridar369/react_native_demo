import React, { useState,useReducer, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { createDrawerNavigator } from "@react-navigation/drawer";
import {View,Text} from 'react-native'
import {MainContext} from './MainContext.js'

import { CustomDrawer } from './CustomDrawer';
import useFonts from './assets/Fonts/Hook';

import AboutStack from './navigations/AboutStack';
import BottomTabStack from './navigations/BottomTabStack';
import AuthStack from './navigations/AuthStack';
import HomeScreen from './screens/Home/Home.js';
import Login from './screens/Auth/Login.js';

// export const MainContext = createContext();
const DrawerStack = createDrawerNavigator();

export default function App() {

	const [IsReady, setIsReady] = useState(false);
	const [LoggedIn, setLoggedIn] = useState(false);
	const [usertoken, setUsertoken] = useState(null);

	const LoadFonts = async () => {
		await useFonts();
	};

	const authContext = useMemo(()=>({
			signIn:()=>{
				console.log("RUNNING SIGNIN")
				setUsertoken(1234)
				setLoggedIn(true)
			},
			signOut:()=>{
				setUsertoken(null)
				setLoggedIn(false)
			},
		})
	)

	if (!IsReady) {
		return <AppLoading
			startAsync={LoadFonts}
			onFinish={() => setIsReady(true)}
			onError={() => { }}
		/>
	}
	else
		return (
			// <View>
			// 	<Text>Test</Text>
			// </View>
			<>
			  <MainContext.Provider value={authContext}>
				<NavigationContainer>
					<DrawerStack.Navigator
						drawerContent={(props) => (
							<CustomDrawer
								{...props}
							/>
						)}
					>
						{LoggedIn?<>
						<DrawerStack.Screen name="Home" component={/* BottomTabStack */HomeScreen} />
						{/* <DrawerStack.Screen name="About" component={AboutStack} />
						<DrawerStack.Screen name="Auth" component={AuthStack}}
						options={{
							headerShown:false
						}}/> */}
						</>:<DrawerStack.Screen name="Auth" component={AuthStack/* Login */}
						options={{
							headerShown:false
						}}/>}
					</DrawerStack.Navigator>
				</NavigationContainer>
		</MainContext.Provider>
		</>
		);
};

