import { Alert, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FunctionComponent, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { ISettingsState } from '../../../../context/Settings';
import images from '../../../../../theme/images';
import { Routes } from '../../../../../types/routes';

interface IPreparationStage {
    settingsState: ISettingsState;
    onSetSearchElement: (newValue: string) => void;
}

const PreparationStage: FunctionComponent<IPreparationStage> = ({ settingsState, onSetSearchElement }) => {
    const navigation = useNavigation();

    const [quessedNumber, setGuessedNumber] = useState('0');

    const handleChange = (newValue: string) => {
        const regex = /^(?=.*\d).+$/;

        if (regex.test(newValue || String(0))) {
            const nextValue = !newValue.length ? String(0) : String(parseInt(newValue.toString()));
            setGuessedNumber(nextValue);
        }
    }

    const onSubmit = () => {
        if (quessedNumber >= settingsState.maxValue || quessedNumber <= settingsState.minValue) {
            const alertTitle = quessedNumber <= settingsState.maxValue
                ? 'Number cannot be lower or equal than minValue'
                : 'Number cannot be higher or equal than maxValue';

            return Alert.alert(alertTitle, '', [
                {
                    text: 'Try again',
                    onPress: () => {}
                },
                {
                    text: 'Change limit',
                    onPress: () => navigation.navigate(Routes.Settings),
                }
            ]);
        }

        onSetSearchElement(quessedNumber);
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.goBackButton} onPress={() => navigation.navigate(Routes.Home)}>
                <Image source={images.icons.back} width={24} height={24} resizeMode={'cover'} />
            </Pressable>

            <View style={styles.wrapperInfo}>
                <Text style={styles.headline}>Enter a Number:</Text>
                <Text style={styles.description}>Must be between ({settingsState.minValue} - {settingsState.maxValue})</Text>
            </View>
            <View style={styles.wrapper}>
                <TextInput inputMode={'numeric'} style={styles.input} value={quessedNumber} onChangeText={handleChange} />
                <TouchableOpacity style={styles.button} onPress={onSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    goBackButton: {
        position: 'absolute',
        top: '5%',
        left: '5%',
        backgroundColor: '#fff',
        padding: 6,
        paddingHorizontal: 32,
        borderRadius: 6,
    },
    headline: {
        fontSize: 36,
        textAlign: 'center',
        color: '#fff',
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        color: '#fde7e7',
    },
    wrapperInfo: {
        marginBottom: 24,
    },
    wrapper: {
        marginTop: 12,
        width: '75%',
    },
    input: {
        textAlign: 'center',
        fontSize: 20,
        padding: 12,
        paddingHorizontal: 24,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 6,
    },
    button: {
        marginTop: 12,
        padding: 12,
        paddingHorizontal: 24,
        borderRadius: 6,
        backgroundColor: '#120437',
    },
    buttonText: {
        fontSize: 20,
        textTransform: 'uppercase',
        textAlign: 'center',
        color: '#fff'
    },
});

export default PreparationStage;
