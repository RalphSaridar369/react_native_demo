import {ScrollView, View} from 'react-native';

const ScrollViewComponent = (props) =>{
    return(
        <ScrollView>
            {props.data.map((item,index)=>
            <View key={index}>
                <Text>{item.name}</Text>
            </View>
            )}
        </ScrollView>
    )
}

export default ScrollViewComponent