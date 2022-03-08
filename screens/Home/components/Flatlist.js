import React from 'react';
import {View, ScrollView, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { HeaderText, Text } from '../../../components';

const FlatlistComponent =(props)=>{
    return(
        <View style={{flex:1}}>
            <HeaderText style={styles.header_text}>{props.headerText}</HeaderText>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {props.data.map((item,index)=><TouchableOpacity key={index} style={styles.product_image_container}>
                    <Image source={item.image} style={styles.product_image} resizeMode="stretch"/>
                    <Text>{item.name}</Text>
                </TouchableOpacity>)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header_text:{
        fontSize:20,
        marginHorizontal:20
    },
    product_image_container:{
        marginHorizontal:10,
        backgroundColor:'#fff',
        borderWidth:0.5,
        borderColor:'lightgray',
        borderRadius:20,
        padding:20,
        paddingBottom:40
    },
    product_image:{
        width:150,
        height:150,
    }
})

export default FlatlistComponent