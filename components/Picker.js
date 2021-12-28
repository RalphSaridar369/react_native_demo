import { Platform, StyleSheet, View } from "react-native";
import {Picker} from '@react-native-picker/picker';

const PickerComponent = (props) =>{
    return(
        <View style={[styles.container,Platform.OS!="ios"?styles.android:null]}>
            <Picker
            numberOfLines={1}
            mode={Platform.OS=='ios'?"dropdown":"dialog"}
            prompt={props.prompt}
            selectedValue={props.selectedValue}
            onValueChange={(itemValue, itemIndex)=>props.onValueChange(itemValue, itemIndex)}>
                {props.map.map((item,index)=><Picker.Item label={item.label} value={item.value} key={index} />)}
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
        paddingHorizontal:10,
    },
    android:{
        borderWidth:1,
        borderColor:'lightblue',
        height:50,
        justifyContent:'center'
    }
})

export default PickerComponent