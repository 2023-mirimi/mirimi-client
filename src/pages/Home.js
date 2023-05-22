import React from "react";
import { ScrollView, StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { createStackNavigator } from "@react-navigation/stack";

import HomeSwiper from "../components/HomeSwiper";
import MealFlatlist from "../components/MealFlatlist";
import Schedule from "../components/Schedule";

const Stack = createStackNavigator();

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuBtn}>
          <Image source={require('../assets/menu.png')} style={styles.leftIcon}></Image>
        </TouchableOpacity>
        <Text style={styles.title}>홈</Text>
        <TouchableOpacity style={styles.menuBtn}>
          <Image source={require('../assets/bell.png')} style={styles.leftIcon}></Image>
        </TouchableOpacity>
      </View>
        <HomeSwiper />
        <MealFlatlist />
        <Schedule />
      </View>
    </ScrollView>
  );
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 1)",
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
  scroll: {
    marginTop: 23,
  },
});

export default HomeNavigator;
