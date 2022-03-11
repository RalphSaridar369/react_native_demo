import React, {useContext, useEffect, useState} from 'react'
import {View, Alert} from 'react-native';
import { MainContext } from '../../MainContext';
import ScrollViewComponent from './components/ScrollView';
import { styles } from './styles';
import { HeaderText, Text } from '../../components';

const Cart =()=>{
    const [state,dispatch] = useContext(MainContext);
    const [data,setData] = useState([]);

    useEffect(()=>{
        console.log(state.cart);
        setData(state.cart)
    },[])

    const removeProduct =(id)=>{
        console.log(id)
        dispatch('REMOVE_FROM_CART',{id:id})
        Alert.alert("Product","Product was removed from the cart")
    }

    const calculateTotal = () =>{
        let total = 0;
        state.cart.map((item)=>{
            let amount = 0;
            amount = item.product.price * item.qty;
            total += amount;
        })
        return total
    }

    return(
        <View style={{flex:1}}>
            {data &&<ScrollViewComponent data={data} removeProduct={removeProduct}/>}
            <View style={styles.total}>
                <HeaderText style={styles.total_label}>Total</HeaderText>
                <Text style={styles.total_value}>${calculateTotal()}</Text>
            </View>
        </View>
    )
}

export default Cart