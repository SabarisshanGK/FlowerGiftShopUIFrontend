import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../../screens/WelcomeScreen';
import OnBoardSCreen from '../../screens/OnBoardSCreen';
import CreateAccontScreen from '../../screens/CreateAccontScreen';
import LoginScreen from '../../screens/LoginScreen';
import ResetPasswordScreen from '../../screens/ResetPasswordScreen';
import CheckEmailScreen from '../../screens/CheckEmailScreen';
import UpdatePasswordScreen from '../../screens/UpdatePasswordScreen';
import HomeScreen from '../../screens/HomeScreen';
import BottomTabs from '../BottomTabNavigation/BottomTabs';

const STackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
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

      <Stack.Screen name="Tabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default STackNavigator;
