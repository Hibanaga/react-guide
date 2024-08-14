import { SetStateAction, useContext, useState } from 'react';
import {
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import images from '../../theme/images';

import { AppContext, ISettingsState } from '../../components/context/Settings';

import Counter from '../../components/layout/Counter';

const SettingsScreen = ({ navigation }) => {
    const { settingsState, setSettingsState } = useContext(AppContext);

    const [tempoprarySettings, setTemporarySettings] = useState<ISettingsState | SetStateAction<ISettingsState>>(settingsState);

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.wrapper}>
                <View style={styles.wrapperActions}>
                    <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.goBack()}>
                        <Image source={images.icons.back} resizeMode={'contain'} style={styles.settingsIcon}  />
                    </TouchableOpacity>

                    <Text style={styles.headline}>Settings</Text>
                </View>
                <View style={styles.wrapperSettings}>
                    <Counter label={'Select min Value'} value={tempoprarySettings.minValue} onChangeValue={(newValue => setTemporarySettings({ ...settingsState, minValue: newValue }))} />
                    <Counter label={'Select max Value'} value={tempoprarySettings.maxValue} onChangeValue={(newValue => setTemporarySettings({ ...settingsState, maxValue: newValue }))} />

                    <TouchableOpacity style={styles.submit} onPress={() => setSettingsState(tempoprarySettings as ISettingsState)}>
                        <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>
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
        marginBottom: 36,
    },
    wrapperSettings: {
        flex: 5,
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
    },
    submit: {
        marginHorizontal: 'auto',
        backgroundColor: '#fff',
        width: '100%',
        paddingVertical: 8,
        borderRadius: 6,
        marginTop: 26,
    },
    submitText: {
        textTransform: 'uppercase',
        fontSize: 20,
        textAlign: 'center',
    }
})

export default SettingsScreen;
