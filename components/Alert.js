import {Alert} from 'react-native';

const AlertComponent = (title,text,buttons) => Alert.alert(title,text,buttons?buttons:null)

export default AlertComponent