import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from '../../screens/HomeScreen';
import colors from '../../../assets/Theme/colors';
import WishListScreen from '../../screens/WishListScreen';
import { NavigationContainer } from '@react-navigation/native';
import CartScreen from '../../screens/CartScreen';
import ProfilePageScreen from '../../screens/ProfilePageScreen';

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 75,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo
                name="home"
                size={24}
                color={focused ? colors.pink : colors.grey}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="WishList"
        component={WishListScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo
                name="heart"
                size={24}
                color={focused ? colors.pink : colors.grey}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo
                name="shopping-cart"
                size={24}
                color={focused ? colors.pink : colors.grey}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfilePageScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome
                name="user"
                size={24}
                color={focused ? colors.pink : colors.grey}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
