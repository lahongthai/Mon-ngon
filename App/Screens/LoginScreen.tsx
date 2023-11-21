import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    
} from 'react-native';



const LoginScreen = () => {

    return (

        <ImageBackground
            source={{ uri: 'https://img.lovepik.com/background/20211101/medium/lovepik-abstract-background-mobile-phone-wallpaper-image_400624615.jpg' }}
            style={{ flex: 1,marginTop:StatusBar.currentHeight}}
        >
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        margin: 50,
        marginTop: 200,
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
    },
    textSubmit: {
        color: '#FF6600',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: '600',
    },
    btnSubmit: {
        backgroundColor: '#99CCFF',
        alignItems: 'center',
        padding: 10,
        width: '30%',
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },
});

export default LoginScreen;
