import React from 'react';
import { View, StyleSheet } from 'react-native';
import DisplayTaskTime from '../Components/DisplayTaskTime';
import TimeForm from '../Components/TimeForm';

const MainScreen = () => {
  const [realTaskTime, setRealTaskTime] = React.useState("");

  const displayRealTaskTime = () =>{
    if(realTaskTime !== "") {
      return <DisplayTaskTime realTaskTime={realTaskTime} setRealTaskTime={setRealTaskTime} />
    }
  }

  return (
    <View style={styles.container}>
      <TimeForm setRealTaskTime={setRealTaskTime} />
      {displayRealTaskTime()}
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
    padding: 20
  }
})
export default MainScreen;