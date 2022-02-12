import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Platform,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";

const CountryCode = (props) => {
  return (
    <View style={styles1.Container}>
      <View style={styles1.Box}>
        <PhoneInput
          onChangeFormattedText={props.onChangeFormattedText}
          onChangeCountry={props.onChangeCountry}
          onChangeText={props.onChangeText}
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
    marginBottom: 40,
  },
  Box: {
    borderBottomWidth: Platform.OS!=='ios'?1:0.5,
    borderWidth: Platform.OS!=='ios'?1:0,
    borderColor: "gray",
    borderRadius: 5,
      },
});