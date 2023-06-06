import React, { Component } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import Banner1 from "../../assets/home/banner-1.png";
import Banner2 from "../../assets/home/banner-2.png";
import Banner3 from "../../assets/home/banner-3.png";

const { width } = Dimensions.get("window");

const styles = {
  container: {
    flex: 1,
    width: 375,
    height: 168,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
  },

  slide1: {
    flex: 1,
    height: 168,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },

  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },

  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },

  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },

  image: {
    width,
    flex: 1,
  },
};

export default function HomeSwpier() {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        width={375}
        height={168}
        horizontal={true}
        showsPagination={false}
        autoplay
      >
        <View style={styles.slide1}>
          <Image source={Banner1} />
        </View>
        <View style={styles.slide2}>
          <Image source={Banner2} />
        </View>
        <View style={styles.slide3}>
          <Image source={Banner3} />
        </View>
      </Swiper>
    </View>
  );
}
