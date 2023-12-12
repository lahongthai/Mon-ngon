import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import FavorList from '../Components/FavorList';
import AllItems from '../Components/AllItems';
import FoodCategories from '../Components/FoodCategories';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../Src/Reducers/reduces';

const store = createStore(reducers);
class Searching extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity>
          <Text style={styles.btText}>Tìm kiếm món ăn </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const DiscoveScreen = () => {
  const navigation = useNavigation();
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
  const randomListCategories = (array: any) => {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[randomIndex]] = [
        shuffledArray[randomIndex],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <Provider store={store}>
      <ScrollView>
        <Searching />
        <FavorList />
        <AllItems categories={categories} />
        {categories &&
          randomListCategories(categories).map(item => (
            <FoodCategories categories={item} key={item?.nameCategory} />
          ))}
      </ScrollView>
    </Provider>
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
    backgroundColor: '#1852c7',
    paddingHorizontal: 15,
    height: 30,
    alignSelf: 'center',
  },
  Flist: {
    // flexWrap: 'wrap',
    // height: 200,
    // display: 'flex',
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
export default DiscoveScreen;
