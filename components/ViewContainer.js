import { View, StyleSheet } from 'react-native';

const ContainerView = (props) =>{
    return(
    <View style={[styles.container,{...props.style}]}>
        {props.children}
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
})

export default ContainerView