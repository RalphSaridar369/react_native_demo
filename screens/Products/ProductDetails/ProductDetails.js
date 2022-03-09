import React, { useEffect, useState } from 'react';
import { ScrollView, View, Image } from 'react-native';
import { Text, HeaderText } from '../../../components';
import CartButtons from './components/CartButtons';
import { styles } from './styles';

const ProductDetails = ({ route }) => {
    const [product, setProduct] = useState();
    const [total,setTotal] = useState(0);
    useEffect(() => {
        console.log("Product",route.params.product)
        setProduct(route.params.product)
    }, [])
    return (
        <ScrollView style={styles.main}>
            <Image source={product?.image} style={styles.product_image}/>
            <View style={styles.content_container}>
                <HeaderText style={styles.product_name}>{product?.name}</HeaderText>
                <Text>${product?.price}</Text>
                <CartButtons />
            </View>
        </ScrollView>
    )
}

export default ProductDetails