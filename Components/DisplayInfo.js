import React from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import { } from 'react-native-web';

const DisplayInfo = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.questionIcon}> ? </Text>

            <Text style={styles.text}>
                The formula used by the application is based on the
                PERT formula (O + 4M + P) / 6 used for PERT charts with some subtleties.
            </Text>


            <Text style={styles.annotation}> O: Optimistic time</Text>
            <Text style={styles.annotation}> M: Medium time </Text>
            <Text style={styles.annotation}> P: Pessimistic time</Text>

            <Text style={styles.title}>Easy Task</Text>
            <Text style={styles.text}>
                An easy task is a task for which you already know
                procedure for its realization.
                The result will be close
                of your estimate with some subtlety.
            </Text>

            <View style={styles.containerCalcul}>
                <Text style={styles.calcul}>O = T / 1.5 </Text>
                <Text style={styles.calcul}>M = T</Text>
                <Text style={styles.calcul}>P = T * 2</Text>
            </View>


            <Text style={styles.title}>Medium Task</Text>
            <Text style={styles.text}>A medium task is a task with elements already
                known and unknown elements. The result will be a bit off from your stated time
            </Text>

            <View style={styles.containerCalcul}>
                <Text style={styles.calcul}>O = T </Text>
                <Text style={styles.calcul}>M = T * 1.5</Text>
                <Text style={styles.calcul}>P = T * 2.5</Text>
            </View>



            <Text style={styles.title}>Hard Task</Text>
            <Text style={styles.text}>
                A hard task is a task with new or difficult to grasp characteristics. The result will be much higher than the indicated time.
            </Text>

            <View style={styles.containerCalcul}>
                <Text style={styles.calcul}>O = T </Text>
                <Text style={styles.calcul}>M = T * 2</Text>
                <Text style={styles.calcul}>P = T * 4</Text>
            </View>

            <Text style={styles.title}>Information</Text>
            <Text style={styles.text}>Our estimates are wide, it is always better to estimate a long time more than a short one ;)</Text>

            <Text style={styles.title}>Evolution</Text>
            <Text style={styles.text}>
                In the future we will allow you to edit the multipliers, for a better estimate.

                We will also allow you to enter your optimistic, average, pessimistic task duration yourself. For more realistic calculations.

                Finally we will allow you to calculate by hour or day.
            </Text>

        </ScrollView>
    );
};



const styles = StyleSheet.create({
    container: {

    },
    questionIcon: {
        fontSize: 32,
        color: 'blue',
        marginBottom: 20,
        alignSelf: 'center',
        borderWidth: 1
    },
    title: {
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        fontSize: 18,
    },
    text: {
        fontSize: 14,
        marginBottom: 5,

    },
    annotation: {
        fontSize: 10,
        fontStyle: 'italic'

    },
    containerCalcul: {
        alignContent: 'center',
        backgroundColor: 'white',
        color: 'black',
        marginTop: 5,
        borderRadius: 20,
        padding: 5
    },
    calcul: {
        marginLeft: 10

    }
});

export default DisplayInfo;