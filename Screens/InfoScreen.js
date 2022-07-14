import React from 'react';
import {View, StyleSheet } from 'react-native';
import DisplayInfo from '../Components/DisplayInfo';

const InfoScreen = () => {
    return (
        <View style={styles.container}>
            <DisplayInfo />
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
      flex: 1,
      padding: 20
    }
  })

export default InfoScreen;