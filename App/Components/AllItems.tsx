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
    ScrollView
} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import SCREEN from "../navigators/RouteKey";

const AllItems = () => {


    const [categories, setCategories] = useState([]);
    const callAPI = async () => {
        try {

            const response = await
                fetch('http://192.168.56.1:3000/api/categories')
            const json = await response.json();
            setCategories(json)
        } catch (err) {
            console.log('lõi category ', err)
        }
    };
    console.log(categories)


    useEffect(() => {
        callAPI();
    }, [])


    const navigation = useNavigation();
    const abc = () => {
        console.log('anh Thai')
        // @ts-ignore
        navigation.navigate(SCREEN.CATEGORY_SCREEN)
    }

    const Item = (item: any) => (
        <View style={styles.item}>
            <Image style={styles.img} source={{uri: item.avatarCategory}}/>
            <Text style={styles.img2}> {item.nameCategory} </Text>


        </View>
    );

    return (
        <View>
            <View style={styles.container1}>
                <View>
                    <Text style={styles.titleText}>Tất cả chuyên mục</Text>
                    <Text style={styles.lowText}>(88 chuyên mục)</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={abc}>
                    <Text style={styles.btText}>Xem tất cả</Text>

                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                directionalLockEnabled={true}
                alwaysBounceVertical={false} >
                <FlatList style={styles.Flist}
                    // horizontal={true}
                    data={categories}
                    renderItem={({item}) => Item(item)}
                    showsHorizontalScrollIndicator={false}
                          numColumns={3}
                />
            </ScrollView>


        </View>

    );
}
const styles = StyleSheet.create({
    container1: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 10
    },
    Flist: {
        flexWrap:'wrap',
        height: 236,

    },
    button: {
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: '#1852c7',
        paddingHorizontal: 15,
        height: 30,
        alignSelf: 'center'
    },
    btText: {
        color: 'white',
        paddingTop: 5
    },
    titleText: {
        color: 'black',
        fontSize: 18
    },
    lowText: {
        color: 'black',
        fontSize: 14,
        marginLeft: 20
    },
    item: {

        margin: 10,
        padding: 8,
        backgroundColor: '#edf1f6',
        flexDirection: "row",
        alignItems: 'center',
        shadowColor: 'blue',
        
        elevation: 5,
    },
    img: {
        width: 45,
        height: 45
    }
})
export default AllItems;