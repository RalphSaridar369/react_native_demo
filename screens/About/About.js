import React, { useState } from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Alert, ScrollView, DocumentPicker, ImagePicker, Switch, ActivityIndicator, Picker, ViewContainer, CheckBox, SelectMultiple } from '../../components/index'; 

const About = ({ navigation }) => {
    const [document, setDocument] = useState();
    const [image, setImage] = useState();
    const [switchToggle, setSwitchToggle] = useState(false);
    const [selected,setSelected] = useState();
    const [checked,setChecked] = useState(false)
    const [multiple,setMultiple] = useState();

    return (
        <ScrollView style={{ flex: 1 }}>
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
            selectedValue={selected}
            onValueChange={(itemValue, itemIndex) =>
                setSelected(itemValue)
            }
            prompt="Language" 
            map={[
                {label:'Java',value:1},
                {label:'C++',value:2},
                {label:'C#',value:3},
                {label:'C',value:4},
                {label:'F#',value:5},
                {label:'J',value:6},
            ]}/>
            <CheckBox
            value={checked}
            onValueChange={()=>setChecked(!checked)}
            left="Checkbox"
            />
            <SelectMultiple 
            buttonText='Languages'
            map={[
            { label: 'Apples', value: 1 },
            { label: 'Oranges', value: 2 },
            ]}
            search
            selectedItems={multiple}
            onSelectionChange={(e)=>setMultiple(e)}/>
            </ViewContainer>
        </ScrollView>
    )
}

export default About