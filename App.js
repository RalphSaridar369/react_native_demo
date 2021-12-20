import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { createDrawerNavigator } from "@react-navigation/drawer";

import { CustomDrawer } from './CustomDrawer';
import useFonts from './assets/Fonts/Hook';

import AboutStack from './navigations/AboutStack';
import BottomTabStack from './navigations/BottomTabStack';
import AuthStack from './navigations/AuthStack';

const DrawerStack = createDrawerNavigator();

export default function App() {

	const [IsReady, SetIsReady] = useState(false);

	const LoadFonts = async () => {
		await useFonts();
	};

	if (!IsReady) {
		return <AppLoading
			startAsync={LoadFonts}
			onFinish={() => SetIsReady(true)}
			onError={() => { }}
		/>
	}
	else
		return (
			<NavigationContainer>
				<DrawerStack.Navigator
					drawerContent={(props) => (
						<CustomDrawer
							{...props}
						/>
					)}
				>
					<DrawerStack.Screen name="Home" component={BottomTabStack} />
					<DrawerStack.Screen name="About" component={AboutStack} />
					<DrawerStack.Screen name="Auth" component={AuthStack} 
					options={{
						headerShown:false
					}}/>
				</DrawerStack.Navigator>
			</NavigationContainer>
		);
};

