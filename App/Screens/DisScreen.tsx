import * as React from 'react';
import {Text, View, Button, ScrollView} from 'react-native';
import FavorList from '../Components/FavorList'
import AllItems from "../Components/AllItems";

const DisScreen = () => {
  return (
    <ScrollView >
        <FavorList />
        <AllItems />

    </ScrollView>
  );
};
export default DisScreen;
