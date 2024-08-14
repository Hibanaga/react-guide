import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FunctionComponent } from 'react';
import images from '../../../theme/images';

interface ICounter {
    label?: string;
    value?: number;
    onChangeValue?: (newValue: number) => void;
}

const Counter: FunctionComponent<ICounter> = ({
    label,
    value,
    onChangeValue
}) => {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}

            <View style={styles.wrapperActions}>
                <TouchableOpacity disabled={value <= 0} style={styles.button} onPress={() => onChangeValue && onChangeValue(value - 1)}>
                    <Image style={styles.image} source={images.icons.minus} resizeMode={'cover'} />
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    inputMode={'numeric'}
                    maxLength={4}
                    value={value?.toString()}
                    onChangeText={(nextValue) => {
                        if (!onChangeValue) return;

                        const newValue = nextValue ? parseInt(nextValue) : 0;
                        onChangeValue(newValue);
                    }}
                />
                <TouchableOpacity style={styles.button} onPress={() => onChangeValue && onChangeValue(value + 1)}>
                    <Image style={styles.image} source={images.icons.plus} resizeMode={'cover'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    label: {
        fontSize: 20,
    },
    wrapperActions: {
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-between',
        backgroundColor: "#fff",
        borderRadius: 8,
    },
    button: {
        padding: 6,
    },
    input: {
        backgroundColor: "#fff",
        fontSize: 20,
    },
    image: {
        width: 30,
        height: 30,
    },
});

export default Counter;
