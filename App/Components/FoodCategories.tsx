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
import {useNavigation, useRoute} from '@react-navigation/native';
import SCREEN from '../navigators/RouteKey';
import FoodDetailScreen from '../Screens/FoodDetailScreen';

interface FoodCategories {
  categories: object;
}
const FoodCategories: React.FC<FoodCategories> = props => {
  const [products, setProducts] = useState([]);

  const callAPIProduct = async (id: any) => {
    try {
      const response = await fetch(
        `http://192.168.56.1:3000/api/products?categoryId=${id}`,
      );
      const json = await response.json();
      setProducts(json);
    } catch (err) {
      console.log('lõi categoryId ', err);
    }
  };

  useEffect(() => {
    if (props.categories) {
      callAPIProduct(props.categories?.id);
    }
  }, [props.categories]);

  // const generateRandom = async (data: any) => {
  //     data.sort(() => Math.random() - 0.5);
  //     console.log('rd',JSON.stringify(data,null,2))
  //     // const index = Math.floor(Math.random() *data.length)
  //         setListCategories(data);
  //         for (let i of data){
  //         console.log('rdid',(i.id))  }
  // };
  const navigation = useNavigation();
  const route = useRoute();

  const showFoodList = () => {
    // @ts-ignore
    navigation.navigate(SCREEN.CATEGORY_DETAIL_SCREEN, {
      data: props.categories,
    });
  };

  const title = (item: any) => {
    const gotoFoodDetailScreen = (item: any) => {
      navigation.navigate(SCREEN.FOOD_DETAIL_SCREEN);
    };
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => gotoFoodDetailScreen(item)}>
          <Image
            style={styles.img}
            source={{uri: item.imageProduct[0].urlImage}}
          />
          <Text style={styles.txtTitle}> {item.nameProduct} </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      {products.length === 0 ? (
        <View></View>
      ) : (
        <View>
          <View style={styles.container}>
            <View>
              <Text style={styles.titleText}>
                {props.categories?.nameCategory}
              </Text>
              <Text
                style={
                  styles.lowText
                }>{`(${products.length} ${props.categories?.type})`}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={showFoodList}>
              <Text style={styles.btText}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            style={styles.Flist}
            horizontal={true}
            data={products}
            renderItem={({item}) => title(item)}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  // Flist: {
  //     flexWrap:'wrap',
  //     height: 236,

  // },
  button: {
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#4aa467',
    paddingHorizontal: 15,
    height: 30,
    alignSelf: 'center',
  },
  Flist: {
    flexWrap: 'wrap',
    height: 200,
    display: 'flex',
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
    // marginLeft: 20
  },
  item: {
    margin: 10,
    // padding: 8,
    backgroundColor: '#edf1f6',

    alignItems: 'center',
    shadowColor: 'blue',

    elevation: 5,
  },
  img: {
    width: 200,
    height: 150,
  },
  txtTitle: {
    position: 'absolute',
    bottom: 0,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default FoodCategories;

// const Item = (item: any) => {
//     return (
//         <View style={styles.item}>
//             <Image style={styles.img} source={{uri: item.imageProduct[0].urlImage}}/>
//             <Text style={styles.txtTitle}> {item.nameProduct} </Text>
//         </View>
//     )
// };
//
// return (
//     <View>
//         <View style={styles.container}>
//             <View>
//                 <Text style={styles.titleText}>{listCategories?.nameCategory}</Text>
//                 <Text style={styles.lowText}>{`(${categories.length} chuyên mục)`}</Text>
//             </View>
//             <TouchableOpacity style={styles.button} onPress={showFoodList}>
//                 <Text style={styles.btText}>Xem tất cả</Text>
//
//             </TouchableOpacity>
//         </View>
//         <FlatList style={styles.Flist}
//                   horizontal={true}
//                   data={categories}
//                   renderItem={({item}) => Item(item)}
//                   showsHorizontalScrollIndicator={false}
//         />
//     </View>
//
// );
// }
// const styles = StyleSheet.create({
//     container: {
//         justifyContent: 'space-between',
//         flexDirection: 'row',
//         marginHorizontal: 10
//     },
//     // Flist: {
//     //     flexWrap:'wrap',
//     //     height: 236,
//
//     // },
//     button: {
//         borderBottomEndRadius: 20,
//         borderBottomStartRadius: 20,
//         borderTopRightRadius: 20,
//         borderTopLeftRadius: 20,
//         backgroundColor: '#1852c7',
//         paddingHorizontal: 15,
//         height: 30,
//         alignSelf: 'center'
//     },
//     Flist: {
//         // flexWrap: 'wrap',
//         // height: 200,
//         // display: 'flex',
//     },
//     btText: {
//         color: 'white',
//         paddingTop: 5
//     },
//     titleText: {
//         color: 'black',
//         fontSize: 18
//     },
//     lowText: {
//         color: 'black',
//         fontSize: 14,
//         // marginLeft: 20
//     },
//     item: {
//
//         margin: 10,
//         // padding: 8,
//         backgroundColor: '#edf1f6',
//
//         alignItems: 'center',
//         shadowColor: 'blue',
//
//         elevation: 5,
//     },
//     img: {
//         width: 200,
//         height: 150,
//
//     },
//     txtTitle:{
//         position:'absolute',
//         bottom:0,
//         color:'white',
//         fontSize:20,
//         fontWeight:'bold'
//     }
// })
