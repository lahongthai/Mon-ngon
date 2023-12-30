import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../Screens/LoginScreen';
import SCREEN from './RouteKey';
import BottomTab from './BottomTab';
import CategoryDetailScreen from '../Screens/CategoryDetailScreen';
import CategoryScreen from '../Screens/CategoryScreen';
import FoodDetailScreen from '../Screens/FoodDetailScreen';
import SearchScreen from '../Screens/SearchScreen';

const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREEN.BOTTOM_TAB}
        screenOptions={{headerShown: false, navigationBarColor: 'transparent'}}>
        <Stack.Screen
          name={SCREEN.LOGIN_SCREEN}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name={SCREEN.BOTTOM_TAB} component={BottomTab} />
        <Stack.Screen
          name={SCREEN.CATEGORY_DETAIL_SCREEN}
          component={CategoryDetailScreen}
        />
        <Stack.Screen
          name={SCREEN.CATEGORY_SCREEN}
          component={CategoryScreen}
        />
        <Stack.Screen
          name={SCREEN.FOOD_DETAIL_SCREEN}
          component={FoodDetailScreen}
        />
        <Stack.Screen name={SCREEN.SEARCH_SCREEN} component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
