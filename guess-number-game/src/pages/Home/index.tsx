import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Pressable,
    Image,
    StatusBar
} from 'react-native';
import { Routes } from '../../types/routes';

import images from '../../theme/images';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={images.backgroundImages.home}
                style={styles.backgroundImage}
                resizeMode={'cover'}
            >
                <View style={styles.wrapper}>
                    <View style={styles.wrapperActions}>
                        <Pressable style={styles.settingsButton} onPress={() => navigation.navigate(Routes.Settings)}>
                            <Text style={styles.settingsText}>Settings</Text>
                            <Image source={images.icons.settings} resizeMode={'contain'} style={styles.settingsIcon} />
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>

            <StatusBar barStyle="light-content" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    backgroundImage: {
        flex: 1,
        paddingVertical: 56
    },
    wrapperActions: {
        alignItems: 'flex-end'
    },
    settingsButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: "#fff",
        backgroundColor: '#fff',
    },
    settingsText: {
        paddingRight: 8,
        fontSize: 16,
    },
    settingsIcon: {
        height: 20,
        width: 20,
    },
})

export default HomeScreen;
