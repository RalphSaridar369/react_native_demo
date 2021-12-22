import {styles} from './AppStyle';
import {View,Image,Text} from 'react-native'; 
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
	return (
		<DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
			<View style={styles.LogoImgContainer}>
				<Image source={require('./assets/Logo-Drawer.png')} style={styles.LogoImg} resizeMode='cover' />
			</View>
			<View style={styles.LoggedinContainer}>
				<Text style={styles.LoggedinText}>Logged in as user@yopmail.com</Text>
			</View>
			<CustomItem label="Home" 
				onPress={() => {
					props.navigation.navigate("home")
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
			<CustomItem label="Logout" 
				onPress={() => {
					props.navigation.navigate("Auth")
				}}
				icon={({focused, color, size}) => (
					<MaterialCommunityIcons name="logout" size={28} color="black" />
			)} />
		</DrawerContentScrollView>
	);
};