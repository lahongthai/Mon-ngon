import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';

const StartScreen = () => {
  return (
    <View style={styles.stscr}>
      <Image style={styles.image} source={require('../Assets/firstscr.png')} />
      <Text style={styles.header}>Món ngon Việt Nam</Text>
      <Text style={styles.text}>
        Sổ tay nấu ăn với hàng ngàn món ăn đậm chất Việt
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  stscr: {
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    paddingTop: 30,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
  },

  image: {
    width: '100%',
    resizeMode: 'stretch',
    height: '50%',
  },
});
export default StartScreen;
