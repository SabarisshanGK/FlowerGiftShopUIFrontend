import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import colors from '../../../assets/Theme/colors';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useSelector } from 'react-redux';
import { SharedElement } from 'react-navigation-shared-element';

const ProductCard = ({ onPress, onWishList, item, isWishList }) => {
  const wishlist = useSelector((state) => state.wishlist);
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
      <SharedElement id={item.image}>
        <Image source={item.image} style={styles.Image} resizeMode="cover" />
      </SharedElement>
      {/* price Section */}
      <View style={styles.PriceContainer}>
        <View>
          <SharedElement id={item.productName}>
            <Text style={styles.productName}>{item.productName}</Text>
          </SharedElement>
          <SharedElement id={item.price}>
            <Text style={styles.price}>₹ {item.price}</Text>
          </SharedElement>
        </View>
        <TouchableOpacity onPress={onWishList}>
          <AntDesign
            name={wishlist.includes(item) ? 'heart' : 'hearto'}
            size={24}
            color={colors.pink}
          />
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
    width: 100,
  },
  price: {
    marginTop: 5,
    marginLeft: 8,
    fontFamily: 'InterLight',
  },
});
