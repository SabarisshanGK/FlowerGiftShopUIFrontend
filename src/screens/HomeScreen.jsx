import {
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import colors from '../../assets/Theme/colors';
import HomeScreenModal from '../Components/HomeScreenModal/HomeScreenModal';
import CustomTextInput from '../Components/CustomTextInput/CustomTextInput';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import SectionHeader from '../Components/SectionHeaderComponent/SectionHeader';
import OfferCard from '../Components/OfferCard/OfferCard';
import offers from '../../assets/Datas/offers';
import ProductCard from '../Components/ProductCard/ProductCard';
import popularProducts from '../../assets/Datas/PopularProducts';
import { addToRecentlyViewed } from '../../assets/Redux/Actions/RecentlyViewedAction';
import RecentlyViewedCard from '../Components/RecentlyViewedCard/RecentlyViewedCard';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList } from '../../assets/Redux/Actions/WishListAction';

const HomeScreen = () => {
  const [isModal, setIsModal] = useState(true);

  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const navigation = useNavigation();
  const [fonts] = useFonts({
    AlluraRegular: require('../../assets/fonts/Allura-Regular.ttf'),
    Inter: require('../../assets/fonts/Inter-Regular.ttf'),
    InterLight: require('../../assets/fonts/Inter-Medium.ttf'),
    Pacifico: require('../../assets/fonts/Pacifico-Regular.ttf'),
  });
  if (!fonts) {
    return null;
  }

  return (
    <View style={[styles.container, { opacity: isModal ? 0.3 : 1 }]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModal}
        onRequestClose={() => setIsModal(!isModal)}
      >
        <HomeScreenModal modelVisible={isModal} setModelVisible={setIsModal} />
      </Modal>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <View style={styles.searchBar}>
          <CustomTextInput text="Search" />
        </View>
        <View style={styles.categoriesContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('FlowerCategoryScreen')}
          >
            <View style={styles.category}>
              <MaterialCommunityIcons
                name="flower-tulip-outline"
                size={44}
                color={colors.pink}
              />
            </View>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
              <Text style={styles.categoryText}>Flowers</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('GiftCategoryScreen')}
          >
            <View style={styles.category}>
              <Octicons name="gift" size={34} color={colors.pink} />
            </View>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
              <Text style={styles.categoryText}>Gifts</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('VasesCategoryScreen')}
          >
            <View style={styles.category}>
              <FontAwesome5 name="wine-glass" size={34} color={colors.pink} />
            </View>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
              <Text style={styles.categoryText}>Vases</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/*  Offer Section Header */}
        <SectionHeader title="Offers" />
        {/* OfferCard */}
        <View>
          <FlatList
            data={offers}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return <OfferCard item={item} />;
            }}
          />
        </View>
        {/* Popular Section */}
        <SectionHeader title="Popular" />
        {/* Popular Product cards */}

        <View>
          <FlatList
            data={popularProducts}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            style={{ marginLeft: 8 }}
            contentContainerStyle={{ gap: 8 }}
            renderItem={({ item }) => {
              return (
                <ProductCard
                  item={item}
                  onPress={() => {
                    dispatch(addToRecentlyViewed(item));

                    navigation.navigate('ProductScreen', {
                      Product: item,
                    });
                  }}
                  onWishList={() => {
                    dispatch(addToWishList(item));
                  }}
                />
              );
            }}
          />
        </View>
        {/* Recently Viewed Section  */}
        <SectionHeader title="Recently Viewed" />
        {/* Recently Viewed Cards */}
        <View>
          <RecentlyViewedCard />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.lightGrey,
  },
  searchBar: {
    marginTop: 50,
  },
  categoriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  category: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
    borderRadius: 25,
    backgroundColor: colors.white,
    padding: 20,
  },
  categoryText: {
    fontFamily: 'Pacifico',
    fontSize: 14,
  },
});
