import { FlatList, StyleSheet, Text, View } from 'react-native';
import InputSection from '../../InputSection';
import { ISettingsState } from '../../../../context/Settings';
import { FunctionComponent, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

interface IGameStage {
    searchElement: string;
    settingsState: ISettingsState;
    onSuccessAction: (numberOfTries: number) => void;
}

const GameStage: FunctionComponent<IGameStage> = ({ settingsState, searchElement, onSuccessAction }) => {
    const [guessedList, setGuessedList] = useState([]);

    const getGuessedNumberText = (guessedNumber: string): string => {
        if (guessedNumber < searchElement) {
            return `Search Element higher than ${guessedNumber}`
        }

        if (guessedNumber > searchElement) {
            return `Search Element lower than ${guessedNumber}`
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapperActions}>
                <View style={styles.wrapperInfo}>
                    <Text style={styles.headlineInfo}>Enter a number</Text>
                    <Text style={styles.descriptionInfo}>({settingsState.minValue}-{settingsState.maxValue})</Text>
                </View>
                <InputSection
                    settingsState={settingsState}
                    onSubmit={newValue => {
                        setGuessedList([ newValue, ...guessedList ]);
                        if (searchElement == newValue) onSuccessAction(newValue);
                    }}
                />
            </View>
            <FlatList
                scrollEnabled={!!guessedList.length}
                style={styles.wrapperList}
                data={guessedList}
                keyExtractor={(item, key) => item}
                ListEmptyComponent={() => (
                    <View style={styles.wrapperEmptyList}>
                        <Text style={styles.emptyListText}>Already doesn't tried any guess</Text>
                    </View>
                )}
                renderItem={({ item }) => (
                    <View style={styles.wrapperItem}>
                        <Text style={styles.guessedText}>{getGuessedNumberText(item)}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapperActions: {
        flex: .325,
        justifyContent: 'center',
    },
    wrapperList: {
        flex: 5,
        width: '100%',
        marginHorizontal: 'auto',
        paddingVertical: 12,
    },
    wrapperInfo: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    headlineInfo: {
        color: '#fff',
        fontSize: 20,
    },
    descriptionInfo: {
        fontSize: 14,
        paddingLeft: 4,
        color: '#fff',
    },
    wrapperEmptyList: {
        paddingTop: 24,
        alignSelf: 'flex-start',
        justifyContent: 'flex-end',
        width: '100%',
    },
    emptyListText: {
        textAlign: 'center',
        fontSize: 24,
        color: '#fff',
        marginTop: 30,
    },
    wrapperItem: {
        backgroundColor: '#d746f6',
        marginBottom: 16,
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 6,
    },
    guessedText: {
        fontSize: 20,
        color: '#fff',
    },
});

export default GameStage;
