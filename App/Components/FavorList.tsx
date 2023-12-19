import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import ICONS from '../theme/Icons';

const DATA = [
  {
    id: 'tt1',
    title: 'Được xem nhiều',
    icon: ICONS.iconListKhamPha1,
  },
  {
    id: 'tt2',
    title: 'Hôm nay ăn gì?',
    icon: ICONS.iconListKhamPha2,
  },
  {
    id: 'tt3',
    title: 'Món ngon yêu thích',
    icon: ICONS.iconListKhamPha3,
  },
];

const Item = (item: any) => (
  <View style={styles.item}>
    {item?.icon !== '' && <Image style={styles.icon} source={item.icon} />}
    {item?.title !== '' && <Text style={styles.title}>{item.title}</Text>}
  </View>
);

const FavorList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={({item}) => Item(item)}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    borderRadius: 25,
    margin: 10,
    paddingVertical: 5,
    backgroundColor: '#4aa467',
    padding: 20,
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    color: 'white',
    paddingLeft: 7,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: -10,
    marginTop: 2,
  },
});
export default FavorList;
