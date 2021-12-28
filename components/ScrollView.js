import { Platform, ScrollView } from "react-native";

const ScrollViewComponent = (props) =>{
    return(
        <ScrollView style={{ flex:1 }}
        showsVerticalScrollIndicator={Platform.OS=='ios'?false:true}>
            {props.children}
        </ScrollView>
    )
}

export default ScrollViewComponent