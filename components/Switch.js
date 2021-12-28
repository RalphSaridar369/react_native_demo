import { Switch, View, StyleSheet, Text } from 'react-native';

const SwitchComponent = (props) =>{

  return (
    <View style={[styles.container,{flexDirection:props.left?"row":"row-reverse"}]}>
      <Text>{props.left || props.right}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={props.value ? "#f5dd4b" : "#f4f3f4"}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={()=>props.onValueChange()}
        value={props.value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
    }
  });

  export default SwitchComponent