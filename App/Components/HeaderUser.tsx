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
import SearchScreen from '../Screens/SearchScreen';
import {useNavigation} from '@react-navigation/native';
import SCREEN from '../navigators/RouteKey';

const HeaderUser = props => {
  const navigation = useNavigation();
  const SearchingScreen = () => {
    navigation.navigate(SCREEN.SEARCH_SCREEN);
  };
  return (
    <View style={styles.bgHeader}>
      <StatusBar translucent backgroundColor="transparent" />
      <Text style={styles.headerStyle}>{props.headerTitle}</Text>
      <TouchableOpacity style={styles.searchIcon} onPress={SearchingScreen}>
        <Image style={styles.icon} source={ICONS.iconProHeader3} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  bgHeader: {
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#ffd24e',
    justifyContent: 'space-evenly',
    // alignItems: 'center',
    paddingLeft: 20,
    height: 100,
    flexDirection: 'row',
  },
  headerStyle: {
    flex: 0.85,
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 35,
    // textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  searchIcon: {
    flex: 0.15,
    paddingTop: 50,
  },
  icon: {
    // marginBottom: 15,
    width: 25,
    height: 25,
  },
});
export default HeaderUser;
