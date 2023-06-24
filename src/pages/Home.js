import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Header from "../components/header";
import HomeSwiper from "../components/home/HomeSwiper";
import Schedule from "../components/home/Schedule";
import MealFlatList from "../components/home/MealFlatlist";

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* 헤더 */}
        <Header name={"홈"} />
        <HomeSwiper />
        <MealFlatList />
        <Schedule />
      </View>
    </ScrollView>
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

export default Home;
