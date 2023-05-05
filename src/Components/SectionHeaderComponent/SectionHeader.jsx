import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import colors from '../../../assets/Theme/colors';

const SectionHeader = ({ title }) => {
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
    <View style={styles.Offers}>
      <Text style={styles.Text1}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.Text2}>View all</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  Offers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  Text1: {
    fontSize: 20,
    fontFamily: 'Inter',
  },
  Text2: {
    color: colors.pink,
    fontFamily: 'InterLight',
  },
});
