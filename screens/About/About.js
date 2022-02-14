import React, { useState } from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Alert, ScrollView, DocumentPicker, ImagePicker, Switch, ActivityIndicator, ViewContainer, CheckBox, MultiSelect, MultiPicker, NormalPicker } from '../../components/index';

const About = ({ navigation }) => {
    const [document, setDocument] = useState();
    const [image, setImage] = useState();
    const [switchToggle, setSwitchToggle] = useState(false);
    const [selected, setSelected] = useState();
    const [checked, setChecked] = useState(false)
    const [multiple, setMultiple] = useState();

    const [apiData, setApiData] = useState({
        shipmentServices: [
            { name: 'Normal', id: 2 },
            { name: 'Premium', id: 3 },
        ],
        countries: [
            { name: 'LB', id: 2 },
            { name: 'UK', id: 3 },
        ],
    })
    const [userCred, setUserCred] = useState({
        name: '',
        email: '',
        country_id: null,
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
        ser: {},
        document: {}
    });
    const [selectedData, setSelectedData] = useState({
        country: [],
        country_reg: [],
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
                    text="Documents"
                    value={userCred.document}
                    setDocument={async (e) => {
                        let result = await documentBlobConverter(e)
                        setUserCred({
                            ...userCred, documents: [{
                                doc_title: result.name,
                                doc_url: result.file,
                                doc_extension: result.extension
                            }]
                        })
                    }}
                    setError={() => {
                        setUserCred({ ...userCred, documents: [] })
                    }}
                    types={["pdf"]}
                />
                <TouchableOpacity onPress={() => Alert("State", document ? document : "I didn't receive the document from the child component yet")}>
                    <Text>Press me to test if I received the state or not</Text>
                </TouchableOpacity>
                <ImagePicker
                    setImage={(e) => setImage(e)}
                    icon={<Entypo name="camera" size={24} color="black" />}
                />
                <ImagePicker
                    setImage={(e) => setImage(e)}
                />
                {image && <Image
                    source={{ uri: image }}
                    resizeMode="cover"
                    style={{ width: 300, height: 300 }} />}
                <Switch
                    onValueChange={() => setSwitchToggle(!switchToggle)}
                    value={switchToggle}
                    left="Switch" />
                <Switch
                    onValueChange={() => setSwitchToggle(!switchToggle)}
                    value={switchToggle}
                    right="Switch" />
                <MultiPicker
                    // key={index}
                    label="Services"
                    items={apiData.shipmentServices}
                    value={userCred.services}
                    setValue={(e) => {
                        // console.log("New Value: ", e)
                        settingCreds(e)
                    }}
                    customLabel="name"
                    customId="id"
                />
                <NormalPicker
                    // key={index}
                    label="Countries"
                    value={userCred.country_id}
                    items={apiData.countries}
                    setValue={(e) => {
                        console.log("Chosen country: ", e)
                        setUserCred({...userCred,country_id:parseInt(e)})
                    }}
                    search
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