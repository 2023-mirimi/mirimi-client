import React from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import Swiper from "react-native-swiper";
import Banner1 from "../../assets/home/banner-2.svg";
import Banner2 from "../../assets/home/banner-3.svg";
import { useNavigation } from "@react-navigation/native";

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

  const navigation = useNavigation(); // navigation 객체를 초기화합니다.

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
        <TouchableOpacity style={styles.slide2}>
          <View>
            <WithLocalSvg asset={Banner1} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.slide3} onPress={() => navigation.push("온보딩1")}>
          <View>
            <WithLocalSvg asset={Banner2} />
          </View>
        </TouchableOpacity>
      </Swiper>
    </View>
  );
}
