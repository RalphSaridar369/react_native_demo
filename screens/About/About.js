import React, { useState } from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Alert, ScrollView, DocumentPicker, ImagePicker, Switch, ActivityIndicator, ViewContainer, CheckBox, MultiSelect } from '../../components/index';

const About = ({ navigation }) => {
    const [document, setDocument] = useState();
    const [image, setImage] = useState();
    const [switchToggle, setSwitchToggle] = useState(false);
    const [selected, setSelected] = useState();
    const [checked, setChecked] = useState(false)
    const [multiple, setMultiple] = useState();

    const [apiData, setApiData] = useState({
        shipmentServices: [
            {
                name: 'Shipment Services', id: 1, 
                children: [
                    { name: 'Normal', id: 2 },
                    { name: 'Premium', id: 3 },
                ]
            }
        ],
        countries: [
            {name: 'Country', id: 1,
                children:[
                    { name: 'LB', id: 2 },
                    { name: 'UK', id: 3 },
                    { name: 'USA', id: 4 },
                ] 
            }
        ]
    })
    const [userCred, setUserCred] = useState({
        name: '',
        email: '',
        country: [],
        phone: '',
        country_reg: [],
        password: '',
        confirm: '',
        city: '',
        street: '',
        postal: '',
        company: '',
        password: '',
        confirm_pass: '',
        services: [],
        document: {}
    });
    const [selectedData, setSelectedData] = useState({
        country:[],
        country_reg:[],
        services: [],
    })
    const settingCreds = (e, t) => {
        setUserCred({ ...userCred, services: e })
    };

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
                <MultiSelect
                    // key={index}
                    text="Services"
                    items={apiData.shipmentServices}
                    single={true}
                    onSelectedItemsChange={(e)=>{
                        setSelectedData({...selectedData,services:e})
                    }}
                    onSelectedItemsObjectsChange={(e) => {
                        settingCreds(e)
                        console.log(e);
                    }}
                    selectedItems={selectedData.services}
                />
                <CheckBox
                    value={checked}
                    onValueChange={() => setChecked(!checked)}
                    left="Checkbox"
                />
            </ViewContainer>
        </ScrollView>
    )
}

export default About