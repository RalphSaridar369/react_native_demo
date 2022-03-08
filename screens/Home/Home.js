import React, { useEffect, useContext } from 'react'
import { View, ScrollView, Text } from 'react-native';
import CarouselComponent from './components/Carousel';
import { carouselData, flatList1, flatList2, flatList3, products } from '../../mockData';
import FlatlistComponent from './components/Flatlist';

const Home = ({navigation}) => {
    return (
        <View style={{ flex: 1, backgroundColor:'#fff', paddingBottom:20}}>
            <ScrollView>
                <CarouselComponent data={carouselData} loop={true} autoplay={true} enableMomentum autoplayInterval={5000}/>
                <View style={{marginTop:20}}>
                    <FlatlistComponent headerText="Top Products" data={flatList1} navigation={navigation}/>
                    <FlatlistComponent headerText="Best Selling" data={flatList2} navigation={navigation}/>
                    <FlatlistComponent headerText="Top Deals" data={flatList3} navigation={navigation}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home