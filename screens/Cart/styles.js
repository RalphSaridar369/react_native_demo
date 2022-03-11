import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    total:{
        backgroundColor:'#FF6863',
        paddingVertical:5,
        paddingHorizontal:20,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    total_label:{
        color:'white',
        marginTop:0,
    },
    total_value:{
        marginVertical:0,
        fontSize:20,
        fontFamily:'OpenSans-Bold',
        color:'white'
    }
}) 