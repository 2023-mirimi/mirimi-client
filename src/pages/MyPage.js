import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/header";
const Stack = createStackNavigator();

const MyPage = () => {
  return (
    <View style={styles.container}>
      <Header name={"마이페이지"} />
    </View>
  );
};

const MyPageNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MyPageScreen" component={MyPage} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    // height: 812,
    width: 375,
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default MyPageNavigator;
