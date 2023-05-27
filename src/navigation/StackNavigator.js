import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Join from "../pages/Join";
import Community from "../pages/Community";
import DetailedCommunity from "../pages/DetailedCommunity";
import NewPost from "../pages/NewPost";
import MyPage from "../pages/MyPage";
import BookBarCode from "../pages/BookBarcode";
import BottomTabNavigator from "./BottomTabNavigator";
import DrawerNavigator from "./DrawerTabNavigator";

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            {/* <Stack.Screen name="Drawer" component={DrawerNavigator} options={{headerShown: false}}/> */}
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="Join" component={Join} options={{headerShown: false}}/>
            <Stack.Screen name="Community" component={Community} options={{headerShown: false}}/>
            <Stack.Screen name="DetailedCommunity" component={DetailedCommunity} options={{headerShown: true}}/>
            <Stack.Screen name="NewPost" component={NewPost} options={{headerShown: false}}/>
            <Stack.Screen name="NewPost" component={NewPost} options={{headerShown: false}}/>
            <Stack.Screen name="MyPage" component={MyPage} options={{headerShown: false}}/>
            <Stack.Screen name="BookBarCode" component={BookBarCode} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default MyStack ;
