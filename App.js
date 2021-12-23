import React, { useState, useMemo, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { createDrawerNavigator } from "@react-navigation/drawer";
import {MainContext} from './MainContext.js';
import {CustomDrawer} from './CustomDrawer';

import useFonts from './assets/Fonts/Hook';
import { clearAll, getData, storeData } from './helpers/asyncStorage';

import AboutStack from './navigations/AboutStack';
import BottomTabStack from './navigations/BottomTabStack';
import AuthStack from './navigations/AuthStack';

const DrawerStack = createDrawerNavigator();

export default function App() {

	const [IsReady, setIsReady] = useState(false);
	const [LoggedIn, setLoggedIn] = useState(false);
	const [Usertoken, setUsertoken] = useState(null);

	const LoadFonts = async () => {
		await useFonts();
	};

	useEffect(()=>{
		let runEffect = async() =>{
			let user = await getData("user")
			user?setLoggedIn(true):setLoggedIn(false)
		}
		runEffect()
	},[])

	useEffect(()=>{
	},[setUsertoken,setLoggedIn,setIsReady])


// <------ CONTEXT FUNCTIONALITIES ------> 

	const authContext = useMemo(()=>({
			signIn:async(navigation)=>{
				await storeData('user','1234')
				setUsertoken(1234);
				setLoggedIn(true);
				navigation.navigate("Home");
			},
			signOut:async()=>{
				await clearAll()
				setUsertoken(null)
				setLoggedIn(false)
			},
			LoggedIn:LoggedIn,
			Usertoken:Usertoken,
		})
	)




// <------ LOADING FONTS ------> 

	if (!IsReady) {
		return <AppLoading
			startAsync={LoadFonts}
			onFinish={() => setIsReady(true)}
			onError={() => { }}
		/>
	}

// <------ RETURNING SCREENS ------> 

	else
		return (
			<>
			  <MainContext.Provider value={authContext}>
				<NavigationContainer>
					<DrawerStack.Navigator
						drawerContent={(props) => (
							<CustomDrawer
								{...props}
								LoggedIn={LoggedIn}
							/>
						)}
					>
						<DrawerStack.Screen name="Home" component={BottomTabStack} />
						<DrawerStack.Screen name="About" component={AboutStack} />
						<DrawerStack.Screen name="Auth" component={AuthStack} options={{ headerShown:false }}/>
					</DrawerStack.Navigator>
				</NavigationContainer>
		</MainContext.Provider>
		</>
		);
};

