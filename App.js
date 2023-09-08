import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import {homeScreen} from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import Register from './pages/Register';

export default function App() {
  useFonts({
    'berkshire': require('./assets/fonts/berkshire.ttf')
  })
  return (
    <View style={styles.container}>
      <Register />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26394D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
