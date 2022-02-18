import React, { useState, useRef } from 'react';
import { View, Button, Platform, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    
    const dateRef = useRef();
    console.log(dateRef)
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View>
            {
                Platform.OS === 'ios'
                    ? (<>
                        {/* {<View>
                            <Button onPress={showDatepicker} title="Show date picker!" />
                        </View>} */}
                        {/* <TouchableOpacity style={styles.container} onPress={()=>setShow(true)}>
                            <Text>{date.toLocaleDateString() || "Date"}</Text>
                        </TouchableOpacity> */}
                        <View style={styles.iosContainer}>
                        <Text>
                            Date
                        </Text>
                        <DateTimePicker
                            ref={dateRef}
                            testID="dateTimePicker"
                            value={date}
                            mode={'date'}
                            style={{width:300, height:40,marginLeft:Dimensions.get('screen').width*0.3}}
                            is24Hour={true}
                            display="calendar"
                            onChange={onChange}
                            themeVariant="light"
                        />
                        </View>
                    </>
                    ) : 
                    <View>
                        <TouchableOpacity style={styles.container} onPress={()=>setShow(true)}>
                            <Text>{date.toLocaleDateString() || "Date"}</Text>
                        </TouchableOpacity>
                        {show && <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={'date'}
                            is24Hour={true}
                            display="calendar"
                            onChange={onChange}
                        />}
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
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
    touchable: {
        paddingHorizontal: 10,
        // alignSelf:'flex-end',
        width: Dimensions.get('screen').width * 0.8,
        // height: 60,
        backgroundColor: '#fff',
        borderColor: 'lightgray'
    },
    iosContainer: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:Dimensions.get('screen').width*0.8,
        paddingHorizontal:10,
        paddingBottom:5,
        marginBottom:30,
        borderBottomWidth: Platform.OS === 'ios' ? 0.5 : 1,
        borderColor: 'gray',
    },
    android: {
        // height:60,
    }
})

export default DatePicker