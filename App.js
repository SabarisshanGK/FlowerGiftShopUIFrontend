import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import OnBoardSCreen from './src/screens/OnBoardSCreen';
import CreateAccontScreen from './src/screens/CreateAccontScreen';
import LoginScreen from './src/screens/LoginScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import CheckEmailScreen from './src/screens/CheckEmailScreen';
import UpdatePasswordScreen from './src/screens/UpdatePasswordScreen';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Onboard" component={OnBoardSCreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccontScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="CheckEmail" component={CheckEmailScreen} />
        <Stack.Screen name="UpdatePassword" component={UpdatePasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
