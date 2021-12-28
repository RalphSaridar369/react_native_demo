import { ActivityIndicator, StyleSheet, View } from "react-native";

const ActivityIndicatorComponent = (props) =>{
    return(
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#00ff00"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
})

export default ActivityIndicatorComponent