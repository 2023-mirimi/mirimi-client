import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screen/Login";
import Join from "../screen/Join";

const Stack = createNativeStackNavigator();

export default function StackContainer() {
    return(
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{}} />
            <Stack.Screen name="Join" component={Join} options={{}} />
          </Stack.Navigator>
    );
}
