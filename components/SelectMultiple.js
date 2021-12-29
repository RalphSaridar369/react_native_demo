import { View, Text, StyleSheet, TextInput, LogBox } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import SelectMultiple from 'react-native-select-multiple'
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react'

const SelectMultipleComponent = (props) => {
    const [searchValue, setSearchValue] = useState("");
    useEffect(()=>{
        LogBox.ignoreAllLogs()
    },[])
    return (
        <>
            <Collapse style={styles.container}>
                <CollapseHeader style={styles.header}>
                    <Text>{props.buttonText}</Text>
                </CollapseHeader>
                <CollapseBody style={styles.body}>
                    {props.search && <View style={styles.searchContainer}>
                        <Ionicons name="search-sharp" size={24} color="black" />
                        <TextInput
                            style={styles.searchInput}
                            value={searchValue}
                            onChangeText={(e) => setSearchValue(e)} />
                    </View>}

                    {props.map && <SelectMultiple
                        items={props.map.filter((item)=>item.label.toLowerCase().includes(searchValue.toLowerCase()))}
                        selectedItems={props.selectedItems}
                        onSelectionsChange={(e)=>props.onSelectionChange(e)} />}
                </CollapseBody>
            </Collapse>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 20,
        paddingTop: 10,
        width: 300,
        borderWidth: 1,
        borderColor: 'lightblue',
    },
    header:{
        paddingHorizontal: 20,
        paddingBottom:10,
        borderBottomWidth:0.5,
        borderBottomColor:'lightblue'
    },
    body: {
    },
    searchContainer: {
        paddingVertical:5,
        flexDirection: 'row',
        borderBottomColor: 'lightblue',
        borderBottomWidth: 0.5,
        paddingHorizontal:20,
        alignItems:'center'
    },
    searchInput: {
        flex: 1,
        paddingHorizontal: 10
    }
})

export default SelectMultipleComponent