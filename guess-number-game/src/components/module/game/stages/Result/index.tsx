import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import images from '../../../../../theme/images';
import { FunctionComponent } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../../../../types/routes';

interface IResultStage {
    numberOfTries: number;
    onSubmit: () => void;
}

const ResultStage: FunctionComponent<IResultStage> = ({ numberOfTries, onSubmit }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={images.icons.sun} width={256} height={256} style={styles.image} />
           <View style={styles.congratsWrapper}>
               <Text style={styles.congratsHeadline}>Congratulations!!!</Text>
               <Text style={styles.congratsDescription}>Number Of Tries: {numberOfTries}</Text>
           </View>

            <View style={styles.wrapperActions}>
                <TouchableOpacity style={styles.button} onPress={onSubmit}>
                    <Text style={styles.buttonText}>
                        Try Again
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(Routes.Home)}>
                    <Text style={styles.buttonText}>Go to Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    image: {
    },
    congratsWrapper: {
        marginTop: 56,
        marginBottom: 36,
        marginHorizontal: 'auto'
    },
    congratsHeadline: {
        fontSize: 36,
        color: '#fff',
        fontWeight: 'bold',
        paddingBottom: 4,
    },
    congratsDescription: {
        textAlign: 'center',
        fontSize: 20,
        color: "#fff",
        fontWeight: 'bold'
    },
    wrapperActions: {
        width: '100%',
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        marginBottom: 16,
        borderRadius: 6,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
});

export default ResultStage;
