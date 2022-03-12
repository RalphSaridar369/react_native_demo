import React, { useState, useRef, useCallback } from 'react'
import { View} from 'react-native';
import { brands, categories, products } from '../../../mockData';
import Header from './components/Header';
import { styles } from './styles';
import FlatListComponent from './components/FlatList';
import FilterActionSheet from './components/FilterActionSheet';
import ActionSheet from 'react-native-actions-sheet';
import { HeaderText } from '../../../components';
import { Normal } from '../../../components/Pickers';
import { useFocusEffect } from '@react-navigation/native'

const Products = ({navigation}) => {
  const filterRef = useRef();
  const sortRef = useRef();

  const [categoriesAll,setCategoriesAll] = useState([]);
  const [brandsAll,setBrandsAll] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState();
  const [brand, setBrand] = useState();
  const [filteredProducts, setFilteredProducts] = useState();


  useFocusEffect(
    useCallback(() => {
      setCategoriesAll(categories);
      setBrandsAll(brands);
      setFilteredProducts(products)
    }, []))

  const show = (type) => {
    console.log("tesrt")
    if (type == "filter")
      filterRef.current?.show();
    else
      sortRef.current?.show();
  }

  const filterData = (type,value) => {
    console.log("Filtered Products ",filteredProducts, value)
    if (type == "Category") {
      setFilteredProducts(filteredProducts.filter((item)=>item.cat_id === value));
      setBrandsAll(brands)
    }
    else {
      setFilteredProducts(filteredProducts.filter((item)=>item.subcat_id === value));
    }
  }

  return (
    <View style={styles.main}>
      <Header search={search} onChangeText={(e) => setSearch(e)} show={show} />
      <FlatListComponent data={filteredProducts?.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))} navigation={navigation} />

      <ActionSheet ref={filterRef}>
        <View style={styles.filter_by}>
          <HeaderText style={styles.filter_by_header}>Filter By</HeaderText>
        </View>
        <View style={styles.picker_container}>
          <Normal
            items={categoriesAll}
            label="Category"
            setValue={(e) => {
              filterData("Category",e)
              setCategory(e)
            }}
            value={category}
          />
          <Normal
            items={brandsAll.filter((item) => item.cat_id == category)}
            label="Brand"
            setValue={(e) => {
              filterData("Brand",e)
              setBrand(e)
            }}
            value={brand}
          />
        </View>
      </ActionSheet>
      {/* <FilterActionSheet ref={filterRef}/> */}


    </View>
  )
}


export default Products