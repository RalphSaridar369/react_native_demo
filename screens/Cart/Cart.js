import {View} from 'react-native';
import { MainContext } from '../../MainContext';
import ScrollViewComponent from './components/ScrollView';

const Cart =()=>{
    const [state,dispatch] = useContext(MainContext);
    return(
        <View style={{flex:1}}>
            {state.cart &&<ScrollViewComponent data={state.cart}/>}
        </View>
    )
}

export default Cart