import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import colors from '../../../assets/Theme/colors';

const CustomTextInput = ({ text }) => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View>
      {text === 'Password' ? (
        <View style={styles.inputPass}>
          <View style={styles.Password}>
            <TextInput
              placeholder={text}
              placeholderTextColor={colors.grey}
              secureTextEntry={showPassword}
              style={{ flex: 1 }}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? 'md-eye-off' : 'md-eye-outline'}
                size={24}
                color={colors.grey}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : text === 'Search' ? (
        <View style={styles.inputPass}>
          <View style={styles.Password}>
            <TextInput
              placeholder={text}
              placeholderTextColor={colors.grey}
              style={{ flex: 1 }}
            />
            <View>
              <Feather name="search" size={24} color={colors.grey} />
            </View>
          </View>
        </View>
      ) : (
        <TextInput
          placeholder={text}
          placeholderTextColor={colors.grey}
          style={styles.input}
        />
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.white,
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  inputPass: {
    backgroundColor: colors.white,
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 25,

    justifyContent: 'center',
  },
  Password: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
