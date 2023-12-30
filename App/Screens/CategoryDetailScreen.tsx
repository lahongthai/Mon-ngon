import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Animated,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import HeaderImageScrollView, {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import ICONS from '../theme/Icons';
import SCREEN from '../navigators/RouteKey';
import CategoryScreen from './CategoryScreen';
import categoryScreen from './CategoryScreen';
import FoodDetailScreen from './FoodDetailScreen';
import HeaderGoiY from '../Components/HeaderGoiY';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const DATA = [
  {
    id: 1,
    title: 'The Hunger Games',
  },
  {
    id: 2,
    title: 'Harry Potter and the Order of the Phoenix',
  },
  {
    id: 3,
    title: 'To Kill a Mockingbird',
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
  },
  {
    id: 5,
    title: 'Twilight',
  },
  {
    id: 6,
    title: 'The Book Thief',
  },
  {
    id: 7,
    title: 'The Chronicles of Narnia',
  },
  {
    id: 8,
    title: 'The Hunger Games',
  },
  {
    id: 9,
    title: 'Harry Potter and the Order of the Phoenix',
  },
  {
    id: 10,
    title: 'To Kill a Mockingbird',
  },
  {
    id: 11,
    title: 'Pride and Prejudice',
  },
  {
    id: 12,
    title: 'Twilight',
  },
  {
    id: 13,
    title: 'The Book Thief',
  },
  {
    id: 14,
    title: 'The Chronicles of Narnia',
  },
];
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
    const img = item.imageProduct[0].urlImage;
    return (
      <TouchableOpacity onPress={() => foodDetail(item)} style={styles.item}>
        <Image
          style={styles.img}
          source={{uri: item.imageProduct[0].urlImage}}
        />
        <Text> {item.nameProduct} </Text>
        <Image style={styles.img2} source={ICONS.iconUser1} />
      </TouchableOpacity>
    );
  };
  const HEADER_HEIGHT = 200;
  const AnimatedHeader = ({animatedValue}) => {
    const insets = useSafeAreaInsets();

    const headerHeight = animatedValue.interpolate({
      inputRange: [0, HEADER_HEIGHT + insets.top],
      outputRange: [HEADER_HEIGHT + insets.top, insets.top + 44],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          height: headerHeight,
          // backgroundColor: 'lightblue',
        }}>
        <ImageBackground
          style={{height: '100%', width: '100%'}}
          source={require('../Assets/firstscr.png')}>
          <TouchableOpacity
            style={styles.backArea}
            onPress={() => navigation.goBack()}>
            <Image style={styles.icBack} source={ICONS.iconBack} />
          </TouchableOpacity>
        </ImageBackground>
      </Animated.View>
    );
  };
  const offset = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
        <AnimatedHeader animatedValue={offset} />
        <FlatList
          data={productsOfCategory}
          style={{flex: 1, backgroundColor: 'white'}}
          numColumns={2}
          contentContainerStyle={{
            // alignItems: 'center',
            paddingTop: 220,
            paddingHorizontal: 20,
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          keyExtractor={(item, index) => index.toString()}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: offset}}}],
            {useNativeDriver: false},
          )}
          renderItem={renderCategoryItem}
        />
        {/*<ScrollView*/}
        {/*  style={{flex: 1, backgroundColor: 'white'}}*/}
        {/*  contentContainerStyle={{*/}
        {/*    alignItems: 'center',*/}
        {/*    paddingTop: 220,*/}
        {/*    paddingHorizontal: 20,*/}
        {/*  }}*/}
        {/*  showsVerticalScrollIndicator={false}*/}
        {/*  scrollEventThrottle={16}*/}
        {/*  onScroll={Animated.event(*/}
        {/*    [{nativeEvent: {contentOffset: {y: offset}}}],*/}
        {/*    {useNativeDriver: false},*/}
        {/*  )}>*/}
        {/*  {DATA.map(item => (*/}
        {/*    <View*/}
        {/*      key={item.id}*/}
        {/*      style={{*/}
        {/*        marginBottom: 20,*/}
        {/*      }}>*/}
        {/*      <Text style={{color: '#101010', fontSize: 32}}>{item.title}</Text>*/}
        {/*    </View>*/}
        {/*  ))}*/}
        {/*</ScrollView>*/}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
//     <View style={styles.container}>
//       <StatusBar translucent backgroundColor="transparent" />
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backArea}
//           onPress={() => navigation.goBack()}>
//           <Image style={styles.icBack} source={ICONS.iconBack} />
//         </TouchableOpacity>
//         <Text style={styles.txt}>Chi tiết </Text>
//       </View>
//       {/*{console.log('z', productOfCategory)}*/}
//       <ScrollView>
//         <Image style={styles.img} />
//         <View style={{height: 1000}}>
//           {productsOfCategory.map(item => renderCategoryItem(item))}
//         </View>
//       </ScrollView>
//     </View>
//   );
// };
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
  header: {
    height: 100,
    // alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffd24e',
  },
  backArea: {
    flex: 0.2,
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
  img2: {
    alignSelf: 'flex-start',
    width: 18,
    height: 18,
  },
  icBack: {
    width: 20,
    height: 20,
    marginLeft: 30,
    marginTop: 50,
  },
  txt: {
    backgroundColor: '#edf1f6',
    flex: 0.8,
    fontSize: 18,
    paddingLeft: 50,
    paddingTop: 50,
  },
});
export default CategoryDetailScreen;

{
  /*{productsOfCategory.map(item => renderCategoryItem(item))}          */
}

{
  /*<FlatList*/
}
{
  /*  data={productsOfCategory}*/
}
{
  /*  disableVirtualization={true}*/
}
{
  /*  renderItem={item => renderCategoryItem(item)}*/
}
{
  /*  style={styles.Flist}*/
}
{
  /*  // key={numColumns.toString()}*/
}
{
  /*  numColumns={2}*/
}
{
  /*  showsVerticalScrollIndicator={false}*/
}
{
  /*  showsHorizontalScrollIndicator={false}*/
}
{
  /*/>*/
}
