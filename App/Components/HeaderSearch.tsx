import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import ICONS from '../theme/Icons';
import {useNavigation} from '@react-navigation/native';
import SCREEN from '../navigators/RouteKey';

const HeaderSearch = () => {
  const navigation = useNavigation();
  const SearchingScreen = () => {
    navigation.navigate(SCREEN.SEARCH_SCREEN);
  };
  return (
    <View style={styles.bgHeader}>
      <StatusBar translucent backgroundColor="transparent" />
      <TouchableOpacity style={styles.SearchHeader} onPress={SearchingScreen}>
        <Image style={styles.search} source={ICONS.iconSearchDiscovery}></Image>
        <Text style={styles.headerStyle}>{'Tìm kiếm các món ăn '}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  bgHeader: {
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#ffd24e',
    paddingHorizontal: 20,
    paddingTop: 38,
    height: 100,
    // justifyContent: 'center',
    // padding: 30,
  },
  SearchHeader: {
    paddingLeft: 20,
    borderRadius: 6,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  headerStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  search: {
    // paddingLeft: 30,
    width: 22,
    height: 22,
  },
});
export default HeaderSearch;
