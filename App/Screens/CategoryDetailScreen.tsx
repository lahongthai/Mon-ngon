import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import ICONS from '../theme/Icons';
import SCREEN from '../navigators/RouteKey';
import CategoryScreen from './CategoryScreen';
import categoryScreen from './CategoryScreen';

const CategoryDetailScreen = () => {
  const navigation = useNavigation();
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
  const foodDetail = item => {
    navigation.navigate(SCREEN.FOOD_DETAIL_SCREEN, {
      data: item,
    });
  };
  const renderCategoryItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => foodDetail(item)} style={styles.item}>
        <Image
          style={styles.img}
          source={{uri: item.imageProduct[0].urlImage}}
        />
        <Text> {item.nameProduct} </Text>
      </TouchableOpacity>
    );
  };

  // Inside of a component's render() method:
  const MIN_HEIGHT = 70;

  return (
    <View style={styles.container}>
      <ImageHeaderScrollView
        // horizontal={true}
        maxHeight={200}
        minHeight={MIN_HEIGHT}
        minOverlayOpacity={0}
        maxOverlayOpacity={0}
        renderHeader={() => (
          <ImageBackground
            style={{flex: 1, paddingTop: StatusBar.currentHeight || 0}}
            source={require('../Assets/firstscr.png')}></ImageBackground>
        )}
        renderFixedForeground={() => (
          <View
            style={{
              height: 50,
              justifyContent: 'center',
              // alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={styles.icBack} source={ICONS.iconBack} />
            </TouchableOpacity>
          </View>
        )}>
        <View style={{height: 1000}}>
          <TriggeringView onHide={() => console.log('text hidden')}>
            <FlatList
              data={productsOfCategory}
              disableVirtualization={true}
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
    flex: 1,
  },
  Flist: {
    flexWrap: 'wrap',
    // height: 255,
    display: 'flex',
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
    width: 20,
    height: 20,
    marginLeft: 30,
    marginTop: 30,
  },
});
export default CategoryDetailScreen;
