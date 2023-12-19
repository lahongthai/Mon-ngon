import React, {useEffect, useState} from 'react';
import ICONS from '../theme/Icons';
import SCREEN from '../navigators/RouteKey';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CategoryScreen = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [numColumns, setNumColumns] = useState(2);

  const callProduct = async (id: any) => {
    try {
      const response = await fetch(
        `http://192.168.56.1:3000/api/products?categoryId=${id}`,
      );
      const json = await response.json();
      setProducts(json);
    } catch (err) {
      console.log('lõi categoryId ', err);
    }
    console.log('productmoi', JSON.stringify(products, null, 2));
  };
  useEffect(() => {
    if (categories) {
      callProduct(1);
    }
  }, [categories]);
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

  const categoryDetail = item => {
    console.log('vbn', item);
    navigation.navigate(SCREEN.CATEGORY_DETAIL_SCREEN, {
      data: item,
      // paramXyz: categories,
    });
  };

  const renderCategoryItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => categoryDetail(item, item.avatarCategory)}
        style={numColumns === 2 ? styles.item1 : styles.item2}>
        <Image
          style={numColumns === 2 ? styles.img1 : styles.img2}
          source={{uri: item.avatarCategory}}
        />
        <Text style={styles.TxtProList}> {item.nameCategory} </Text>
        <Text> {`(${products.length} ${item.type})`}</Text>
      </TouchableOpacity>
    );
  };
  const changeNumberColums = () => {
    if (numColumns === 2) {
      setNumColumns(1);
    } else {
      setNumColumns(2);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.header}>
        <Text style={styles.txt}>Chuyên mục</Text>
        <View style={styles.headerL}>
          <TouchableOpacity onPress={changeNumberColums}>
            <Image
              style={styles.icon}
              source={
                numColumns === 2 ? ICONS.iconProHeader1 : ICONS.iconProHeader2
              }
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.icon} source={ICONS.iconProHeader3} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={categories}
        renderItem={item => renderCategoryItem(item)}
        key={numColumns.toString()}
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight || 0,
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
    fontSize: 25,
    paddingLeft: 30,
    fontWeight: 'bold',
  },
  icon: {
    marginBottom: 15,
    width: 25,
    height: 25,
  },
  img1: {
    width: 150,
    height: 150,
  },
  img2: {
    width: '93%',
    justifyContent: 'center',
    resizeMode: 'cover',
    height: 150,
  },
  item1: {
    margin: 10,
    padding: 8,
    width: '45%',
    backgroundColor: '#edf1f6',
    alignItems: 'center',
    shadowColor: 'blue',

    elevation: 5,
  },
  item2: {
    width: '95%',
    margin: 10,
    padding: 8,
    backgroundColor: '#edf1f6',
    alignItems: 'center',
    shadowColor: 'blue',

    elevation: 5,
  },
  TxtProList: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CategoryScreen;
