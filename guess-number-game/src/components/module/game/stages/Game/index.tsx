import { FlatList, StyleSheet, Text, View } from 'react-native';
import InputSection from '../../InputSection';
import { ISettingsState } from '../../../../context/Settings';
import { FunctionComponent } from 'react';

interface IGameStage {
    settingsState: ISettingsState;
    guessedList: string[];
    guessedNumber: string;
    onChangeGuessedNumber: (nextValue: string) => void;
}

const GameStage: FunctionComponent<IGameStage> = ({ settingsState, guessedNumber, guessedList, onChangeGuessedNumber }) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapperActions}>
                <InputSection
                    value={guessedNumber}
                    maxLength={String(settingsState.maxValue)?.length}
                    onChange={onChangeGuessedNumber}
                />
            </View>
            <FlatList
                style={styles.wrapperList}
                data={guessedList}
                keyExtractor={(item, key) => item}
                ListEmptyComponent={() => <View style={styles.wrapperEmptyList}>
                    <Text style={styles.emptyListText}>Already doesn't entered any numbers</Text>
                </View>}
                renderItem={({ item }) => (
                    <View style={styles.wrapperItem}>
                        <Text style={styles.headline}>{item}</Text>
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
        flex: .25,
        justifyContent: 'center',
    },
    wrapperList: {
        flex: 5,
    },
    wrapperEmptyList: {
        paddingTop: 24,
    },
    emptyListText: {
        textAlign: 'center',
        fontSize: 24,
        color: '#fff',
        marginTop: 30,
    },
    wrapperItem: {},
    headline: {},
});

export default GameStage;
