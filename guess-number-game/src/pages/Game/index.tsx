import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';

import images from '../../theme/images';

import { useContext, useState } from 'react';

import { AppContext } from '../../components/context/Settings';

import PreparationStage from '../../components/module/game/stages/Preparation';
import GameStage from '../../components/module/game/stages/Game';
import ResultStage from '../../components/module/game/stages/Result';

enum GameStages {
    Preparation = 'preparation',
    Game = 'game',
    Result = 'result',
}

const GameScreen = ({ navigation }) => {
    const { settingsState } = useContext(AppContext);

    const [activeState, setActiveStage] = useState<GameStages>(GameStages.Preparation);
    const [searchNumber, setSearchNumber] = useState<number>(settingsState.minValue);
    const [numberOfTries, setNumberOfTries] = useState(0);

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
                            navigation={navigation}
                            searchElement={searchNumber}
                            settingsState={settingsState}
                            onSetSearchElement={(newValue) => {
                                setSearchNumber(parseInt(newValue));
                                setActiveStage(GameStages.Game);
                            }}
                        />
                    )}
                    {activeState === GameStages.Game && (
                        <GameStage
                            searchElement={searchNumber}
                            settingsState={settingsState}
                            numberOfTries={numberOfTries}
                            onSuccessAction={(numberOfTries) => {
                                setNumberOfTries(numberOfTries);
                                setActiveStage(GameStages.Result);
                            }}
                        />
                    )}
                    {activeState === GameStages.Result && (
                        <ResultStage
                            numberOfTries={numberOfTries}
                            onSubmit={() => {
                                setActiveStage(GameStages.Preparation);
                                setSearchNumber(settingsState.minValue);
                                setNumberOfTries(0);
                            }}
                        />
                    )}
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
