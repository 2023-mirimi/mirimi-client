import React from "react";
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from "@react-navigation/drawer";

import BottomTabNavigator from "./BottomTabNavigator";

import { Image } from "react-native";

// import HomeNavigator from "../pages/Home";
import CommunityNavigator from "../pages/Community";
import CompetitionNavigator from "../pages/Competition";
import SchoolLifeNavigator from "../pages/SchoolLife";
import MyPageNavigator from "../pages/MyPage";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        // 첫 페이지는 바텀 내비게이션이 있으니까
        // 홈에 BottomNavigator 넣어두면 구성 요소 대체가능...하다는데 먼말이지
        name="HomeTabs"
        component={BottomTabNavigator}
        options={{
          title: "홈 ",
          headerRight: () => (
            <Image
              style={{ width: "20%" }}
              source={require("../assets/bell.png")}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="CommunityNavigator"
        component={CommunityNavigator}
        options={{
          title: "커뮤니티",
        }}
      />
      <Drawer.Screen
        name="CompetitionNavigator"
        component={CompetitionNavigator}
        options={{
          title: "공모전",
        }}
      />
      <Drawer.Screen
        name="SchoolLifeNavigator"
        component={SchoolLifeNavigator}
        options={{
          title: "학교생활",
        }}
      />
      <Drawer.Screen
        name="MyPageNavigator"
        component={MyPageNavigator}
        options={{
          title: "My",
        }}
      />
    </Drawer.Navigator>
  );
};

function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate("Home")}
      />
    </DrawerContentScrollView>
  );
}

export default DrawerNavigator;
