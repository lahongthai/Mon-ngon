import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './App/navigators/RootNavigator';
import { Text, View } from 'react-native';

const App = () => {
  return (
    // <GestureHandlerRootView>
        <RootNavigator />
    // </GestureHandlerRootView>
    // // <View>
    //      <RootNavigator />
    //       <Text>aaa</Text>
    //       <Text>aaa</Text>
    //       <Text>aaa</Text>

    // {/* </View> */}
  );
};
export default App;
