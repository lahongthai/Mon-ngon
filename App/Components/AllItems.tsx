import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SCREEN from '../navigators/RouteKey';

interface AllItemProps {
  categories: array[];
}

const AllItems: React.FC<AllItemProps> = props => {
  const navigation = useNavigation();
  const total = props.categories.length;
  const numColumns = Math.ceil(total / 3);
  const OPgoToScreenCategory = () => {
    // @ts-ignore
    navigation.navigate(SCREEN.CATEGORY_SCREEN);
  };
  // @ts-ignore
  const detailCategory = item => {
    // Navigate to the detail screen with the category details
    // @ts-ignore
    navigation.navigate(SCREEN.CATEGORY_DETAIL_SCREEN, {
      data: item,
      // paramXyz: categories,
    });
  };
  // console.log('test',categories)
  // @ts-ignore
  const renderCategoryItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => detailCategory(item)}
        style={styles.item}>
        <Image style={styles.img} source={{uri: item.avatarCategory}} />
        <Text> {item.nameCategory} </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <View style={styles.container1}>
        <View>
          <Text style={styles.titleText}>Tất cả chuyên mục</Text>
          <Text style={styles.lowText}>{`(${total} chuyên mục)`}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={OPgoToScreenCategory}>
          <Text style={styles.btText}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: 20}}>
        <FlatList
          data={props.categories}
          renderItem={item => renderCategoryItem(item)}
          style={styles.Flist}
          key={numColumns.toString()}
          numColumns={numColumns}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container1: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  Flist: {
    flexWrap: 'wrap',
    height: 255,
    display: 'flex',
    // flexDirection:'row'
  },
  button: {
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#1852c7',
    paddingHorizontal: 15,
    height: 30,
    alignSelf: 'center',
  },
  btText: {
    color: 'white',
    paddingTop: 5,
  },
  titleText: {
    color: 'black',
    fontSize: 18,
  },
  lowText: {
    color: 'black',
    fontSize: 14,
    marginLeft: 20,
  },
  item: {
    margin: 10,
    padding: 8,
    backgroundColor: '#edf1f6',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: 'blue',

    elevation: 5,
  },
  img: {
    width: 45,
    height: 45,
    marginRight: 10,
  },
});
export default AllItems;
