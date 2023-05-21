import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, Image } from "react-native";

import HomeNavigator from "../pages/Home";
import CommunityNavigator from "../pages/Community";
import CompetitionNavigator from "../pages/Competition";
import SchoolLifeNavigator from "../pages/SchoolLife";
import MyPageNavigator from "../pages/MyPage";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "black" : "#7F8487" }}>홈</Text>
          ),
          tabBarIcon: ({ size, focused }) => (
            <Image
              style={{ width: size, height: size }}
              source={
                focused
                  ? require("../assets/icons/homeActive.png")
                  : require("../assets/icons/home.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="CommunityNavigator"
        component={CommunityNavigator}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "black" : "#7F8487" }}>
              커뮤니티
            </Text>
          ),
          tabBarIcon: ({ size, focused }) => (
            <Image
              style={{ width: size, height: size }}
              source={
                focused
                  ? require("../assets/icons/chatActive.png")
                  : require("../assets/icons/chat.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="SchoolLifeNavigator"
        component={SchoolLifeNavigator}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "black" : "#7F8487" }}>
              학교생활
            </Text>
          ),
          tabBarIcon: ({ size, focused }) => (
            <Image
              style={{ width: size, height: size }}
              source={
                focused
                  ? require("../assets/icons/noteBookActive.png")
                  : require("../assets/icons/notebook.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="CompetitionNavigator"
        component={CompetitionNavigator}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "black" : "#7F8487" }}>공모전</Text>
          ),
          tabBarIcon: ({ size, focused }) => (
            <Image
              style={{ width: size, height: size }}
              source={
                focused
                  ? require("../assets/icons/cupActive.png")
                  : require("../assets/icons/cup.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyPageNavigator"
        component={MyPageNavigator}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "black" : "#7F8487" }}>My</Text>
          ),
          tabBarIcon: ({ size, focused }) => (
            <Image
              style={{ width: size, height: size }}
              source={
                focused
                  ? require("../assets/icons/personActive.png")
                  : require("../assets/icons/person.png")
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
