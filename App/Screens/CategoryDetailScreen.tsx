import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useRoute} from "@react-navigation/native";

const CategoryDetailScreen = () => {

    const route = useRoute();
    // @ts-ignore
    const {paramAbc, paramXyz}  = route?.params;
    const [productsOfCategory, setProductsOfCategory] = useState([]);

    const callApiProductOfCategory = async (categoryId:number) => {
        try {
            const response = await fetch(`http://192.168.56.1:3000/api/products?categoryId=${categoryId}`);
            const json = await response.json();
            setProductsOfCategory(json);
        } catch (err) {
            console.log('Lõi category fs callApiProductOfCategory :', err);
        }
    };
    useEffect(() => {
        callApiProductOfCategory(paramAbc.id);
    }, []);

    return (
        <View style={styles.container}>
            <Text>CategoryDetailScreen</Text>
            <Text>CategoryDetailScreen</Text>
            <Text>CategoryDetailScreen</Text>
            <Text>CategoryDetailScreen</Text>
            <Text>CategoryDetailScreen</Text>
            <Text>CategoryDetailScreen</Text>
            <Text>CategoryDetailScreen</Text>
            <Text>CategoryDetailScreen</Text>
            <Text>CategoryDetailScreen</Text>
            <Text>CategoryDetailScreen</Text>
            <Text>CategoryDetailScreen</Text>
            <Text>CategoryDetailScreen</Text>
            <Text>CategoryDetailScreen</Text>

            <View>
                {/*@ts-ignore*/}
                <Text>{paramAbc?.id}</Text>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
    },

});
export default CategoryDetailScreen;