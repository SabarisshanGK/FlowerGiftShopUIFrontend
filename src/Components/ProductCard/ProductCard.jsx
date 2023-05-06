import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import colors from '../../../assets/Theme/colors';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const ProductCard = ({ onPress, onWishList, item }) => {
  const [fonts] = useFonts({
    Pacifico: require('../../../assets/fonts/Pacifico-Regular.ttf'),
    Inter: require('../../../assets/fonts/Inter-Regular.ttf'),
    InterLight: require('../../../assets/fonts/Inter-Light.ttf'),
  });
  if (!fonts) {
    return null;
  }
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Image source={item.image} style={styles.Image} resizeMode="cover" />
      {/* price Section */}
      <View style={styles.PriceContainer}>
        <View>
          <Text style={styles.productName}>{item.productName}</Text>
          <Text style={styles.price}>₹ {item.price}</Text>
        </View>
        <TouchableOpacity onPress={onWishList}>
          <AntDesign name="hearto" size={24} color={colors.pink} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 15,
    marginLeft: 10,
    backgroundColor: colors.white,
    width: 150,
    borderRadius: 10,
    marginRight: 10,
  },
  Image: {
    width: 150,
    height: 175,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  PriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    alignItems: 'center',
    marginRight: 10,
  },
  productName: {
    marginTop: 5,
    marginLeft: 8,
    fontFamily: 'Pacifico',
  },
  price: {
    marginTop: 5,
    marginLeft: 8,
    fontFamily: 'InterLight',
  },
});
