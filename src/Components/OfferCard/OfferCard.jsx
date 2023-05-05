import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../../../assets/Theme/colors';
import { useFonts } from 'expo-font';

const OfferCard = ({ item }) => {
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
    <View style={styles.OfferCardContainer}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.TextContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        {item.id === 1 ? (
          <Image source={item.image} style={styles.img} resizeMode="contain" />
        ) : (
          <Image source={item.image} style={styles.img2} resizeMode="contain" />
        )}
      </View>
    </View>
  );
};

export default OfferCard;

const styles = StyleSheet.create({
  OfferCardContainer: {
    backgroundColor: colors.white,
    width: 250,
    marginTop: 15,
    marginLeft: 15,
    borderRadius: 10,
  },
  title: {
    fontFamily: 'Pacifico',
    color: colors.pink,
    fontSize: 16,
    marginLeft: 15,
    marginTop: 30,
  },
  description: {
    fontFamily: 'InterLight',
    marginLeft: 15,
    marginTop: 5,
  },
  TextContainer: {
    width: 150,
    marginBottom: 30,
  },
  img: {
    height: 80,
    width: 80,
    marginTop: 25,
    transform: [{ rotate: '45deg' }],
  },
  img2: {
    height: 80,
    width: 80,
    marginTop: 25,
  },
});
