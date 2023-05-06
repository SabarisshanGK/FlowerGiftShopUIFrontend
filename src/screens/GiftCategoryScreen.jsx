import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../../assets/Theme/colors';
import CategoryHeader from '../Components/CategoryHeaderComponent/CategoryHeader';
import { useNavigation } from '@react-navigation/native';
import Products from '../../assets/Datas/Products';
import ProductCard from '../Components/ProductCard/ProductCard';
import { useDispatch } from 'react-redux';
import { addToRecentlyViewed } from '../../assets/Redux/Actions/RecentlyViewedAction';

const GiftCategoryScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      {/* Category Header */}
      <View>
        <CategoryHeader title="Gifts" />
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
                {item.category === 'Gifts' ? (
                  <ProductCard
                    item={item}
                    onPress={() => {
                      dispatch(addToRecentlyViewed(item));
                      navigation.navigate('ProductScreen', { Product: item });
                    }}
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

export default GiftCategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    padding: 20,
  },
});
