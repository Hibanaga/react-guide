import { useContext } from 'react';
import { Button, Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import images from '../../theme/images';

import { AppContext } from '../../components/context/Settings';

const SettingsScreen = ({ navigation }) => {
    const { settingsState, setSettingsState } = useContext(AppContext);

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.wrapper}>
                <View style={styles.wrapperActions}>
                    <Pressable style={styles.settingsButton} onPress={() => navigation.goBack()}>
                        <Image source={images.icons.back} resizeMode={'contain'} style={styles.settingsIcon}  />
                    </Pressable>

                    <Text style={styles.headline}>Settings</Text>
                </View>
                <View style={styles.wrapperSettings}>

                </View>
            </SafeAreaView>
            <StatusBar barStyle={'dark-content'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 56,
    },
    wrapper: {
        flex: 1,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    wrapperActions: {
        flex: 1,
        width: '100%',
        alignItems: 'flex-end',
    },
    wrapperSettings: {
        flex: 5,
        backgroundColor: 'blue',
    },
    settingsButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        paddingVertical: 6,
        paddingHorizontal: 32,
        borderWidth: 1,
        borderColor: "#fff",
        backgroundColor: '#fff',
    },
    settingsIcon: {
        height: 20,
        width: 20,
    },
    headline: {
        textAlign: 'center',
        fontSize: 32,
        width: '100%',
        marginTop: 'auto',
    }
})

export default SettingsScreen;
