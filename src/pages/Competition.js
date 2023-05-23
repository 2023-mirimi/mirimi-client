import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/header";

const Stack = createStackNavigator();

const Competition = () => {
  return (
    <View style={styles.container}>
      <Header name={"공모전"} />
    </View>
  );
};

const CompetitionNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CompetitionScreen" component={Competition} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default CompetitionNavigator;
