import React, { useState } from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Alert, ScrollView, DocumentPicker, ImagePicker } from '../../components/index'; 

const About = ({ navigation }) => {
    const [document, setDocument] = useState();
    const [image, setImage] = useState();

    return (
        <ScrollView style={{ flex: 1 }}>
            <Text onPress={() => navigation.navigate("aboutDetailed")}>About Page</Text>
            <DocumentPicker
                text="Get document"
                leftIcon={{
                    icon: <Entypo name="text-document" size={24} color="black" />
                }}
                rightIcon={{
                    icon: <Entypo name="aircraft" size={24} color="black" />
                }}
                // onPress={()=>}
                setDocument={(e) => setDocument(e)}
                types={["pdf","docx"]}
            />
            <DocumentPicker
                text="Get document without right icon"
                leftIcon={{
                    icon: <Entypo name="text-document" size={24} color="black" />
                }}
                setDocument={(e) => setDocument(e)}
                types={["pdf","docx"]}
            />
            <TouchableOpacity onPress={() => Alert("State", document ? document : "I didn't receive the document from the child component yet")}>
                <Text>Press me to test if I received the state or not</Text>
            </TouchableOpacity>
            <ImagePicker 
            setImage={(e)=>setImage(e)}
            icon={<Entypo name="camera" size={24} color="black" />}
            />
            <ImagePicker 
            setImage={(e)=>setImage(e)}
            />
            {image &&<Image 
            source={{ uri:image}}
            resizeMode="cover"
            style={{width:300,height:300}} />}
        </ScrollView>
    )
}

export default About