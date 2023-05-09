import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../../assets/Theme/colors';
import Lottie from 'lottie-react-native';
import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const OrderConfirmationScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ width: 200, height: 200, marginBottom: 30 }}>
        <Lottie
          source={require('../../assets/animations/33188-red-flower.json')}
          autoPlay
          loop
        />
      </View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
        Your Order is on the way
      </Text>
      <Text style={{ fontSize: 18, fontWeight: '300' }}>
        Thank You for your Order
      </Text>
      <Text style={{ fontSize: 18, fontWeight: '300', marginBottom: 30 }}>
        Est. delivery time: 30 min
      </Text>
      <CustomButton
        text="Track Your Order"
        onPress={() => navigation.navigate('TrackOrder')}
      />
      <View style={{ marginTop: 20 }}>
        <CustomButton
          text="Return Home"
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </View>
    </View>
  );
};

export default OrderConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrey,
  },
});
