import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import React,{useState} from 'react'; 

const DrawerCollapsible = (props) =>{
    const [open,setOpen] = useState(false);
    return(
        <View>
            <TouchableOpacity onPress={()=>setOpen(!open)} style={[styles.buttonContainer,props.buttonStyle]}>
                {props.icon}
                <Text>Open</Text>
            </TouchableOpacity>
            {open && <View>
                <Text>Text</Text>
            </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        display:'flex',
        flexDirection:'row'
    }
})

export default DrawerCollapsible