import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../../assets/Theme/colors';
import CategoryHeader from '../Components/CategoryHeaderComponent/CategoryHeader';
import { useNavigation } from '@react-navigation/native';
import Products from '../../assets/Datas/Products';
import ProductCard from '../Components/ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { addToRecentlyViewed } from '../../assets/Redux/Actions/RecentlyViewedAction';
import { addToWishList } from '../../assets/Redux/Actions/WishListAction';

const FlowerCategoryScreen = () => {
  const navigation = useNavigation();
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      {/* Category Header */}
      <View>
        <CategoryHeader title="Flowers" />
      </View>

      {/* Products of Category Flowers */}
      <View>
        <FlatList
          data={Products}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <>
                {item.category === 'Flowers' ? (
                  <ProductCard
                    item={item}
                    onPress={() => {
                      dispatch(addToRecentlyViewed(item));
                      navigation.navigate('ProductScreen', { Product: item });
                    }}
                    //isWishList={wishlist.includes(item)}
                    onWishList={() => dispatch(addToWishList(item))}
                  />
                ) : null}
              </>
            );
          }}
        />
      </View>
    </View>
  );
};

export default FlowerCategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    padding: 20,
  },
});
