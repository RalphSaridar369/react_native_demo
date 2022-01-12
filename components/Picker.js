import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

export const Single = (props)=> {
    
    return (
      <View>
        <SectionedMultiSelect
          IconRenderer={MaterialIcons}
          uniqueKey="id"
          subKey="children"
          renderSelectText={()=><Text>{props.text}</Text>}
          searchPlaceholderText="Search"
          showDropDowns={false}
          readOnlyHeadings={true}
          showChips={false}
          onSelectedItemsChange={(e)=>props.onSelectedItemsChange(e)}
          selectedItems={props.selectedItems}
          single={true}
          items={props.items}
        />
      </View>
    );
  }

  export const Multi = (props)=> {
      
      return (
        <View>
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


