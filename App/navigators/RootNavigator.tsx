import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SCREEN from './RouteKey';

import {StyleSheet} from "react-native";
import LoginScreen from '../Screens/LoginScreen';

const RootNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
            <Stack.Navigator
                screenOptions={{headerShown: true, navigationBarColor: 'transparent',}}
                // @ts-ignore
                initialRouteName={SCREEN.LOGIN_SCREEN}
            >
                <Stack.Screen
                    // @ts-ignore
                    name={SCREEN.LOGIN_SCREEN}
                    component={LoginScreen}
                    options={{headerShown: false, animation: 'slide_from_left'}}
                />
             
            </Stack.Navigator>
    );
};

export default RootNavigator;
const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto-Light'
    }
})
