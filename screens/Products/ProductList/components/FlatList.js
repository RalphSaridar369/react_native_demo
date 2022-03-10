import { FlatList, TouchableOpacity, Image } from 'react-native';
import { HeaderText, Text } from '../../../../components';

const FlatListComponent = (props) => {
    return (
        <FlatList
            numColumns={2}
            data={props.data}
            renderItem={({ item, index }) => (
                <TouchableOpacity key={index}>
                    <Image source ={item.image}/>
                    <HeaderText>{item.name}</HeaderText>
                    <Text>${item.price}</Text>
                </TouchableOpacity>
                )
            }
        />
    )
}

export default FlatListComponent