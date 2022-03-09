import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width
export const styles = StyleSheet.create({
    main:{
        paddingVertical:10
    },  
    product_image:{
        height:200,
        width:screenWidth
    },
    content_container:{
        paddingHorizontal:20
    },
    product_name:{
        fontSize:24
    }
})