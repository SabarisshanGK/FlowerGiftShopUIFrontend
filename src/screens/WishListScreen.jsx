import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../../assets/Theme/colors';
import CustomTextInput from '../Components/CustomTextInput/CustomTextInput';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../Components/ProductCard/ProductCard';
import { removeFromWishList } from '../../assets/Redux/Actions/WishListAction';
import Lottie from 'lottie-react-native';

const WishListScreen = () => {
  const navigation = useNavigation();
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const [fonts] = useFonts({
    AlluraRegular: require('../../assets/fonts/Allura-Regular.ttf'),
    Inter: require('../../assets/fonts/Inter-Regular.ttf'),
    InterLight: require('../../assets/fonts/Inter-Medium.ttf'),
    InterSemi: require('../../assets/fonts/Inter-SemiBold.ttf'),
    Pacifico: require('../../assets/fonts/Pacifico-Regular.ttf'),
  });
  if (!fonts) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 30 }}>
        <CustomTextInput text="Search" />
      </View>
      <Text style={{ marginLeft: 10, fontSize: 20, fontFamily: 'Inter' }}>
        My Wish List
      </Text>
      {wishlist.length > 0 ? (
        <FlatList
          data={wishlist}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          scrollEventThrottle={16}
          renderItem={({ item }) => {
            return (
              <ProductCard
                item={item}
                isWishList={wishlist.includes(item)}
                onPress={() => {
                  navigation.navigate('ProductScreen', { Product: item });
                }}
                onWishList={() => {
                  dispatch(removeFromWishList(item));
                }}
              />
            );
          }}
        />
      ) : (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 20,
          }}
        >
          <View style={{ width: 200, height: 200, marginBottom: 10 }}>
            <Lottie
              source={require('../../assets/animations/90759-no-data-found.json')}
              autoPlay
              loop
            />
          </View>
          <Text style={{ fontFamily: 'Inter', fontSize: 20 }}>
            No Products added to wishlist
          </Text>
        </View>
      )}
    </View>
  );
};

export default WishListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    padding: 20,
  },
});
