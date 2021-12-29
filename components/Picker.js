import { Platform, StyleSheet, View } from "react-native";
import {Picker} from '@react-native-picker/picker';

const PickerComponent = (props) =>{
    const data = [
        {label:'Java',value:1},
        {label:'C++',value:2},
        {label:'C#',value:3},
        {label:'C',value:4},
        {label:'F#',value:5},
        {label:'J',value:6},
    ]
    return(
        <View style={[styles.container,Platform.OS!="ios"?styles.android:null]}>
            <Picker
            numberOfLines={1}
            mode={Platform.OS=='ios'?"dropdown":"dialog"}
            prompt={props.prompt}
            selectedValue={props.selectedValue}
            onValueChange={(itemValue, itemIndex)=>props.onValueChange(itemValue, itemIndex)}>
                {data.map((item,index)=><Picker.Item label={item.label} value={item.value} key={index} />)}
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
        marginVertical:20,
        paddingHorizontal:10,
        width:300
    },
    android:{
        borderWidth:1,
        borderColor:'lightblue',
        height:50,
        justifyContent:'center'
    }
})

export default PickerComponent