import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FunctionComponent, useState } from 'react';
import { ISettingsState } from '../../../context/Settings';

interface IInputSection {
    settingsState: ISettingsState;
    onSubmit: (newValue: number) => void;
}

const InputSection: FunctionComponent<IInputSection> = ({ settingsState, onSubmit }) => {
    const maxLength = String(settingsState.maxValue)?.length;

    const [guessedNumber, setGuessedNumber] = useState(settingsState.minValue);

    const handleChange = (newValue: string) => {
        const numericValue = newValue.replace(/[^0-9]/g, '');

        if (numericValue.length <= maxLength) {
            const nextValue = numericValue.length > 0 ? String(parseInt(numericValue)) : '0';
            setGuessedNumber(parseInt(nextValue));
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                inputMode='numeric'
                maxLength={String(settingsState.maxValue)?.length}
                style={styles.input}
                value={String(guessedNumber)}
                onChangeText={handleChange}
            />
            <TouchableOpacity style={styles.button} onPress={() => {
                onSubmit(guessedNumber);
                setGuessedNumber(settingsState.minValue);
            }}>
                <Text style={styles.buttonText}>Guess</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        flex: 1,
        width: '50%',
        marginHorizontal: 'auto',
        backgroundColor: '#fff',
        borderRadius: 16,
    },
    input: {
        fontSize: 36,
        paddingHorizontal: 16,
        paddingVertical: 8,
        textAlign: 'center',
    },
    button: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 24,
    },
})

export default InputSection;
