import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import ICONS from '../theme/Icons';

const CategoryDetailScreen = () => {
  const route = useRoute();
  // @ts-ignore
  const {data} = route?.params;
  const [productsOfCategory, setProductsOfCategory] = useState([]);

  const callApiProductOfCategory = async (categoryId: number) => {
    try {
      const response = await fetch(
        `http://192.168.56.1:3000/api/products?categoryId=${categoryId}`,
      );
      const json = await response.json();
      setProductsOfCategory(json);
    } catch (err) {
      console.log('Lõi category fs callApiProductOfCategory :', err);
    }
  };
  useEffect(() => {
    callApiProductOfCategory(data.id);
  }, []);
  console.log('vvv', productsOfCategory);
  const renderCategoryItem = ({item}) => {
    console.log('iii', JSON.stringify(item, null, 2));
    return (
      <TouchableOpacity
        onPress={() => detailCategory(item)}
        style={styles.item}>
        <Image
          style={styles.img}
          source={{uri: item.imageProduct[0].urlImage}}
        />
        <Text> {item.nameProduct} </Text>
      </TouchableOpacity>
    );
  };

  // Inside of a component's render() method:
  const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;

  return (
    <View style={styles.container}>
      <ImageHeaderScrollView
        maxHeight={200}
        minHeight={MIN_HEIGHT}
        headerImage={require('../Assets/firstscr.png')}
        renderForeground={() => (
          <View
            style={{
              height: 150,
              justifyContent: 'center',
              // alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => console.log('tap!!')}>
              <Image style={styles.icBack} source={ICONS.iconBack} />
            </TouchableOpacity>
          </View>
        )}>
        <View style={{height: 1000}}>
          <TriggeringView onHide={() => console.log('text hidden')}>
            <FlatList
              data={productsOfCategory}
              renderItem={item => renderCategoryItem(item)}
              style={styles.Flist}
              // key={numColumns.toString()}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
          </TriggeringView>
        </View>
      </ImageHeaderScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
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
  icBack: {
    position: 'absolute',
    width: 30,
    height: 30,
    // marginLeft: 30,
  },
});
export default CategoryDetailScreen;
