import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const TouchableOpacityComponent = (props) =>{

    const chosenStyles = props.settings.map((item)=>styles[item])
    return(
        <TouchableOpacity onPress={()=>props.onPress()} style={[chosenStyles,styles.base]}>
            <Text style={{
                color:!props.settings.includes("outlined")?"#fff":props.settings.includes("danger")?"red":"green",
                
            }}>{props.text}</Text>
        </TouchableOpacity>
    )
}

// <------ STYLES CHANGES DEPENDING ON PROPS ------> 

const styles = StyleSheet.create({
    base:{
        paddingHorizontal:10,
        paddingVertical:10,
        marginVertical:10,
        width:200,
        alignItems:'center',
        borderRadius:20,
        borderWidth:1,
    },
    primary:{
        borderColor:'green',
        backgroundColor:'green',
    },
    danger:{
        borderColor:'red',
        backgroundColor:'red',
    },
    outlined:{
        backgroundColor:null
    },
})

export default TouchableOpacityComponent