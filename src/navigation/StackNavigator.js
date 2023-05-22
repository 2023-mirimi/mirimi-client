import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Join from "../pages/Join";
import Community from "../pages/Community";
import DetailedCommunity from "../pages/DetailedCommunity";
import NewPost from "../pages/NewPost";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return(
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Join" component={Join} options={{headerShown: false}}/>
            <Stack.Screen name="Community" component={Community} options={{headerShown: false}}/>
            <Stack.Screen name="DetailedCommunity" component={DetailedCommunity} options={{headerShown: true}}/>
            <Stack.Screen name="NewPost" component={NewPost} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default StackNavigator ;
