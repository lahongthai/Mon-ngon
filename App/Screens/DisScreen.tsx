import * as React from 'react';
import {Text, View, Button, Alert} from 'react-native';
const DisScreen = () => {
  return (
    <View>
      <View
        style={{
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'green',
        }}>
        <Text>Tất cả chuyên mục</Text>
        <Button
          title={'Xem tat ca'}
          onPress={() => {
          }}
        />
      </View>
    </View>
  );
};
export default DisScreen;
