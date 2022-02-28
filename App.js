import React, { useState, useMemo, useEffect, useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { createDrawerNavigator } from "@react-navigation/drawer";
import {CustomDrawer} from './CustomDrawer';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {Dimensions, Text, View, StyleSheet } from 'react-native'

import useFonts from './assets/Fonts/Hook';
import { clearAll, getData, storeData } from './helpers/asyncStorage';

import AboutStack from './navigations/AboutStack';
import BottomTabStack from './navigations/BottomTabStack';
import AuthStack from './navigations/AuthStack';
import Products from './screens/Products/Products';

import { MainContext, initialState } from './MainContext.js';
import mainReducer from './reducer/MainReducer.js';

const DrawerStack = createDrawerNavigator();

export const App = () => {
	
	const [state, dispatch] = useReducer(mainReducer, initialState);
	const [LoggedIn, setLoggedIn] = useState(false)
	const [UserData, setUserData] = useState({});
	const [IsReady, setIsReady] = useState(false);
	const LoadFonts = async () => {
		await useFonts();
	};

	useEffect(()=>{
		let runEffect = async() =>{
			console.log("GLOBAL STATE: ",await state)
			let user = await getData("user")
			if(user){
				// setLoggedIn(true);
				// setUserData(user);
				dispatch({type:'SIGN_IN', payload: {
					...state,
					UserData:{
						email:'user1@yopmail.com'
					},
				}})
			}
		}
		runEffect()
	},[])

	useEffect(()=>{

	},[dispatch])

// <------ HEADER OPTIONS IF LOGGED IN ------> 
const Header = (props) =>{
	return (
		<View style={styles.headerContainer}>
			<Text style={styles.title}>{props.title}</Text>
			{(state.LoggedIn && props?.icons != undefined)&& <View style={styles.iconContainer}>
				{props.icons.map((item,index)=> <View key={index}>{item.icon}</View>)}
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
					>
						<DrawerStack.Screen name="Home" component={BottomTabStack} options={{
							headerTitle:()=><Header title="Home" LoggedIn={LoggedIn} 
							icons={[
								{icon:<MaterialCommunityIcons name="login" size={24} color="black" style={styles.icon} onPress={()=>alert("test")}/>},
								{icon:<MaterialCommunityIcons name="logout" size={24} color="black" style={styles.icon} onPress={()=>alert("test")}/>},
							]}/>}}/>
						<DrawerStack.Screen name="About" component={AboutStack} options={{
							headerTitle:()=><Header title="About" LoggedIn={LoggedIn} 
						/>}} />
						<DrawerStack.Screen name="Auth" component={AuthStack} options={{ headerShown:false }} />
						<DrawerStack.Screen name="Products" component={Products} options={{
							headerTitle:()=><Header title="Products" LoggedIn={LoggedIn} 
						/>}} />
					</DrawerStack.Navigator>
				</NavigationContainer>
		</MainContext.Provider>
		</>
		);
};

const styles = StyleSheet.create({
	headerContainer:{
	    flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-between',
		flex:1,
		width:Dimensions.get('window').width*0.8,
	},
	title:{
		fontSize:18,
		flex:3
	},
	iconContainer:{
		display:'flex',
		flexDirection:'row',
	},
	icon:{
		marginRight:20
	}
})

export default App