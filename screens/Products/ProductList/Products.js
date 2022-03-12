import React, { useState, useRef, useCallback, useEffect } from 'react'
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

const Products = ({ navigation }) => {
  const filterRef = useRef();
  const sortRef = useRef();

  const [categoriesAll, setCategoriesAll] = useState([]);
  const [brandsAll, setBrandsAll] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState();
  const [brand, setBrand] = useState();
  // const [data, setData] = useState([]);
  const [filteredProducts,setFilteredProducts] = useState([]);


  useFocusEffect(
    useCallback(() => {
      setCategoriesAll(categories);
      setBrandsAll(brands);
      // setData(products)
      setFilteredProducts(products)
    }, []))

  useEffect(() => {

  }, [filteredProducts])
  const show = (type) => {
    console.log("tesrt")
    if (type == "filter")
      filterRef.current?.show();
    else
      sortRef.current?.show();
  }

  const sort = (type) => {
    console.log(filteredProducts);
    switch (type) {
      case 'A-Z':
        setFilteredProducts(filteredProducts.sort((a, b) => a.name - b.name))
        break;
      case 'Z-A':
        setFilteredProducts(filteredProducts.sort((a, b) => b.name - a.name))
        break;
      case 'high':
        setFilteredProducts(filteredProducts.sort((a, b) => b.price - a.price))
        break;
      case 'low':
        setFilteredProducts(filteredProducts.sort((a, b) => a.price - b.price))
        break;
    }
  }

  const filterData = (type, value) => {
    console.log("Filtered Products ", filteredProducts, value)
    if (type == "Category") {
      setFilteredProducts(filteredProducts.filter((item) => item.cat_id === value));
      setBrandsAll(brands)
    }
    else {
      setFilteredProducts(filteredProducts.filter((item) => item.subcat_id === value));
    }
  }

  return (
    <View style={styles.main}>
      <Header search={search} onChangeText={(e) => setSearch(e)} show={show} />

      <FlatList
            style={styles.flatlist}
            numColumns={2}
            data={filteredProducts?.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))}
            renderItem={({ item, index }) => (
                <TouchableOpacity key={index} style={styles.card} onPress={()=>props.navigation.navigate("productDetails",{product:item})}>
                    <Image source ={item.image} style={styles.image} resizeMode="contain"/>
                    <HeaderText style={styles.name}>{item.name}</HeaderText>
                    <Text style={styles.text}>${item.price}</Text>
                </TouchableOpacity>
                )
            }
        />
      <ActionSheet ref={filterRef}>
        <View style={styles.filter_by}>
          <HeaderText style={styles.filter_by_header}>Filter By</HeaderText>
        </View>
        <View style={styles.picker_container}>
          <Normal
            items={categoriesAll}
            label="Category"
            setValue={(e) => {
              console.log("Selected: ",e)
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


export default Products