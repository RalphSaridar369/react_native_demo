import {ScrollView, View, StyleSheet} from 'react-native';
import { Text } from '../../../components';

const ScrollViewComponent = (props) =>{
    return(
        <ScrollView style={styles.scroll_view}> 
            {props.data.map((item,index)=>
            <View key={index} style={styles.card}>
                <View style={styles.info_container}>
                    <Text>{item.product.name}</Text>
                    <Text>{item.qty} * ${item.product.price}</Text>
                    <Text style={styles.total_item}>${item.qty * item.product.price}</Text>
                </View>
            </View>
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll_view:{
        padding:20
    },  
    card:{
        marginBottom:20,
        paddingHorizontal:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:'lightgray',
    },
    info_container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    total_item:{
        fontFamily:'OpenSans-Bold',
        color:'#FF6863'
    }
})

export default ScrollViewComponent