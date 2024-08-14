import { FlatList, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import images from '../../theme/images';
import InputSection from '../../components/module/game/InputSection';

import { useContext, useState } from 'react';

import { AppContext, ISettingsState } from '../../components/context/Settings';

import PreparationStage from '../../components/module/game/stages/Preparation';
import GameStage from '../../components/module/game/stages/Game';
import ResultStage from '../../components/module/game/stages/Result';

enum GameStages {
    Preparation = 'preparation',
    Game = 'game',
    Result = 'result',
}

const GameScreen = ({ navigation }) => {
    const { settingsState, setSettingsState } = useContext(AppContext);

    const [activeState, setActiveStage] = useState<GameStages>(GameStages.Preparation);
    const [guessedList, setGuessedList] = useState([]);
    const [guessedNumber, setGuessedNumber] = useState('');
    const [searchNumber, setSearchNumber] = useState('');

    return (
        <View style={styles.container}>
            <ImageBackground
                source={images.backgroundImages.game}
                style={styles.backgroundImage}
                resizeMode={'cover'}
            >
                <SafeAreaView style={styles.wrapper}>
                    {activeState === GameStages.Preparation && (
                        <PreparationStage
                            searchElement={searchNumber}
                        />
                    )}
                    {activeState === GameStages.Game && (
                        <GameStage
                            settingsState={settingsState}
                            guessedList={guessedList}
                            guessedNumber={guessedNumber}
                            onChangeGuessedNumber={nextValue => setGuessedNumber(nextValue)}
                        />
                    )}
                    {activeState === GameStages.Result && <ResultStage />}
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        marginHorizontal: 16,
    },
    backgroundImage: {
        flex: 1,
    },
})

export default GameScreen;
