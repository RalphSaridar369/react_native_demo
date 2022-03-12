import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main:{
        flex:1
    },
    flatlist:{
        paddingVertical:20,
        paddingHorizontal:'auto'
    },  
    card:{
        margin:5,
        borderRadius:10,
        paddingHorizontal:10,
        borderWidth:1,
        borderColor:'lightgray',
        alignSelf:'center',
        alignItems:'center',
    },  
    image:{
        width: 150,
        height: 150,
    },
    name:{
        fontSize:16,
        width:'50%'
    },
    filter_by:{
        padding:10
    },
    filter_by_header:{
        marginTop:0
    },
    picker_container:{
        alignItems:'center'
    },
    sort_container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingBottom:20
    },
    icon:{
        width:50,
        height:50,
        alignItems:'center',
        borderColor:'#FF6863',
        borderRadius:100,
        borderWidth:0.5,
        padding:10
    },
    icon_text:{
        marginVertical:2,
        color:'#FF6863'
    }
})