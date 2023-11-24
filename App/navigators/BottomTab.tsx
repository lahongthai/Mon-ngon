import * as React from 'react';
import { Text, View, Image, Button, Alert, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ICONS from '../theme/Icons';
import DisScreen from "../Screens/DisScreen";
import SuggestScreen from "../Screens/SuggestScreen";
import CategoryScreen from "../Screens/CategoryScreen";
import UserScreen from "../Screens/UserScreen";
import SCREEN from "./RouteKey";
import {MD3LightTheme as DefaultTheme,Provider as PaperProvider}  from "react-native-paper";

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
  const tabLabelStyle = (focused: any) => ({
    color: focused ? '#FF9900' : '#9B4A10'
  })
    const theme = {
      ...DefaultTheme,
        colors:{
          ...DefaultTheme.colors,
            secondaryContainer:"transparent"
        }
    }

  return (
      <PaperProvider theme={theme}>
          <Tab.Navigator>
              <Tab.Screen
                  name={SCREEN.HOME_SCREEN}
                  component={DisScreen}
                  options={{
                      tabBarLabel:'Khám phá',
                      tabBarIcon: ({ focused }) => (
                          <Image source={focused ? ICONS.iconKhamPhaActive : ICONS.iconKhamPhaInactive} style={styles.icon} />
                      ),
                  }}
              />

              <Tab.Screen
                  name={SCREEN.SUGGEST_SCREEN}
                  component={SuggestScreen}
                  options={{

                      tabBarLabel:'Gợi ý',
                      tabBarIcon: ({ focused }) => (
                          <Image source={focused ? ICONS.iconGoiYActive : ICONS.iconGoiYInactive} style={styles.icon} />
                      ),
                  }}
              />
              <Tab.Screen
                  name={SCREEN.CATEGORY_SCREEN}
                  component={CategoryScreen}

                  options={{
                      tabBarLabel:'Chuyên mục',
                      tabBarIcon: ({ focused }) => (
                          <Image source={focused ? ICONS.iconChuyenMucActive : ICONS.iconChuyenMucInactive} style={styles.icon} />
                      ),
                  }}
              />
              <Tab.Screen
                  name={SCREEN.USER_SCREEN}
                  component={UserScreen}
                  options={{
                      tabBarLabel:'Cá nhân',
                      tabBarIcon: ({ focused }) => (
                          <Image source={focused ? ICONS.iconUserActive : ICONS.iconUserInactive} style={styles.icon} />
                      ),
                  }}
              />
          </Tab.Navigator>
      </PaperProvider>

  );
};
const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  }
})
export default BottomTab;
