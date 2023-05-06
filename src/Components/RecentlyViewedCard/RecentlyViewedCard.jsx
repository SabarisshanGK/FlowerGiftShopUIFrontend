import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';

const RecentlyViewedCard = () => {
  const recentlyViewed = useSelector((state) => state.recent);

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
            return <ProductCard item={item} />;
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
