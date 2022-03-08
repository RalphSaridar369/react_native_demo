import React from 'react';
import {Dimensions, View, Image, StyleSheet} from 'react-native';
import { Text } from '../../../components';
import Carousel from 'react-native-snap-carousel';

const screenWidth = Dimensions.get('screen').width;

const CarouselComponent = ({data,...props}) =>{

    const _renderItem = ({item, index}) => {
        return (
            <View>
                <Image style={styles.image} source={item.image} resizeMode="stretch" resizeMethod='auto' />
            </View>
        );
    }

        return (
            <View>
                <Carousel
                  {...props}
                  layout={"default"}
                  data={data}
                  renderItem={_renderItem}
                  sliderWidth={screenWidth}
                  itemWidth={screenWidth}
                />
            </View>
        );
}

const styles = StyleSheet.create({
    image:{
        height:200,
        width:screenWidth
    }
})

export default CarouselComponent