import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';

function SplashSreen() {
    return (
        <View>
            <View
                style={{
                    marginTop: '50%',
                    width: '100%',
                    height: 150,
                    justifyContent: 'center',
                }}>
                <AnimatedLottieView
                    source={require('./../../assets/lotties/loading_lottie.json')}
                    autoPlay
                    loop={false}
                />
            </View>
            <View>
                <Animatable.Text animation="bounce" style={style.splashtitle}>Task Master</Animatable.Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    splashtitle:{
        justifyContent: 'center',
        fontSize:25,
        marginTop:50,
        color:"black",
        fontFamily:"Nunito-Regular",
        alignContent:"center",
        textAlign:"center"
    }
})

export default SplashSreen;