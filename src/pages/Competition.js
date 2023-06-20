import React from "react";

// 로그 박스 무시하는 코드?!
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Sending"]);

import { Text, StyleSheet, View, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/header";
import AllTab from "../components/competition/AllTab";
import ITTab from "../components/competition/ITTab";
import SWTab from "../components/competition/SWTab";
import GameTab from "../components/competition/GameTab";
import UIUXTab from "../components/competition/UIUXTab";
import CharTab from "../components/competition/CharTab";

const Stack = createStackNavigator();

const FirstRoute = () => <AllTab />;
const SecondRoute = () => <ITTab />;
const ThirdRoute = () => <SWTab />;
const FourthRoute = () => <GameTab />;
const FifthRoute = () => <UIUXTab />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
  fifth: FifthRoute,
});

const Competition = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "전체" },
    { key: "second", title: "교내" },
    { key: "third", title: "IT" },
    { key: "fourth", title: "게임" },
    { key: "fifth", title: "UXUI" },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      tabStyle={{ width: 73 }}
      indicatorStyle={{ backgroundColor: "rgba(23, 227, 129, 1)" }}
      style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
      scrollEnabled={true} // 이거 true하면 슬라이드 가능
      renderLabel={({ route, focused }) => (
        <Text
          style={
            focused ? { color: "black" } : { color: "rgba(138, 138, 138, 1)" }
          }
        >
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <>
      <View style={{ backgroundColor: "#fff" }}>
        <Header name={"공모전"} />
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </>
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
