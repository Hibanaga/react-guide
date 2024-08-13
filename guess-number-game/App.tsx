import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from './src/types/routes';

import Home from './src/pages/Home';
import Game from './src/pages/Game';
import Settings from './src/pages/Settings';
import { AppContextProvider } from './src/components/context/Settings';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppContextProvider>
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={Routes.Home}
            >
                <Stack.Screen name={Routes.Home} component={Home} options={{ headerShown: false }} />
                <Stack.Screen name={Routes.Settings} component={Settings} options={{ headerShown: false }} />
                <Stack.Screen name={Routes.Game} component={Game} />
            </Stack.Navigator>
        </NavigationContainer>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
