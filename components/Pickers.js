import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView,  Dimensions, Platform, SafeAreaView, TouchableOpacity, Modal, TouchableWithoutFeedback, BackHandler } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import HeaderText from './HeaderText';
import { TextInputComponent } from './TextInput';
import TouchableOpacityComponent from './TouchableOpacity';
import { AntDesign } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';

const styles2 = StyleSheet.create({
  container: {
    // flex: 1,d
    backgroundColor: 'white',
    padding: 0,
    width: '100%',
  },
  dropdown: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: Platform.OS === 'ios' ? 0 : 1,
    borderBottomWidth: Platform.OS === 'ios' ? 0.5 : 1,
    marginBottom: 40,
    height: 60,
    justifyContent: 'center',
    width: Dimensions.get('screen').width * 0.8,
    // paddingVertical: Platform.OS==='ios'? 0 : 20,
    paddingHorizontal: Platform.OS === 'ios' ? 10 : 20,
    borderRadius: 5
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
  container2: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginBottom: 10,
    paddingBottom: 5
  },
  container: {
    width: Dimensions.get('screen').width * 0.8,
    borderRadius: 5,
    borderWidth: Platform.OS === 'android' ? 1 : 0,
    borderBottomWidth: Platform.OS === 'ios' ? 0.5 : 1,
    // height:60,
    borderColor: 'gray',
    marginBottom: 40,
  },
  android: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    borderRadius: 5
  },
  picker: {
    height: Platform.OS === 'ios' ? 40 : 65,
    justifyContent: 'center'
  }
})




const _renderItem = item => {
  return (
    <View style={styles2.item}>
      <Text style={styles2.textItem}>{item.label}</Text>
    </View>
  );
};

export const Multi = (props) => {
  return (
    <View style={styles.container}>
      <SectionedMultiSelect
        IconRenderer={MaterialIcons}
        uniqueKey="id"
        subKey="children"
        renderSelectText={() => <Text>{props.text}</Text>}
        searchPlaceholderText="Search"
        showDropDowns={props.single ? false : true}
        alwaysShowSelectText={true}
        showChips={true}
        selectChildren={false}
        onSelectedItemsChange={(e) => props.onSelectedItemsChange(e)}
        onSelectedItemObjectsChange={(e) => props.onSelectedItemsObjectsChange(e)}
        selectedItems={props.selectedItems}
        single={props.single ? true : false}
        items={props.items}
      />
    </View>
  );
}

export const MultiPick = (props) => {
  let { items, ...rest } = props;
  // console.log(rest, items[0]);
  // useEffect(()=>{
  //   BackHandler.addEventListener('hardwareBackPress', function () {
  //     setOpen(!open)
  //   })
  // },[])
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <SafeAreaView style={[styles2.dropdown]}>
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <Text>{props?.value ? props?.value?.length + " Selected" : props.label}</Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => setOpen(false)}>
        <Modal
          transparent={false}
          animationType='fade'
          visible={open}
          onDismiss={() => setOpen(false)}
          onRequestClose={() => setOpen(false)}>
          <View style={{ padding: 20 }}>
            <View style={styles.headerContainer}>
              <HeaderText style={{ marginVertical: 0, marginTop: 0 }}>{props.label}</HeaderText>
              <TouchableOpacity onPress={() => setOpen(false)}>
                <AntDesign name="close" size={24} color="red" />
              </TouchableOpacity>
            </View>
            {props.search && <View style={{marginTop:20}}>
              <TextInputComponent
              value={search}
              style={{width:Dimensions.get('screen').width-40}}
              onChangeText={(e)=>setSearch(e)}
              label="Search"
              right="search"/>
            </View>}
            <ScrollView style={{ marginTop: 20 }}>
              {props?.items.filter((item)=>item[props.customLabel].toLowerCase().includes(search.toLowerCase()))
              .map((item, index) => <TouchableOpacity key={index}
                onPress={() => {
                  if (!props.value.includes(item)) {
                    let newValue = [...props.value, item];
                    props.setValue(newValue);
                  }
                  else {
                    let removedValue = props.value.filter((it) => it[props.customId] !== item[props.customId])
                    console.log("REMOVED: ",removedValue)
                    props.setValue(removedValue);
                  }
                  // setOpen(!open);
                }}
                style={{ marginVertical: 5, paddingVertical: 10 }}>
                <Text style={{ color: props.value.includes(item) ? "#31C2AA" : "black", fontSize: 16 }}>{item[props.customLabel]}</Text>
              </TouchableOpacity>)}
            </ScrollView>
            <View style={{alignItems:'center'}}>
              <TouchableOpacityComponent text="Submit"
                onPress={() => setOpen(false) }
                settings={["primary"]} />
            </View>
          </View>
        </Modal>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}



