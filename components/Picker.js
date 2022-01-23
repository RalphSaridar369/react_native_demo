import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {Picker} from '@react-native-picker/picker';
import {Dropdown} from 'react-native-element-dropdown';


const styles2 = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
      width:'100%'
  },
  dropdown: {
      backgroundColor: 'white',
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
      marginTop: 20,
  },
  icon: {
      marginRight: 5,
      width: 18,
      height: 18,
  },
  item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
      flex: 1,
      fontSize: 16,
  },
  shadow: {
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
  },
});


const styles = StyleSheet.create({
  container:{
        width: Dimensions.get('screen').width * 0.8,
  },
  android:{
    borderWidth:1,
    borderColor:'gray',
    marginBottom: 20,
    borderRadius: 5
  },
  picker:{
    height:Platform.OS==='ios'?40:65,
    justifyContent:'center'
  }
})




const _renderItem = item => {
  return (
      <View style={styles2.item}>
          <Text style={styles2.textItem}>{item.label}</Text>
      </View>
  );
};

export const Single = ({items,...props})=> {
    return (
      Platform.OS == "android" ?<View style={[styles.container,Platform.OS==='android'?[styles.picker,styles.android]:null]}>
        <Picker
        {...props}>
          {(items?.length>0 && items !== undefined) && items.map((item,index)=>  <Picker.Item key={index} label={item.label} value={item.label} />)}
        </Picker>
      </View>:
      

      <View style={[styles2.container,props.containerStyle]}>
      <Dropdown
          style={[styles2.dropdown,props.style]}
          containerStyle={styles2.shadow}
          data={props.data}
          search={false}
          labelField="label"
          valueField="value"
          label="Dropdown"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          renderItem={item => _renderItem(item)}
      />
  </View>
    );
  }

  export const Multi = (props)=> {
      
      return (
        <View style={styles.container}>
          <SectionedMultiSelect
            IconRenderer={MaterialIcons}
            uniqueKey="id"
            subKey="children"
            renderSelectText={()=><Text>{props.text}</Text>}
            searchPlaceholderText="Search"
            showDropDowns={true}
            readOnlyHeadings={true}
            showChips={false}
            onSelectedItemsChange={(e)=>props.onSelectedItemsChange(e)}
            selectedItems={props.selectedItems}
            single={false}
            items={props.items}
          />
        </View>
      );
    }

