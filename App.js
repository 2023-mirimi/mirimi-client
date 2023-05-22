import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import MyStack from "./src/navigation/StackNavigator";
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    
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