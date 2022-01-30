import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

const styles2 = StyleSheet.create({
  container: {
      // flex: 1,d
      backgroundColor: 'white',
      padding: 0,
      width:'100%',
  },
  dropdown: {
      backgroundColor: 'white',
      borderColor: 'gray',
      borderWidth: Platform.OS === 'ios'? 0 : 1,
      borderBottomWidth:Platform.OS==='ios'?0.5:1,
      marginBottom: 40,
      height:60,
      // paddingVertical: Platform.OS==='ios'? 0 : 20,
      paddingHorizontal: Platform.OS==='ios'? 10 : 20,
      borderRadius:5
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
    borderRadius:5,
    borderWidth:Platform.OS==='android' ? 1 : 0,
    borderBottomWidth:Platform.OS==='ios'?0.5:1,
    // height:60,
    borderColor:'gray',
    marginBottom:40,
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

  export const Multi = (props)=> {
      return (
        <View style={styles.container}>
          <SectionedMultiSelect
            IconRenderer={MaterialIcons}
            uniqueKey="id"
            subKey="children"
            renderSelectText={()=><Text>{props.text}</Text>}
            searchPlaceholderText="Search"
            showDropDowns={props.single?false:true}
            alwaysShowSelectText={true}
            showChips={true}
            selectChildren={false}
            onSelectedItemsChange={(e)=>props.onSelectedItemsChange(e)}
            onSelectedItemObjectsChange={(e)=>props.onSelectedItemsObjectsChange(e)}
            selectedItems={props.selectedItems}
            single={props.single?true:false}
            items={props.items}
          />
        </View>
      );
    }

