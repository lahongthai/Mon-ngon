import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import ICONS from '../theme/Icons';
import SCREEN from '../navigators/RouteKey';

const FoodDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {data} = route.params;
  console.log('param', JSON.stringify(data, null, 2));
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.icBack} source={ICONS.iconBack} />
        </TouchableOpacity>
        <Text style={styles.txt}>{data.nameProduct}</Text>
        <View style={styles.headerL}>
          <TouchableOpacity>
            <Image style={styles.icon} source={ICONS.iconProHeader3} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.txt2}>{data.nameProduct}: </Text>
      {data.description.map(item => (
        <View key={item.id + ''}>
          <Text>{item.name}</Text>
          <Text style={styles.txt2}>{item.ingredient.name}:</Text>
          {/*<Text style={styles.txt2}>{item.ingredient.detail}:</Text>*/}
          {/*for i of {item.ingredient.detail} {}*/}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#ffd24e',
    height: 100,
  },
  headerL: {
    flex: 0.5,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  txt: {
    color: 'white',
    fontSize: 18,
    paddingLeft: 30,
    fontWeight: 'bold',
  },
  txt2: {
    paddingTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    marginBottom: 15,
    width: 25,
    height: 25,
  },
  icBack: {
    width: 20,
    height: 20,
    marginLeft: 30,
    marginTop: 30,
    // marginLeft: 30,
  },
});
export default FoodDetailScreen;
