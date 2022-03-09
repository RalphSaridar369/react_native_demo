import React, { useEffect, useState } from 'react';
import { ScrollView, View, Image } from 'react-native';
import { Text, HeaderText } from '../../../components';
import CartButtons from './components/CartButtons';
import { styles } from './styles';

const ProductDetails = ({ route }) => {
    const [product, setProduct] = useState();
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        console.log("Product", route.params.product)
        setProduct(route.params.product)
    }, [])

    const addOrRemove = (type) => {
        setCount(type == "add" ? count + 1 : count !=0 ? count - 1 : 0);
    }
    return (
        <ScrollView style={styles.main}>
            <Image source={product?.image} style={styles.product_image} />
            <View style={styles.content_container}>
                <HeaderText style={styles.product_name}>{product?.name}</HeaderText>
                <Text>${product?.price}</Text>
                <View style={styles.items_container}>
                    <CartButtons
                    style={styles.buttons_container}
                    add={()=>addOrRemove("add")}
                    remove={()=>addOrRemove("remove")}
                    count={count} />
                    <View style={styles.total_container}>
                        <HeaderText style={styles.total_label}>Total</HeaderText>
                        <HeaderText style={styles.total_value}>${count * product?.price}</HeaderText>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default ProductDetails