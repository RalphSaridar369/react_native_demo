import { Platform, ScrollView, View } from "react-native";

const ScrollViewComponent = (props) =>{
    return(
        <ScrollView style={{ flex:1, marginHorizontal:20 }}
        showsVerticalScrollIndicator={false}>
            <View style={{paddingVertical:20}}>{props.children}</View>
        </ScrollView>
    )
}

export default ScrollViewComponent