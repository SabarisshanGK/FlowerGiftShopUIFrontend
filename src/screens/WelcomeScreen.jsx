import { StyleSheet, Text, View, Animated, StatusBar } from 'react-native';
import React, { useEffect, useRef } from 'react';
import colors from '../../assets/Theme/colors';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => navigation.navigate('Onboard'));
  }, []);

  const [fonts] = useFonts({
    AlluraRegular: require('../../assets/fonts/Allura-Regular.ttf'),
    Pacifico: require('../../assets/fonts/Pacifico-Regular.ttf'),
  });
  if (!fonts) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" hidden />
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.textStyle}>Flowery</Text>
      </Animated.View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 60,
    color: colors.black,
    fontWeight: '900',
    fontFamily: 'Pacifico',
  },
});
