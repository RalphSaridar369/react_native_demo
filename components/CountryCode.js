import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "react-native-element-dropdown/src/TextInput/styles";
import PhoneInput from "react-native-phone-number-input";

const CountryCode = (props) => {
  return (
    <View style={styles1.Container}>
      <View style={styles1.Box}>
        <PhoneInput
          onChangeFormattedText={props.onChangeFormattedText}
          defaultValue={props.defaultValue}
          containerStyle={{
            borderRadius: 5,
            paddingRight: 3,
            borderColor: "gray",
          }}
          textContainerStyle={{ backgroundColor: "#fff" }}
          //   defaultValue={phoneNumber}
          defaultCode="LB"
        />
      </View>
      <></>
    </View>
  );
};

export default CountryCode;

const styles1 = StyleSheet.create({
    Container: {
      marginBottom: 30,
    },
    Box: {
      borderWidth: 1.1,
      borderColor: "grey",
      borderRadius: 5,
      // ma,
    },
  });