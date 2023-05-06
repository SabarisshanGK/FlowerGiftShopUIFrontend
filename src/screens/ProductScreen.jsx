import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../../assets/Theme/colors';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import CustomButton from '../Components/CustomButton';

const ProductScreen = ({ route }) => {
  const data = route.params.Product;
  const navigation = useNavigation();
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
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={44} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="share" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
        <Image source={data.image} resizeMode="cover" style={styles.image} />
        {/* Name Section */}

        <View style={styles.NameSectionContainer}>
          <View style={styles.NameSection}>
            <Text style={styles.name}>{data.productName}</Text>
            <TouchableOpacity>
              <FontAwesome5 name="heart" size={24} color={colors.pink} />
            </TouchableOpacity>
          </View>
          <View style={styles.circleContainer}>
            <View style={styles.circle1}></View>
            <View style={styles.circle2}></View>
            <View style={styles.circle3}></View>
          </View>
        </View>

        {/* Price Section */}

        <View style={styles.PriceSection}>
          <Text style={styles.priceText}>₹{data.price}</Text>
          <View style={styles.ratingContainer}>
            <FontAwesome name="star" size={18} color={colors.yellow} />
            <Text style={styles.ratingText}>( 4.5 )</Text>
          </View>
        </View>

        {/* Description Section */}

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionHeader}>Description</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi modi
            et impedit amet quos, ratione repellendus dicta dolor doloremque
            dolorem repudiandae culpa ea eveniet incidunt voluptate suscipit
            excepturi illum aperiam?
          </Text>
        </View>

        {/* Reviews */}

        <View style={styles.reviewContainer}>
          <Text style={styles.descriptionHeader}>Reviews</Text>
          <View style={styles.ratingCard}>
            <View
              style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}
            >
              <Text style={{ fontSize: 18, fontWeight: '600' }}>4.5/5</Text>
              <View style={{ flexDirection: 'row', gap: 5 }}>
                <FontAwesome name="star" size={18} color={colors.yellow} />
                <FontAwesome name="star" size={18} color={colors.yellow} />
                <FontAwesome name="star" size={18} color={colors.yellow} />
                <FontAwesome name="star" size={18} color={colors.yellow} />
                <FontAwesome
                  name="star-half-full"
                  size={18}
                  color={colors.yellow}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Add to cart button */}

        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <CustomButton text="Add To Cart" />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.lightGrey,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    marginRight: 10,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  NameSectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 20,
    marginRight: 15,
  },
  NameSection: {
    flexDirection: 'row',
    width: 130,
    gap: 5,
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Pacifico',
    fontSize: 18,
  },
  circleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  circle1: {
    width: 25,
    height: 25,
    backgroundColor: colors.pink,
    borderRadius: 25,
  },
  circle2: {
    width: 25,
    height: 25,
    backgroundColor: colors.yellow,
    borderRadius: 25,
  },
  circle3: {
    width: 25,
    height: 25,
    backgroundColor: '#cabad3',
    borderRadius: 25,
  },
  PriceSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 15,
    marginTop: 10,
  },
  priceText: {
    fontFamily: 'Inter',
    fontSize: 18,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  ratingText: {
    color: colors.grey,
    fontFamily: 'InterLight',
  },
  descriptionHeader: {
    fontFamily: 'InterSemi',
    marginTop: 20,
    marginLeft: 20,
    fontSize: 18,
  },
  description: {
    marginTop: 10,
    marginLeft: 20,
    fontFamily: 'InterLight',
    lineHeight: 20,
  },
  descriptionContainer: {
    marginRight: 15,
  },
  reviewContainer: {
    marginTop: 10,
  },
  ratingCard: {
    backgroundColor: colors.white,
    marginHorizontal: 10,
    marginLeft: 20,
    marginTop: 10,
    padding: 20,
    borderRadius: 10,
  },
});
