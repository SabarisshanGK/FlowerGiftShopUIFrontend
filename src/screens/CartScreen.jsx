import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import colors from '../../assets/Theme/colors';
import Lottie from 'lottie-react-native';
import { useFonts } from 'expo-font';
import CustomButton from '../Components/CustomButton';
import { Entypo } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';
import { removeFromCart } from '../../assets/Redux/Actions/CartAction';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [fonts] = useFonts({
    Inter: require('../../assets/fonts/Inter-Regular.ttf'),
    Pacifico: require('../../assets/fonts/Pacifico-Regular.ttf'),
  });

  let initialValue = 0;
  const total = cart.reduce(
    (accumulator, current) => accumulator + current.price,
    initialValue
  );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Cart</Text>

      {/* CartItems */}

      {cart.length > 0 ? (
        <View style={{ flex: 1 }}>
          <FlatList
            data={cart}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View style={styles.cartCard}>
                  <View style={styles.ImageContainer}>
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 15,
                        alignItems: 'center',
                      }}
                    >
                      <Image source={item.image} style={styles.Images} />
                      <View style={{ width: 100 }}>
                        <Text style={styles.name}>{item.productName}</Text>
                        <Text style={styles.price}>₹ {item.price}</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 8,
                      }}
                    >
                      <TouchableOpacity style={styles.circle}>
                        <Text style={{ color: colors.white }}>-</Text>
                      </TouchableOpacity>
                      <Text>1</Text>
                      <TouchableOpacity style={styles.circle}>
                        <Text style={{ color: colors.white }}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.cross}
                    onPress={() => dispatch(removeFromCart(item))}
                  >
                    <Entypo name="cross" size={18} color="black" />
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={(item) => item.id.toString()}
            scrollEventThrottle={16}
            ListFooterComponent={<View style={{ height: 130 }} />}
          />
        </View>
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
              source={require('../../assets/animations/126314-empty-box-by-partho.json')}
              autoPlay
              loop
            />
          </View>
          <Text style={{ fontFamily: 'Inter', fontSize: 20 }}>
            No Products added to cart
          </Text>
        </View>
      )}

      {/* Bottom */}
      <View style={styles.bottomContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>Total Price</Text>
          <Text style={[styles.priceText, { marginRight: 20 }]}>₹ {total}</Text>
        </View>
        <View style={{ marginLeft: 80, marginTop: 20, marginBottom: 20 }}>
          <CustomButton
            text="Check Out"
            onPress={() =>
              navigation.navigate('CheckOut', {
                total: total,
                totalItems: cart.length,
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  header: {
    marginTop: 50,
    marginLeft: 40,
    fontSize: 20,
    fontFamily: 'Inter',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.lightGrey,
    width: '100%',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  priceText: {
    fontFamily: 'Inter',
    fontSize: 16,
    marginLeft: 20,
  },
  cartCard: {
    width: 350,
    backgroundColor: colors.white,
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    marginLeft: 20,
  },
  ImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Images: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  name: {
    marginBottom: 5,
    fontFamily: 'Pacifico',
    fontSize: 16,
  },
  cross: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  circle: {
    width: 25,
    aspectRatio: 1,
    borderRadius: 20,
    backgroundColor: colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
