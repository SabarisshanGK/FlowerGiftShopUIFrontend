import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import colors from '../../assets/Theme/colors';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import CustomTextInput from '../Components/CustomTextInput/CustomTextInput';
import CustomButton from '../Components/CustomButton';

const ResetPasswordScreen = () => {
  const navigation = useNavigation();
  const [fonts] = useFonts({
    Inter: require('../../assets/fonts/Inter-Regular.ttf'),
    InterLight: require('../../assets/fonts/Inter-Light.ttf'),
  });
  if (!fonts) {
    return null;
  }
  return (
    <View style={styles.conatiner}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo
          name="chevron-left"
          size={44}
          color="black"
          style={{ marginTop: 50 }}
        />
      </TouchableOpacity>
      <Text style={styles.resetText}>Reset Password</Text>
      <Text style={styles.resetPara}>
        Enter the email associated with your account and we will send you an
        email to reset your password.
      </Text>
      <View style={{ marginTop: 15, marginBottom: 15 }}>
        <CustomTextInput text="Email" />
      </View>
      <View style={{ alignItems: 'center' }}>
        <CustomButton
          text="Send Password"
          onPress={() => navigation.navigate('CheckEmail')}
        />
      </View>
    </View>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    padding: 20,
  },
  resetText: {
    fontSize: 20,
    fontFamily: 'Inter',
    marginTop: 15,
    marginHorizontal: 15,
  },
  resetPara: {
    fontFamily: 'InterLight',
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 15,
    lineHeight: 22,
  },
});
