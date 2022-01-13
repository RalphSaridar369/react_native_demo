import React, { useState } from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Alert, ScrollView, DocumentPicker, ImagePicker, Switch, ActivityIndicator, Picker, ViewContainer, CheckBox, MultiSelect } from '../../components/index';

const About = ({ navigation }) => {
    const [document, setDocument] = useState();
    const [image, setImage] = useState();
    const [switchToggle, setSwitchToggle] = useState(false);
    const [selected, setSelected] = useState();
    const [checked, setChecked] = useState(false)
    const [multiple, setMultiple] = useState();

    return (
        <ScrollView>
            <ViewContainer>
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
            <Switch 
            onValueChange = {()=>setSwitchToggle(!switchToggle)}
            value={switchToggle}
            left="Switch"/>
            <Switch 
            onValueChange = {()=>setSwitchToggle(!switchToggle)}
            value={switchToggle}
            right="Switch"/>
                <Picker
                    text="Fruits"
                    items={[
                        {
                            name: 'Fruits', id: 1, children: [
                                { name: 'Apples', id: 2 },
                                { name: 'Oranges', id: 3 },
                            ]
                        }
                    ]}
                    onSelectedItemsChange={(e) => {
                        setSelected(e)
                    }}
                    selectedItems={selected}
                />
                <CheckBox
                    value={checked}
                    onValueChange={() => setChecked(!checked)}
                    left="Checkbox"
                />
                <MultiSelect
                    text="Brands"
                    items={[
                        {
                            name: 'Apple', id: 1, children: [
                                { name: 'Laptop', id: 2 },
                                { name: 'Iphone', id: 3 },
                            ]
                        },
                        {
                            name: 'Samsung', id: 4, children: [
                                { name: 'Laptop', id: 5 },
                                { name: 'Iphone', id: 6 },
                            ]
                        },
                    
                    ]}
                    onSelectedItemsChange={(e) => {
                        setSelected(e)
                    }}
                    selectedItems={selected}
                />
            </ViewContainer>
        </ScrollView>
    )
}

export default About