import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "../components/header";
import HomeSwiper from "../components/home/HomeSwiper";
import MealFlatlist from "../components/home/MealFlatList";
import Schedule from "../components/home/Schedule";

const Stack = createStackNavigator();

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* 헤더 */}
        <Header name={"홈"} />
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

  scroll: {
    marginTop: 23,
  },
});

export default HomeNavigator;
