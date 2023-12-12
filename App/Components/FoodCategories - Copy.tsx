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


const FoodCategories = () => {

    const [products, setProducts] = useState([]);
    const [listCategories, setListCategories] = useState([{
        id: 1,
        nameCategory: "",
        type: ''
    }]);
    const callListCategory = async () => {
        try {
            const response = await
                fetch(`http://192.168.56.1:3000/api/categories`)
            const data = await response.json();
            generateRandom(data)
        } catch (err) {
            console.log('lõi category ', err)
        }

    };
    // console.log('llll',JSON.stringify(listCategories,null,2))
    const generateRandom = async (data: any) => {
        data.sort(() => Math.random() - 0.5);
        console.log('rd',JSON.stringify(data,null,2))
        // const index = Math.floor(Math.random() *data.length)
        console.log('rdid',data[0].id)
            setListCategories(data);
    };

    useEffect(() => {
        if (listCategories.length > 0) {
            callAPI(listCategories[0]?.id);
        }
    }, [listCategories]);
    console.log('cat',JSON.stringify(listCategories,null,2))
    const callAPI = async (id: any) => {
        try {
            const response = await
                fetch(`http://192.168.56.1:3000/api/products?categoryId=${id}`)
            const json = await response.json();
            setProducts(json)
        } catch (err) {
            console.log('lõi categoryId ', err)
        }
        console.log('produc',JSON.stringify(products,null,2))
    };

    useEffect(() => {
        // callAPI();
        callListCategory();
    }, [])


    const navigation = useNavigation();
    const showFoodList = () => {
        // @ts-ignore
        navigation.navigate(SCREEN.CATEGORY_SCREEN, {paramAbc: 'item', paramXyz: 'categories'});
    }

    const Item = (item: any) => {
        return (
            <View style={styles.item}>
                <Image style={styles.img} source={{uri: item.imageProduct[0].urlImage}}/>
                <Text style={styles.txtTitle}> {item.nameProduct} </Text>
            </View>
        )
    };
    for (const [index,id,] of listCategories.entries()) {
        console.log('listCategories:  ', index, id)


        return (
            <View>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.titleText}>{listCategories[0]?.nameCategory}</Text>
                        <Text style={styles.lowText}>{`(${products.length} ${listCategories[0]?.type})`}</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={showFoodList}>
                        <Text style={styles.btText}>Xem tất cả</Text>

                    </TouchableOpacity>
                </View>
                <FlatList style={styles.Flist}
                          horizontal={true}
                          data={products}
                          renderItem={({item}) => Item(item)}
                          showsHorizontalScrollIndicator={false}
                />
            </View>
        );
    };
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 10
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
        alignSelf: 'center'
    },
    Flist: {
        // flexWrap: 'wrap',
        // height: 200,
        // display: 'flex',
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
        fontWeight: 'bold'
    }
})
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