import React, { useState, useMemo, useEffect, useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawer } from './CustomDrawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Dimensions, Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import useFonts from './assets/Fonts/Hook';
import { clearAll, getData, storeData } from './helpers/asyncStorage';

//importing stacks
import AboutStack from './navigations/AboutStack';
import AuthStack from './navigations/AuthStack';
import ProductStack from './navigations/ProductStack';

import Home from './screens/Home/Home';

import { MainContext, initialState } from './MainContext.js';
import mainReducer from './reducer/MainReducer.js';
import { Platform } from 'react-native-web';

const DrawerStack = createDrawerNavigator();

export const App = () => {

	const [state, dispatch] = useReducer(mainReducer, initialState);
	const [IsReady, setIsReady] = useState(false);
	const LoadFonts = async () => {
		await useFonts();
	};

	useEffect(() => {
		let runEffect = async () => {
			console.log("GLOBAL STATE: ", await state)
			let user = await getData("user")
			if (user) {
				// setLoggedIn(true);
				// setUserData(user);
				dispatch({
					type: 'SIGN_IN', payload: {
						...state,
						UserData: {
							email: 'user1@yopmail.com'
						},
					}
				})
			}
		}
		runEffect()
	}, [])

	// <------ HEADER OPTIONS IF LOGGED IN ------> 
	const Header = (props) => {
		return (
			<View style={styles.headerContainer}>
				<Text style={styles.title}>{props.title}</Text>
				{(state.LoggedIn && props?.icons != undefined) && <View style={styles.iconContainer}>
					{props.icons.map((item, index) => <View key={index}>{item.icon}</View>)}
				</View>}
			</View>
		)
	}

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
				<MainContext.Provider value={[state, dispatch]}>
					<NavigationContainer>
						<DrawerStack.Navigator
							drawerContent={(props) => (
								<CustomDrawer
									{...props}
									LoggedIn={state.LoggedIn}
									UserData={state.UserData}
								/>
							)}
							screenOptions={({ navigation }) => ({
								swipeEnabled:Platform.OS=="android",
								headerStyle: { backgroundColor: '#FF6863' },
								headerLeft: props => <TouchableOpacity style={{ marginHorizontal: 20 }}
									onPress={() => navigation.toggleDrawer()}>
									<MaterialCommunityIcons name="menu" size={28} color="white" />
								</TouchableOpacity>,
								headerRight: props =><TouchableOpacity style={{paddingRight:20}}>
									<MaterialCommunityIcons name="cart-outline" size={28} color="white" />
								</TouchableOpacity>,
							})}
						>
							<DrawerStack.Screen name="Home" component={Home} options={{
								drawerIcon: config =><MaterialCommunityIcons name="home" size={28} color={config.focused?"white":"black"} />,
								headerTitle: () => <Header title="Home" LoggedIn={state.LoggedIn}/>,
							}} />
							<DrawerStack.Screen name="About" component={AboutStack} options={{
								headerTitle: () => <Header title="About" LoggedIn={state.LoggedIn}
								/>
							}} />
							<DrawerStack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
							<DrawerStack.Screen name="Products" component={ProductStack} options={{
								headerTitle: () => <Header title="Products" LoggedIn={state.LoggedIn}
								/>
							}} />
						</DrawerStack.Navigator>
					</NavigationContainer>
				</MainContext.Provider>
			</>
		);
};

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		flex: 1,
		width: Dimensions.get('window').width * 0.8,
	},
	title: {
		fontSize: 18,
		flex: 3,
		color: '#fff'
	},
	iconContainer: {
		display: 'flex',
		flexDirection: 'row',
	},
	icon: {
		marginRight: 20
	}
})

export default App