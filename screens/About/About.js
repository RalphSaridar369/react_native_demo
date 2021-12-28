import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import DocumentPicker from '../../components/DocumentPicker'
import { Entypo } from '@expo/vector-icons';
import AlertComponent from '../../components/Alert';
import ImagePicker from '../../components/ImagePicker';

const About = ({ navigation }) => {
    const [document, setDocument] = useState();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
            />
            <DocumentPicker
                text="Get document without right icon"
                leftIcon={{
                    icon: <Entypo name="text-document" size={24} color="black" />
                }}
                setDocument={(e) => setDocument(e)}
            />
            <TouchableOpacity onPress={() => AlertComponent("State", document ? document : "I didn't receive the document from the child component yet")}>
                <Text>Press me to test if I received the state or not</Text>
            </TouchableOpacity>
            <ImagePicker />
        </View>
    )
}

export default About