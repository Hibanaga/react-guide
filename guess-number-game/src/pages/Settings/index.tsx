import { Button, Pressable, SafeAreaView, View } from 'react-native';

const SettingsScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Button title={'Go Back'} onPress={() => navigation.goBack()} />
        </SafeAreaView>
    );
}

export default SettingsScreen;
