import React from "react";
import { View, Dimensions } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import Swiper from "react-native-swiper";
import Banner1 from "../../assets/home/banner-2.svg";
import Banner2 from "../../assets/home/banner-3.svg";

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
        <View style={styles.slide2}>
          <WithLocalSvg asset={Banner1} />
        </View>
        <View style={styles.slide3}>
          <WithLocalSvg asset={Banner2} />
        </View>
      </Swiper>
    </View>
  );
}
