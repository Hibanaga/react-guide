import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

const PreparationStage = () => {
    const [quessedNumber, setGuessedNumber] = useState('0');

    const handleChange = (newValue: string) => {
        const regex = /^(?=.*\d).+$/;

        if (regex.test(newValue || String(0))) {
            const nextValue = !newValue.length ? String(0) : String(parseInt(newValue.toString()));
            setGuessedNumber(nextValue);
        }
    }
    return (
        <View style={styles.container}>
            <TextInput inputMode={'numeric'} style={styles.input} value={quessedNumber} onChangeText={handleChange} />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {},
    button: {},
    buttonText: {},
});

export default PreparationStage;
