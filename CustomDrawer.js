import React , {useContext} from 'react';
import {styles} from './AppStyle';
import {View,Image,Text} from 'react-native'; 
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MainContext } from './MainContext';

const CustomItem = (props) =>{
	return(
		<DrawerItem
		label={props.label}
		onPress={props.onPress}
		icon={props.icon}
		activeBackgroundColor="transparent"
		activeTintColor="black"
		inactiveTintColor="black"
	/>
	)
}


export const CustomDrawer = (props) => {
    const [state, dispatch] = useContext(MainContext);
	console.log("state inside custom",state);
	const clickLogout = () =>{
        dispatch({type: 'SIGN_OUT'})
	}
	return (
		<DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
			<View style={styles.LogoImgContainer}>
				<Image source={require('./assets/logo.jpg')} style={styles.LogoImg} resizeMode='cover' />
			</View>
			{state.LoggedIn && <View style={styles.LoggedinContainer}>
				<Text style={styles.LoggedinText}>Logged in as {state.UserData.email}</Text>
			</View>}
			<CustomItem label="Home" 
				onPress={() => {
					props.navigation.navigate("Home")
				}}
				icon={({focused, color, size}) => (
					<MaterialCommunityIcons name="home" size={28} color="black" />
			)} />
			<CustomItem label="About" 
				onPress={() => {
					props.navigation.navigate("About")
				}}
				icon={({focused, color, size}) => (
					<MaterialCommunityIcons name="account-question" size={28} color="black" />
			)} />
			{props.LoggedIn && <CustomItem label="Products" 
				onPress={() => {
					props.navigation.navigate("Products")
				}}
				icon={({focused, color, size}) => (
					<MaterialCommunityIcons name="zip-box-outline" size={28} color="black" />
			)} />}
			<CustomItem label={props.LoggedIn?"Logout":"Login"} 
				onPress={() => props.LoggedIn?clickLogout():props.navigation.navigate("Auth")}
				icon={({focused, color, size}) => (
					<MaterialCommunityIcons name={props.LoggedIn?"logout":"login"}  size={28} color="black" />
			)} />
		</DrawerContentScrollView>
	);
};