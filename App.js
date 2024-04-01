import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Apps/Screens/LoginScreen';
import { ClerkProvider } from '@clerk/clerk-expo';
export default function App() {
  return (
    <ClerkProvider publishableKey='pk_test_YWRhcHRlZC1jYXJkaW5hbC0zNy5jbGVyay5hY2NvdW50cy5kZXYk'>
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
