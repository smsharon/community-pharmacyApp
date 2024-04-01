import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Apps/Screens/LoginScreen';
import { ClerkProvider } from '@clerk/clerk-expo';
export default function App() {
  return (
    <ClerkProvider>
    <View className="flex-1  bg-white">
      <StatusBar style="auto" />
      <LoginScreen />
    </View>
    </ClerkProvider>
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
