import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const TouchableOpacityComponent = (props) =>{

    const chosenStyles = props.settings.map((item)=>styles[item])
    return(
        <TouchableOpacity onPress={()=>props.onPress()} style={[chosenStyles,styles.base,props.style]} >
            <Text style={{
                color:props.settings.includes("outlined")?"#FF6863":props.settings.includes("danger")?"red":"green",
                fontFamily:'OpenSans-Medium',
                fontSize:20,
            }}>{props.text}</Text>
        </TouchableOpacity>
    )
}

// <------ STYLES CHANGES DEPENDING ON PROPS ------> 

const styles = StyleSheet.create({
    base:{
        paddingHorizontal:10,
        paddingVertical:10,
        marginVertical:20,
        width:200,
        alignItems:'center',
        borderRadius:20,
    },
    null:{
        borderColor:null,
        borderWidth:0,
    },  
    primary:{
        borderColor:'#FF6863',
        backgroundColor:'#FF6863',
    },
    danger:{
        borderColor:'#313783',
        backgroundColor:'#313783',
    },
    outlined:{
        backgroundColor:null,
        borderColor:'#FF6863',
        borderWidth:1
    },
})

export default TouchableOpacityComponent