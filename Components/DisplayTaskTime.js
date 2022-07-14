import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const DisplayTaskTime = (props) => {
    const { realTaskTime } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Real Task Time :</Text>
            <View style={styles.containerResult}>
                <Text style={styles.result}>{realTaskTime}</Text>
                <Text style={styles.textMinutes}> minutes</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    label: {
        fontSize: 16
    },
    containerResult: {
        marginTop: 20,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3, 
    },
    result: {
        fontSize: 36,
        alignSelf: 'center',
    },
    textMinutes: {
        fontSize: 18,
        alignSelf: 'center',
    }
})

export default DisplayTaskTime;