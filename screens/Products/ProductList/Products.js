import React, { useState } from 'react'
import {View, ScrollView} from 'react-native';
import { products } from '../../../mockData';
import Header from './components/Header';
import { styles } from './styles';
import FlatListComponent from './components/FlatList';
const Products = () =>{

    const [search, setSearch] = useState("");

    return(
        <View style={styles.main}>
          <Header search={search} onChangeText={(e)=>setSearch(e)}/>
          <ScrollView>
            <FlatListComponent data={products.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))}/>
          </ScrollView>
          
        </View>
    )
}


export default Products