import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import OnBoardSCreen from './src/screens/OnBoardSCreen';
import { Entypo } from '@expo/vector-icons';
import CreateAccontScreen from './src/screens/CreateAccontScreen';
import LoginScreen from './src/screens/LoginScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import CheckEmailScreen from './src/screens/CheckEmailScreen';
import UpdatePasswordScreen from './src/screens/UpdatePasswordScreen';
import HomeScreen from './src/screens/HomeScreen';
import BottomTabs from './src/Components/BottomTabNavigation/BottomTabs';
import STackNavigator from './src/Components/NavigationStack/STackNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WishListScreen from './src/screens/WishListScreen';
import colors from './assets/Theme/colors';
import { Provider } from 'react-redux';
import store from './assets/Redux/store';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <STackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
