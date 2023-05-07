import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../../assets/Theme/colors';
import CustomTextInput from '../Components/CustomTextInput/CustomTextInput';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const WishListScreen = () => {
  const navigation = useNavigation();
  const [fonts] = useFonts({
    AlluraRegular: require('../../assets/fonts/Allura-Regular.ttf'),
    Inter: require('../../assets/fonts/Inter-Regular.ttf'),
    InterLight: require('../../assets/fonts/Inter-Medium.ttf'),
    InterSemi: require('../../assets/fonts/Inter-SemiBold.ttf'),
    Pacifico: require('../../assets/fonts/Pacifico-Regular.ttf'),
  });
  if (!fonts) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 30 }}>
        <CustomTextInput text="Search" />
      </View>
      <Text style={{ marginLeft: 10, fontSize: 20, fontFamily: 'Inter' }}>
        My Wish List
      </Text>
    </View>
  );
};

export default WishListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    padding: 20,
  },
});
