import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FunctionComponent } from 'react';

interface IInputSection {
    value: string;
    maxLength?: number;
    onChange: (newValue: string) => void;
}

const InputSection: FunctionComponent<IInputSection> = ({ value, maxLength = 2, onChange }) => {
    const handleChange = (newValue: string) => {
        const regex = /^(?=.*\d).+$/;

        if (regex.test(newValue || String(0))) {
            const nextValue = !newValue.length ? String(0) : String(parseInt(newValue.toString()));
            onChange(nextValue);
        }
    }


    return (
        <View style={styles.container}>
            <TextInput inputMode='numeric' maxLength={maxLength} style={styles.input} value={value} onChangeText={handleChange} />
            <TouchableOpacity style={styles.button}>
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