export const Pick = (props) => {
  // let {items,...rest} = props;
  // console.log(rest, items[0]);
  // useEffect(()=>{
  //   BackHandler.addEventListener('hardwareBackPress', function () {
  //     setOpen(!open)
  //   })
  // },[])
  const [open, setOpen] = useState(false);
  return (
    <SafeAreaView style={[styles2.dropdown]}>
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <Text>{props.value ? props.value[props.customLabel] : props.label}</Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => setOpen(false)}>
        <Modal
          transparent={false}
          animationType='fade'
          visible={open}
          onDismiss={() => setOpen(false)}
          onRequestClose={() => setOpen(false)}>
          <View style={{ padding: 20 }}>
            <View style={styles.headerContainer}>
              <HeaderText style={{ marginVertical: 0, marginTop: 0 }}>{props.label}</HeaderText>
              <TouchableOpacity onPress={() => setOpen(false)}>
                <AntDesign name="close" size={24} color="red" />
              </TouchableOpacity>
            </View>
            <ScrollView style={{ marginTop: 20 }}>
              {props?.items.map((item, index) => <TouchableOpacity key={index}
                onPress={() => {
                  props.setValue(item);
                  setOpen(!open);
                }}
                style={{ marginVertical: 5, paddingVertical: 10 }}>
                <Text style={{ color: item[props.customLabel] === props.value[props.customLabel] ? "#31C2AA" : "black", fontSize: 16 }}>{item[props.customLabel]}</Text>
              </TouchableOpacity>)}
            </ScrollView>
          </View>
        </Modal>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}



export const Normal = (props) => {
  // let {items,...rest} = props;
  // console.log(rest, items[0]);
  // useEffect(()=>{
  //   BackHandler.addEventListener('hardwareBackPress', function () {
  //     setOpen(!open)
  //   })
  // },[])
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={[styles2.dropdown]}>
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <Text>{props?.value ? props?.items.filter((items)=>items.id === props.value)[0].name : props.label}</Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => setOpen(false)}>
        <Modal
          transparent={false}
          animationType='fade'
          visible={open}
          onDismiss={() => setOpen(false)}
          onRequestClose={() => setOpen(false)}>
          <View style={{ padding: 20 }}>
            <View style={styles.headerContainer}>
              <HeaderText style={{ marginVertical: 0, marginTop: 0 }}>{props.label}</HeaderText>
              <TouchableOpacity onPress={() => setOpen(false)}>
                <AntDesign name="close" size={24} color="red" />
              </TouchableOpacity>
            </View>
            {props.search && <View style={{marginTop:20}}>
              <TextInputComponent
              value={search}
              style={{width:Dimensions.get('screen').width-40}}
              onChangeText={(e)=>setSearch(e)}
              label="Search"
              right="search"/>
            </View>}
            <ScrollView style={{ marginTop: 20 }}>
              {props?.items.filter((item)=>item['name'].toLowerCase().includes(search.toLowerCase()))
              .map((item, index) =><TouchableOpacity key={index}
                onPress={() => {
                  props.setValue(item.id);
                  setOpen(!open);
                }}
                style={{ marginVertical: 5, paddingVertical: 10 }}>
                <Text style={{ color: item.id === props.value? "#31C2AA" : "black", fontSize: 16 }}>{item['name']}</Text>
              </TouchableOpacity>)}
            </ScrollView>
          </View>
        </Modal>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export const PackageNormal = (props) => {
  // let {items,...rest} = props;
  // console.log(rest, items[0]);
  // useEffect(()=>{
  //   BackHandler.addEventListener('hardwareBackPress', function () {
  //     setOpen(!open)
  //   })
  // },[])
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <SafeAreaView style={styles2.dropdown}>
      <RNPickerSelect
          {...props}
          placeholder={props.placeholder}
        >
          <Text>{props.value || props.placeholder}</Text>
        </RNPickerSelect>
    </SafeAreaView>
  );
}