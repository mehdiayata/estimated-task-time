import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import calculService from '../Services/calcul.service';
import ChoiceDifficulty from './ChoiceDifficulty';

const TimeForm = (props) => {
    const [estimatedTaskTime, setEstimatedTaskTime] = React.useState('')
    const { setRealTaskTime } = props;
    const [selectedIdDifficulty, setSelectedIdDifficulty] = React.useState(null);

    const calculated = () => {
        if (controlForm() === 1) {
            let realTime = calculService.calculRealTime(estimatedTaskTime, selectedIdDifficulty);
            setRealTaskTime(realTime);
        }
    }

    const controlForm = () => {
        // Control form is valid or not
        let formValid = 1;

        if (selectedIdDifficulty == null) {
            alert('Please select a level of difficulty')
            formValid = 0;
        }

        if (estimatedTaskTime == '') {
            alert('Please send your task time')
            formValid = 0;
        }

        return formValid;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>How long do you estimate your task (in minute) ? </Text>
            <TextInput style={styles.input} onChangeText={setEstimatedTaskTime} value={estimatedTaskTime}
                placeholder="Task time"
                keyboardType="numeric" showSoftInputOnFocus={true} />

            <ChoiceDifficulty selectedIdDifficulty={selectedIdDifficulty} setSelectedIdDifficulty={setSelectedIdDifficulty} />

            <TouchableOpacity style={styles.buttonSubmit} onPress={() => calculated()}>
                <Text style={styles.textButtonSubmit}> Calculed</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    label: {
        fontSize: 16
    },

    input: {
        alignSelf: 'center',
        height: 100,
        width: 100,
        margin: 12,
        padding: 10,
        backgroundColor: 'white',
        textAlign: 'center',
        borderRadius: 5,

        fontSize: 16,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },

    buttonSubmit: {
        backgroundColor: 'blue',
        padding: 10,
        marginTop: 20,
        alignItems: 'center'
    },

    textButtonSubmit: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase'
    }

});

export default TimeForm;