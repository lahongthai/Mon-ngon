import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import App from '../../App';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../Assets/aaa.jpg')} />
      <Text style={styles.text}>Món ngon Việt Nam</Text>
      <Text style={styles.txt}>Sổ tay ẩm thực với hàng ngàn món ăn nổi tiếng trên các miền đất Việt Nam.</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'red',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  txt: {
    color: 'black',
    fontSize: 18,
    textAlign: 'justify',
    },
  image: {
    resizeMode: 'contain',
    width: '100%',
    flex: 0.4,
  },
});
export default HomeScreen;
