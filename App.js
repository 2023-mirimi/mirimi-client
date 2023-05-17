import React from "react";
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Community from './screen/Community';
import Login from "./screen/Login";

const App = () => {
  return (
      <View style={styles.container}>
        {/* <Community /> */}
        <Login />
      </View>
    
  )
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});

export default App;