import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { useNavigation } from '@react-navigation/native';
import { addToWishList } from '../../../assets/Redux/Actions/WishListAction';

const RecentlyViewedCard = ({ isWishList, onWishList, setIsWishList }) => {
  const recentlyViewed = useSelector((state) => state.recent);
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <>
      {recentlyViewed.length > 0 ? (
        <FlatList
          data={recentlyViewed}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          renderItem={({ item }) => {
            return (
              <ProductCard
                item={item}
                onPress={() => {
                  navigation.navigate('ProductScreen', { Product: item });
                }}
                //isWishList={wishlist.includes(item)}
                onWishList={() => {
                  dispatch(addToWishList(item));
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
              source={require('../../../assets/animations/27258-edr-search-with-no-result.json')}
              autoPlay
              loop
            />
          </View>
          <Text style={{ fontFamily: 'Inter', fontSize: 20 }}>
            No Products Recently Viewed
          </Text>
        </View>
      )}
    </>
  );
};

export default RecentlyViewedCard;

const styles = StyleSheet.create({});
