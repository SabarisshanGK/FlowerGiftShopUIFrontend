import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import colors from '../../assets/Theme/colors';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import Lottie from 'lottie-react-native';
import CustomButton from '../Components/CustomButton';

const CheckEmailScreen = () => {
  const navigation = useNavigation();
  const [fonts] = useFonts({
    Inter: require('../../assets/fonts/Inter-Regular.ttf'),
    InterLight: require('../../assets/fonts/Inter-Light.ttf'),
  });
  if (!fonts) {
    return null;
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo
          name="chevron-left"
          size={44}
          color="black"
          style={{ marginTop: 50 }}
        />
      </TouchableOpacity>
      <View style={styles.animationContainer}>
        <Lottie
          source={require('../../assets/animations/92867-email-sent.json')}
          autoPlay
          loop
        />
      </View>
      <Text style={styles.checkText}>Check your Email</Text>
      <Text style={styles.Text1}>
        We have sent a password reset link to your email
      </Text>
      <View style={{ alignItems: 'center' }}>
        <CustomButton
          text="Open Email App"
          onPress={() => navigation.navigate('UpdatePassword')}
        />
      </View>
      <Text style={styles.Text2}>
        Didn't get an Email? check spam folder, or
      </Text>
      <Text style={[styles.Text2, { color: colors.pink }]}>try again</Text>
    </View>
  );
};

export default CheckEmailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    padding: 20,
  },
  animationContainer: {
    height: 110,
    width: 110,
    borderRadius: 40,
    backgroundColor: colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  checkText: {
    marginTop: 35,
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 22,
    letterSpacing: 1,
  },
  Text1: {
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'InterLight',
    marginBottom: 30,
  },
  Text2: {
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'InterLight',
  },
});
