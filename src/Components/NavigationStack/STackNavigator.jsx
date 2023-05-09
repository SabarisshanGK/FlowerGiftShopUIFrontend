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
import FlowerCategoryScreen from '../../screens/FlowerCategoryScreen';
import GiftCategoryScreen from '../../screens/GiftCategoryScreen';
import VasesCategoryScreen from '../../screens/VasesCategoryScreen';
import ProductScreen from '../../screens/ProductScreen';
import OrderConfirmationScreen from '../../screens/OrderConfirmationScreen';
import CheckoutScreen from '../../screens/CheckoutScreen';
import TrackOrderScreen from '../../screens/TrackOrderScreen';

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
      <Stack.Screen name="CheckOut" component={CheckoutScreen} />
      <Stack.Screen name="TrackOrder" component={TrackOrderScreen} />
      <Stack.Screen
        name="OrderConfirmation"
        component={OrderConfirmationScreen}
      />
      <Stack.Screen
        name="FlowerCategoryScreen"
        component={FlowerCategoryScreen}
      />
      <Stack.Screen name="GiftCategoryScreen" component={GiftCategoryScreen} />
      <Stack.Screen
        name="VasesCategoryScreen"
        component={VasesCategoryScreen}
      />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="Tabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default STackNavigator;
