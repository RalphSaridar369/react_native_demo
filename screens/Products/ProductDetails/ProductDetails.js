import React, { useEffect, useState } from 'react';
import { ScrollView, View, Image, Alert } from 'react-native';
import { Text, HeaderText, TouchableOpacity } from '../../../components';
import CartButtons from './components/CartButtons';
import { styles } from './styles';

const ProductDetails = ({ route }) => {
    const [product, setProduct] = useState();
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Product", route.params.product)
        setProduct(route.params.product)
    }, [])

    const addToCart = () => {
        if(count<1)
            Alert.alert("Error","Please add the product first");
        else
        Alert.alert("Add to cart", "Are you sure you want to add to cart?", [
            { text: "No" },
            { text: "Yes" },
        ]);
    }

    const addOrRemove = (type) => {
        setCount(type == "add" ? count + 1 : count != 0 ? count - 1 : 0);
    }
    return (
        <View style={styles.main}>
            <ScrollView>
                <Image source={product?.image} style={styles.product_image} />
                <View style={styles.content_container}>
                    <HeaderText style={styles.product_name}>{product?.name}</HeaderText>
                    <Text>${product?.price}</Text>
                    <View style={styles.items_container}>
                        <CartButtons
                            style={styles.buttons_container}
                            add={() => addOrRemove("add")}
                            remove={() => addOrRemove("remove")}
                            count={count} />
                        <View style={styles.total_container}>
                            <HeaderText style={styles.total_label}>Total</HeaderText>
                            <HeaderText style={styles.total_value}>${count * product?.price}</HeaderText>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity settings={['primary']} text="Add to cart" onPress={addToCart} />
            </View>
        </View>
    )
}

export default ProductDetails