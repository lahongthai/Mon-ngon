import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import SCREEN from '../navigators/RouteKey';
import {useNavigation} from '@react-navigation/native';
import ICONS from '../theme/Icons';

const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <TouchableOpacity
        style={styles.LeftHD}
        onPress={() => navigation.goBack()}>
        <Image style={styles.BackIC} source={ICONS.iconBack} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.SearchHeader}>
        <Image
          style={styles.searchIC}
          source={ICONS.iconSearchDiscovery}></Image>
        <Text style={styles.SRtxt}>{'Tìm kiếm'}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#ffd24e',
    flexDirection: 'row',
    // paddingHorizontal: 20,
    paddingTop: 38,
    height: 100,
    // justifyContent: 'center',
    // padding: 30,
  },
  LeftHD: {
    flex: 0.2,
  },
  SearchHeader: {
    flex: 0.7,
    height: 45,
    paddingLeft: 10,
    borderRadius: 22,
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  SRtxt: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
    marginLeft: 15,
  },
  searchIC: {
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 18,
    height: 18,
    marginTop: 13,
  },
  BackIC: {
    width: 20,
    height: 20,
    marginLeft: 30,
    marginTop: 12,
    // marginLeft: 30,
  },
});
export default SearchScreen;
