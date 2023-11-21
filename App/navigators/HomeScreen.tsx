import * as React from 'react';
import { Text, View, Image, Button, Alert, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ICONS from '../theme/Icons';

const Tab = createMaterialBottomTabNavigator();

const HomeScreen = () => {
  const tabLabelStyle = (focused: any) => ({
    color: focused ? '#FF9900' : '#9B4A10'
  })

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#FED44E"
      inactiveColor='#7A590F'
      barStyle={{ backgroundColor: '#EDF8F7' }}
    >
      <Tab.Screen
        name="Khám Phá"
        component={DisScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? ICONS.iconKhamPhaActive : ICONS.iconKhamPhaInactive} style={styles.icon} />
          ),
        }}
      />

      <Tab.Screen
        name="Gợi ý"
        component={SuggetScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? ICONS.iconGoiYActive : ICONS.iconGoiYInactive} style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name="Chuyên mục"
        component={ProScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? ICONS.iconChuyenMucActive : ICONS.iconChuyenMucInactive} style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name="Set"
        component={Set}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? ICONS.iconUserActive : ICONS.iconUserInactive} style={styles.icon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  }
})
export default HomeScreen;
