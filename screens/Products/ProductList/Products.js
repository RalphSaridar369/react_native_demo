import React, { useState, useRef } from 'react'
import {View, ScrollView, Text} from 'react-native';
import { brands, categories, products } from '../../../mockData';
import Header from './components/Header';
import { styles } from './styles';
import FlatListComponent from './components/FlatList';
import FilterActionSheet from './components/FilterActionSheet';
import ActionSheet from 'react-native-actions-sheet';
import { HeaderText } from '../../../components';
import { Normal } from '../../../components/Pickers';

const Products = () =>{
    const filterRef = useRef();
    const sortRef = useRef();

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState();
    const [brand, setBrand] = useState();

    const show =(type)=>{
      console.log("tesrt")
      if(type=="filter")
        filterRef.current?.show();
      else
        sortRef.current?.show();
      }

    return(
        <View style={styles.main}>
          <Header search={search} onChangeText={(e)=>setSearch(e)} show={show}/>
          <ScrollView>
            <FlatListComponent data={products.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))}/>
          </ScrollView>
          
        <ActionSheet ref={filterRef}>
          <View style={styles.filter_by}>
            <HeaderText style={styles.filter_by_header}>Filter By</HeaderText>
          </View>
          <View style={styles.picker_container}>
            <Normal 
            items={categories}
            label="Category"
            setValue={(e)=>setCategory(e)}
            value={category}
            />
            <Normal 
            items={brands.filter((item)=>item.cat_id==category)}
            label="Brand"
            setValue={(e)=>setBrand(e)}
            value={brand}
            />
          </View>
        </ActionSheet>
          {/* <FilterActionSheet ref={filterRef}/> */}
          

        </View>
    )
}


export default Products