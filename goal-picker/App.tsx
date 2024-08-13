import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Pressable, TextInput, Image, FlatList, Alert } from 'react-native';
import { useState } from 'react';

import AddGoalModal from './src/components/AddGoalModal';

interface IGoalList {
    id: string;
    name: string;
}

export default function App() {
    const [inputValue, setInputValue] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [goalList, setGoalList] = useState<IGoalList[]>([]);

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.headline}>Goal Picker</Text>
            <Pressable
              style={styles.button}
              onPress={() => setIsModalVisible(!isModalVisible)}
            >
            <Text style={styles.buttonText}>Add Goal</Text>
        </Pressable>
        <FlatList
            data={goalList}
            style={styles.goalsList}
            keyExtractor={(item => item.id)}
            scrollEnabled={!!goalList?.length}
            ListEmptyComponent={<View style={styles.emptyListWrapper}>
                <Image
                    style={styles.emptyListIcon}
                    source={{
                        uri: 'https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png',
                    }}
                />
            </View>}
            renderItem={({ item }) => (
                <View style={styles.goalsItem} onTouchEnd={() => {
                    Alert.alert(
                        "Are u sure you wan't delete from list",
                        `You delete goal "${item.name}" from your list of goals`,
                        [
                            {
                                text: 'Cancel',
                                onPress: () => {}
                            },
                            {
                                text: "OK",
                                onPress: () => setGoalList(goalList.filter(({ id }) => id !== item.id))
                            }
                        ]
                    )
                }}>
                    <Text style={styles.goalsItemName}>{item.id}.</Text>
                    <Text style={{ ...styles.goalsItemName, paddingLeft: 16, }}>{item.name}</Text>
                </View>
            )}
        />

        <AddGoalModal isVisible={isModalVisible} onToggle={() => setIsModalVisible(!isModalVisible)}>
            <View style={styles.addGoalWrapper}>
                <Image
                    style={styles.addGoalIcon}
                    source={{
                       uri: 'https://cdn.buttercms.com/S6sfpy7OT3yBokvhGo09',
                    }}
                />
                <TextInput
                    value={inputValue}
                    onChangeText={(nextValue) => setInputValue(nextValue)}
                    style={styles.addGoalInput}
                    placeholder={'Please enter text...'}
                    placeholderTextColor={'#f2f2f2'}
                />
                <View style={styles.addGoalActionsWrapper}>
                    <Pressable style={{ ...styles.addGoalAction, backgroundColor: '#f31281' }} onPress={() => setIsModalVisible(!isModalVisible)}>
                        <Text style={styles.addGoalButtonText}>Cancel</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setGoalList((prevState) => ([
                                ...prevState,
                                { id: goalList[goalList?.length - 1]?.id + 1 || 0, name: inputValue } as IGoalList
                            ]));
                            setInputValue('');
                            setIsModalVisible(!isModalVisible);
                        }}
                        style={{ ...styles.addGoalAction, backgroundColor: '#5e0bcd' }}
                    >
                        <Text style={styles.addGoalButtonText}>Add</Text>
                    </Pressable>
                </View>
            </View>
        </AddGoalModal>

        <StatusBar
            style="light"
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#120437',
        alignItems: 'center',
        justifyContent: 'flex-start',
  },
  headline: {
        fontSize: 26,
        marginVertical: 24,
        color: "#fff",
  },
  button: {
        backgroundColor: '#3c09cc',
        borderRadius: 12,
        width: '80%',
  },
  buttonText: {
        paddingHorizontal: 48,
        paddingVertical: 16,
        fontSize: 16,
        color: "#fff",
        textAlign: 'center'
  },
    emptyListWrapper: {

    },
    emptyListIcon: {
        height: 250,
        resizeMode: 'contain',
    },
    goalsList: {
        width: '80%',
        marginVertical: 48,
    },
    goalsItem: {
        backgroundColor: '#3c09cc',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 12,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    goalsItemName: {
        color: '#fff',
        textAlign: 'center'
    },
    addGoalWrapper: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 32,
    },
    addGoalIcon: {
        width: '75%',
        height: '20%',
        resizeMode: 'contain',
        marginBottom: 32,
    },
    addGoalInput: {
        backgroundColor: '#e4cfff',
        width: '80%',
        fontSize: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginBottom: 24,
        borderRadius: 12,
    },
    addGoalActionsWrapper: {
        flexDirection: 'row',
        gap: 16,
    },
    addGoalAction: {
        width: '30%',
        backgroundColor: '#3c09cc',
        paddingVertical: 12,
        borderRadius: 12,
    },
    addGoalButtonText: {
        color: '#fff',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 16,
    }
});
