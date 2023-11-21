import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../Screens/LoginScreen";
import SCREEN from "./RouteKey";
import BottomTab from "./BottomTab";

const RootNavigator = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={SCREEN.BOTTOM_TAB}
                screenOptions={{ headerShown: false, navigationBarColor: 'transparent', }}
            >
                <Stack.Screen
                    name={SCREEN.LOGIN_SCREEN}
                    component={LoginScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name={SCREEN.BOTTOM_TAB}
                    component={BottomTab} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RootNavigator