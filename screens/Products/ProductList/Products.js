import React, { memo, useState, useRef, useCallback, useEffect } from 'react'
import { View, TouchableOpacity, FlatList, Image } from 'react-native';
import { brands, categories, products } from '../../../mockData';
import Header from './components/Header';
import { styles } from './styles';
import FlatListComponent from './components/FlatList';
import ActionSheet from 'react-native-actions-sheet';
import { HeaderText, Text } from '../../../components';
import { Normal } from '../../../components/Pickers';
import { useFocusEffect } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';

const Products = (props) => {
  const filterRef = useRef();
  const sortRef = useRef();


  const [categoriesAll, setCategoriesAll] = useState([]);
  const [brandsAll, setBrandsAll] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState();
  const [brand, setBrand] = useState();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useFocusEffect(
    useCallback(() => {
      setCategoriesAll(categories);
      setBrandsAll(brands);
      setAllProducts(products)
      setFilteredProducts(products)
    }, []))

  useEffect(() => {

  }, [filteredProducts])

  const show = (type) => {
    if (type == "filter")
      filterRef.current?.show();
    else
      sortRef.current?.show();
  }

  const sort = (type) => {
    switch (type) {
      case 'A-Z':
        setFilteredProducts([...filteredProducts].sort((a, b) => a.name < b.name ? 1 : -1))
        console.log([...filteredProducts].sort((a, b) => a.name < b.name ? 1 : -1))
      case 'Z-A':
        setFilteredProducts([...filteredProducts].sort((a, b) => b.name < a.name ? 1 : -1))
        console.log([...filteredProducts].sort((a, b) => b.name < a.name ? 1 : -1))
      case 'high':
        setFilteredProducts([...filteredProducts].sort((a, b) => b.price < a.price ? 1 : -1))
      case 'low':
        setFilteredProducts([...filteredProducts].sort((a, b) => a.price < b.price ? 1 : -1))
    }
    setBrand(brand)
  }

  const filterData = (type, value) => {
    if (type == "Category") {
      setFilteredProducts(allProducts.filter((item) => item.cat_id === value));
      setBrandsAll(brands)
    }
    else {
      setFilteredProducts(allProducts.filter((item) => item.subcat_id === value));
    }
  }

  const resetFilter = () => {
    setFilteredProducts(products);
    setCategory(null);
    setBrand(null);
  }

  const _renderItem =({item, index})=>{
    return  <TouchableOpacity key={index} style={styles.card} onPress={() => props.navigation.navigate("productDetails", { product: item })}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <HeaderText style={styles.name}>{item.name}</HeaderText>
      <Text style={styles.text}>${item.price}</Text>
    </TouchableOpacity>
  }

  return (
    <View style={styles.main}>
      <Header search={search} onChangeText={(e) => setSearch(e)} show={show} />

      <FlatList
        style={styles.flatlist}
        numColumns={2}
        data={filteredProducts?.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))}
        renderItem={_renderItem}
      />
      <ActionSheet ref={filterRef}>
        <View style={styles.filter_by}>
          <HeaderText style={styles.filter_by_header}>Filter By</HeaderText>
          <TouchableOpacity onPress={resetFilter}>
            <HeaderText style={[styles.filter_by_header, styles.filter_by_value]}>Reset</HeaderText>
          </TouchableOpacity>
        </View>
        <View style={styles.picker_container}>
          <Normal
            items={categoriesAll}
            label="Category"
            setValue={(e) => {
              filterData("Category", e)
              setCategory(e)
            }}
            value={category}
          />
          <Normal
            items={brandsAll.filter((item) => item.cat_id == category)}
            label="Brand"
            setValue={(e) => {
              filterData("Brand", e)
              setBrand(e)
            }}
            value={brand}
          />
        </View>
      </ActionSheet>
      <ActionSheet ref={sortRef}>
        <View style={styles.filter_by}>
          <HeaderText style={styles.filter_by_header}>Sort By</HeaderText>
        </View>
        <View style={styles.sort_container}>
          <TouchableOpacity style={styles.icon} onPress={() => sort('low')}>
            <Text style={styles.icon_text}>$</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => sort('high')}>
            <Text style={styles.icon_text}>$$</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => sort('Z-A')}>
            <AntDesign name="caretup" size={24} color="#FF6863" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={() => sort('A-Z')}>
            <AntDesign name="caretdown" size={24} color="#FF6863" />
          </TouchableOpacity>
        </View>
      </ActionSheet>
      {/* <FilterActionSheet ref={filterRef}/> */}


    </View>
  )
}


export default memo(Products)