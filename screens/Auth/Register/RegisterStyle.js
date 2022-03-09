import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    login_container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor:'#FF6863'
    },
    card:{
        backgroundColor:'#fff',
        marginVertical:30,
        paddingVertical:30,
        padding:20,
        borderRadius:40
    },
    Button: {
        alignItems: 'center',
        backgroundColor: 'blue',
        width: 200,
        marginVertical: 10,
        paddingVertical: 10
    },
    ButtonText: {
        color: '#fff'
    },
    Header: {
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 300
    },
})