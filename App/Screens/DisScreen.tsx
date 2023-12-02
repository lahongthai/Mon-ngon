import * as React from 'react';
import {Text, View, Button, ScrollView} from 'react-native';
import FavorList from '../Components/FavorList'
import AllItems from "../Components/AllItems";
import FoodCategories from "../Components/FoodCategories";

const DisScreen = () => {
  return (
    <ScrollView >
        <FavorList />
        <AllItems />
        <FoodCategories />

    </ScrollView>
  );
};
export default DisScreen;
