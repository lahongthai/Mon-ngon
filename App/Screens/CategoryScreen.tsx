import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

const CategoryScreen = () => {
    return (
        <View style={styles.container}>
            <Text>ProScreen</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
    },
});



export default CategoryScreen;