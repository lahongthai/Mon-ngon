import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import HeaderUser from '../Components/HeaderUser';
import ICONS from '../theme/Icons';

const UserScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderUser headerTitle={'Cá nhân'} />
      <View style={styles.box}>
        <TouchableOpacity style={styles.TObox1}>
          <Image style={styles.icon} source={ICONS.iconUser1} />
          <Text style={styles.txt}>Món ăn yêu thích</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TObox2}>
          <Image style={styles.icon} source={ICONS.iconUser2} />
          <Text style={styles.txt}>Món ăn đã xem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TObox3}>
          <Image style={styles.icon} source={ICONS.iconUser3} />
          <Text style={styles.txt}>Món ăn có ghi chú</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity style={styles.TObox1}>
          <Image style={styles.icon} source={ICONS.iconUser4} />
          <Text style={styles.txt}>Đánh giá ứng dụng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TObox2}>
          <Image style={styles.icon} source={ICONS.iconUser5} />
          <Text style={styles.txt}>Chia sẻ ứng dụng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TObox3}>
          <Image style={styles.icon} source={ICONS.iconUser6} />
          <Text style={styles.txt}>Thông tin ứng dụng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  box: {
    marginTop: 30,
    width: '90%',
    height: 200,
  },
  TObox1: {
    paddingLeft: 90,
    flexDirection: 'row',
    flex: 0.33,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
    shadowColor: 'blue',
    elevation: 2,
    backgroundColor: 'white',
  },
  TObox2: {
    paddingLeft: 90,
    flexDirection: 'row',
    flex: 0.33,
    // justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'blue',
    elevation: 2,
    backgroundColor: 'white',
  },
  TObox3: {
    paddingLeft: 90,
    flexDirection: 'row',
    flex: 0.33,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    shadowColor: 'blue',
    elevation: 2,
    backgroundColor: 'white',
  },
  icon: {
    width: 22,
    height: 22,
  },
  txt: {
    paddingLeft: 20,
    fontSize: 17,
  },
});
export default UserScreen;
