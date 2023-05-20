import React from "react";
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Community from './src/screen/Community';
import Login from "./src/screen/Login";
import Join from "./src/screen/Join";
import NewPost from "./src/screen/NewPost";
import DetailedCommunity from "./src/screen/DetailedCommunity"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Join" component={Join} options={{headerShown: false}}/>
            <Stack.Screen name="Community" component={Community} options={{headerShown: false}}/>
            <Stack.Screen name="DetailedCommunity" component={DetailedCommunity} options={{headerShown: true}}/>
            <Stack.Screen name="NewPost" component={NewPost} options={{headerShown: false}}/>
        </Stack.Navigator>
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