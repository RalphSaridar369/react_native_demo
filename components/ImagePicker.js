import {View, TouchableOpacity, Text, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker'

const ImagePickerComponent = (props) =>{    

   const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });

    if (!result.cancelled) {
      props.setImage(result.uri)
    }
  };

    return(
        <TouchableOpacity onPress={()=>pickImage()} style={{marginVertical:20}}>
            {props.icon?
            props.icon:
            <Image 
            source={require('../assets/default-image.jpg')}
            resizeMode='cover'
            style={{width:300,height:300}}/>}
        </TouchableOpacity>
    )
}

export default ImagePickerComponent;