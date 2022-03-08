import React, { useEffect, useContext } from 'react'
import { View, ScrollView, Text } from 'react-native';
import CarouselComponent from './components/Carousel';
import { carouselData, products } from '../../mockData';
import FlatlistComponent from './components/Flatlist';

const Home = () => {
    return (
        <View style={{ flex: 1, backgroundColor:'#fff'}}>
            <ScrollView>
                <CarouselComponent data={carouselData} loop={true} autoplay={true} enableMomentum autoplayInterval={5000}/>
                <View style={{marginTop:20}}>
                    <FlatlistComponent headerText="Top Products" data={products}/>
                    <FlatlistComponent headerText="Best Selling" data={products}/>
                    <FlatlistComponent headerText="Top Deals" data={products}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home