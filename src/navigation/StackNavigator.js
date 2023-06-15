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
import { Text } from "react-native-svg";
import DrawerNavigator from "./DrawerTabNavigator";
import CouncilCard from "../components/school/councilCard";
import Council from "../pages/Council";
import LikeCommunity from "../pages/LikeCommunity";
import LikeCompetition from "../pages/LikeCompetition";

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            {/* <Stack.Screen name="Drawer" component={DrawerNavigator} options={{headerShown: false}}/> */}
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="Join" component={Join} options={{headerShown: false}}/>
            <Stack.Screen name="Community" component={Community} options={{headerShown: false}}/>
            <Stack.Screen name="DetailedCommunity" component={DetailedCommunity} 
                options={{
                    title: '게시글', 
                    headerTitleStyle: {fontWeight: '500'}, 
                    headerBackTitle: '뒤로가기',
                    headerTintColor: 'black',
                }}/>
            <Stack.Screen name="NewPost" component={NewPost} options={{headerShown: false}}/>
            <Stack.Screen name="MyPage" component={MyPage} options={{headerShown: false}}/>
            <Stack.Screen name="BookBarCode" component={BookBarCode} options={{headerShown: false}}/>
            <Stack.Screen name="CouncilCard" component={CouncilCard} options={{headerShown: false}}/>
            <Stack.Screen name="Council" component={Council} options={{headerShown: false}}/>
            <Stack.Screen name="LikeCommunity" component={LikeCommunity} options={{headerShown: false}}/>
            <Stack.Screen name="LikeCompetition" component={LikeCompetition} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default MyStack;