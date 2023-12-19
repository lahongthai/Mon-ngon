import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

const HeaderGoiY = props => {
  return (
    <View style={styles.bgHeader}>
      <StatusBar translucent backgroundColor="transparent" />
      <Text style={styles.headerStyle}>{props.headerTitle}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  bgHeader: {
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#ffd24e',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
    height: 100,
  },
  headerStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 35,
    // textAlign: 'center',
    margin: 10,
    color: 'white',
  },
});
export default HeaderGoiY;
