import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';

import images from '../../theme/images';

const GameScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={images.backgroundImages.game}
                style={styles.backgroundImage}
                resizeMode={'cover'}
            >
                <SafeAreaView style={styles.wrapper}>

                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        marginHorizontal: 16,
    },
    backgroundImage: {
        flex: 1,
    },
})

export default GameScreen;
