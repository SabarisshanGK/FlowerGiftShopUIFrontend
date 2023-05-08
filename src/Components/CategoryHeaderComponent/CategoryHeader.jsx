import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const CategoryHeader = ({ title, onPress }) => {
  const navigation = useNavigation();
  const [fonts] = useFonts({
    AlluraRegular: require('../../../assets/fonts/Allura-Regular.ttf'),
    Inter: require('../../../assets/fonts/Inter-Regular.ttf'),
    InterLight: require('../../../assets/fonts/Inter-Medium.ttf'),
    Pacifico: require('../../../assets/fonts/Pacifico-Regular.ttf'),
  });
  if (!fonts) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={44} color="black" />
        </TouchableOpacity>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <FontAwesome5 name="sliders-h" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <FontAwesome5 name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoryHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 20,
    letterSpacing: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
});
