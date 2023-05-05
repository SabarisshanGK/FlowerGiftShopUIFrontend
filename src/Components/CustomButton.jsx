import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import colors from '../../assets/Theme/colors';

const CustomButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.pink,
    paddingVertical: 14,
    width: 250,
    elevation: 8,
    borderRadius: 23,
  },
  text: {
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
  },
});
