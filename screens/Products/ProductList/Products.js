import React, { useEffect } from 'react'
import {View, ScrollView} from 'react-native';
import { products } from '../../../mockData';
import Header from './components/Header';
import { styles } from './styles';
import FlatListComponent from './components/FlatList';
const Products = () =>{
    return(
        <View style={styles.main}>
          <Header />
          <ScrollView>
            <FlatListComponent data={products}/>
          </ScrollView>
        </View>
    )
}


export default Products