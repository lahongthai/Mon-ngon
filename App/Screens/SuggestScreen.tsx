import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import HeaderGoiY from '../Components/HeaderGoiY';

const SuggestScreen = () => {
  const [categories, setCategories] = useState([]);
  const callAPICategories = async () => {
    try {
      const response = await fetch('http://192.168.56.1:3000/api/categories');
      const json = await response.json();
      setCategories(json);
    } catch (err) {
      console.log('lõi category ', err);
    }
  };
  useEffect(() => {
    callAPICategories();
  }, []);
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
      <HeaderGoiY headerTitle={'Gợi ý hôm nay'} />
      <View>
        <Text style={styles.titleText}>Món Chính</Text>
      </View>
      <FlatList
        data={categories}
        renderItem={item => renderCategoryItem(item)}
        style={styles.Flist}
        // key={numColumns.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    backgroundColor: '#ffd24e',
    height: 70,
  },
  titleText: {
    fontSize: 18,
  },
  txt: {
    color: 'white',
    fontSize: 18,
  },
  Flist: {
    flexWrap: 'wrap',
    // height: 255,
    display: 'flex',
    // flexDirection:'row'
  },
  item: {
    margin: 10,
    padding: 8,
    width: '45%',
    backgroundColor: '#edf1f6',
    alignItems: 'center',
    shadowColor: 'blue',

    elevation: 5,
  },
  img: {
    width: 150,
    height: 150,
  },
});
export default SuggestScreen;
