
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import homepic from '../assets/home.jpg'



export function Home() {
    return (
        <View style={styles.home}>
            <ImageBackground source={homepic} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}> Hey there Welcome Back </Text>
            </ImageBackground>
        </View>

    )

}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        opacity: 2.0,

    },
    text: {
        color: "white",
        fontSize: 30,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0",
    },
    home: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
    }

});
