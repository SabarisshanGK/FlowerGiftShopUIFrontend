import { StyleSheet, Text, View, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import colors from '../../../assets/Theme/colors';

const AnimatedText = ({ name, font, valueTo, color, fontsize }) => {
  const appearFromLeft = useRef(new Animated.Value(-200)).current;

  useEffect(() => {
    Animated.timing(appearFromLeft, {
      toValue: valueTo,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <View>
      <Animated.View style={{ transform: [{ translateX: appearFromLeft }] }}>
        <Text style={{ fontFamily: font, fontSize: fontsize, color: color }}>
          {name}
        </Text>
      </Animated.View>
    </View>
  );
};

export default AnimatedText;

const styles = StyleSheet.create({});
