import { FlatList, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { HeaderText, Text } from '../../../../components';

// let screenWidth = Dimensions.get('screen').width;
const FlatListComponent = (props) => {
    return (
        <FlatList
            style={styles.flatlist}
            numColumns={2}
            data={props.data}
            renderItem={({ item, index }) => (
                <TouchableOpacity key={index} style={styles.card}>
                    <Image source ={item.image} style={styles.image} resizeMode="contain"/>
                    <HeaderText style={styles.name}>{item.name}</HeaderText>
                    <Text style={styles.text}>${item.price}</Text>
                </TouchableOpacity>
                )
            }
        />
    )
}

const styles = StyleSheet.create({
    flatlist:{
        paddingVertical:20,
        paddingHorizontal:'auto'
    },  
    card:{
        margin:5,
        borderRadius:10,
        paddingHorizontal:10,
        borderWidth:1,
        borderColor:'lightgray',
        alignSelf:'center',
        alignItems:'center',
    },  
    image:{
        width: 150,
        height: 150,
    },
    name:{
        fontSize:16,
        width:'50%'
    },
    text:{
    }
})

export default FlatListComponent