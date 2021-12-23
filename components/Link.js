import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const LinkComponent = (props) =>{

    const chosenStyles = props.settings.map((item)=>styles[item])
    return(
        <TouchableOpacity onPress={()=>props.onPress()}>
            <Text  style={[chosenStyles]}>{props.text}</Text>
        </TouchableOpacity>
    )
}

// <------ STYLES CHANGES DEPENDING ON PROPS ------> 

const styles = StyleSheet.create({
    primary:{
        color:'green',
    },
    danger:{
        color:'red',
    },
    underline:{
        textDecorationLine:'underline'
    }
})

export default LinkComponent