import React from "react";
import { StyleSheet, Text, View,TouchableOpacity,Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const SchoolLife = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuBtn}>
            <Image source={require('../assets/menu.png')} style={styles.leftIcon}></Image>
        </TouchableOpacity>
        <Text style={styles.title}>학교생활</Text>
        <TouchableOpacity style={styles.menuBtn}>
            <Image source={require('../assets/bell.png')} style={styles.leftIcon}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SchoolLifeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SchoolLifeScreen" component={SchoolLife} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 812,
    backgroundColor: '#fff'
  },
  header: {
    width: 375,
    height: 44,
    marginTop: 44,
    alignItems:'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16, 
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
});

export default SchoolLifeNavigator;
