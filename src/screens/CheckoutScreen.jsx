import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { Entypo } from '@expo/vector-icons';
import colors from '../../assets/Theme/colors';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import CustomButton from '../Components/CustomButton';

const CheckoutScreen = ({ route }) => {
  const { total, totalItems } = route.params;
  const navigation = useNavigation();
  const [paymentCheck, setPaymentCheck] = useState(false);
  const [fonts] = useFonts({
    Inter: require('../../assets/fonts/Inter-Regular.ttf'),
    Pacifico: require('../../assets/fonts/Pacifico-Regular.ttf'),
  });

  if (!fonts) {
    return null;
  }
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={44} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Order Confirmation</Text>
      </View>
      <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
        {/* Delivery Address Section */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Delivery Address</Text>
          <TouchableOpacity>
            <Text style={styles.touchableText}>Change</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.headerContainer}>
          <TextInput placeholder="Name" style={styles.textInput} />
          <View style={styles.textContainer}>
            <Entypo name="location-pin" size={34} color={colors.pink} />
            <TextInput placeholder="Enter Address" style={styles.textInput1} />
          </View>
          <View style={styles.textContainer}>
            <FontAwesome name="phone" size={34} color={colors.pink} />
            <TextInput
              placeholder="Enter Phone Number"
              style={styles.textInput1}
            />
          </View>
        </View>

        {/* Delivery Time */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Delivery Time</Text>
          <TouchableOpacity>
            <Text style={styles.touchableText}>Pick</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.headerContainer}>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
              marginTop: 20,
              marginLeft: 20,
            }}
          >
            <MaterialCommunityIcons
              name="clock"
              size={24}
              color={colors.pink}
            />
            <Text>10.00 AM</Text>
          </View>
        </View>

        {/* Card Note Section */}

        <Text style={styles.noteHeader}>Card Note</Text>

        <View style={styles.headerContainer}>
          <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <TextInput
              placeholder="Enter your note"
              style={styles.textInput3}
            />
            <MaterialIcons name="edit" size={24} color={colors.pink} />
          </View>
        </View>

        {/* Order Bill Section */}

        <Text style={styles.noteHeader}>Order Bill</Text>
        <View style={styles.headerContainer}>
          <View style={styles.BillContainer}>
            <Text style={styles.billText}>Product</Text>
            <Text>{totalItems} items</Text>
          </View>
          <View style={styles.BillContainer}>
            <Text style={styles.billText}>Price</Text>
            <Text>₹ {total}</Text>
          </View>
          <View style={styles.BillContainer}>
            <Text style={styles.billText}>Shipping Fee</Text>
            <Text>Free</Text>
          </View>
          <TouchableOpacity>
            <Text style={{ marginTop: 20, marginLeft: 20, color: colors.pink }}>
              Apply Coupon
            </Text>
          </TouchableOpacity>
          <View style={styles.BillContainer}>
            <Text style={[styles.billText, { fontWeight: 'bold' }]}>
              Total Bill
            </Text>
            <Text style={[styles.billText, { fontWeight: 'bold' }]}>
              ₹ {total}
            </Text>
          </View>
        </View>

        {/* Payment Section */}

        <View>
          <Text style={styles.noteHeader}>Payment Method</Text>

          <View style={styles.paymentContainer}>
            <View
              style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}
            >
              <TouchableOpacity
                style={{
                  width: 20,
                  height: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: colors.pink,
                  borderRadius: 10,
                  opacity: paymentCheck ? 1 : 0.5,
                }}
                onPress={() => setPaymentCheck(!paymentCheck)}
              >
                {paymentCheck ? (
                  <Entypo name="check" size={14} color={colors.white} />
                ) : null}
              </TouchableOpacity>
              <Text>Credit/Debit Card</Text>
            </View>
            <Text style={{ color: colors.pink }}>Add new</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
              marginTop: 20,
              marginLeft: 20,
            }}
          >
            <TouchableOpacity
              style={{
                width: 20,
                height: 20,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.pink,
                borderRadius: 10,
                opacity: paymentCheck ? 1 : 0.5,
              }}
              onPress={() => setPaymentCheck(!paymentCheck)}
            >
              {paymentCheck ? (
                <Entypo name="check" size={14} color={colors.white} />
              ) : null}
            </TouchableOpacity>
            <Text>Cash On Delivery</Text>
          </View>
          <View
            style={{ alignItems: 'center', marginTop: 30, paddingBottom: 30 }}
          >
            <CustomButton
              text="Pay"
              onPress={() => navigation.navigate('OrderConfirmation')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  header: {
    marginTop: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'Inter',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  sectionHeaderText: {
    fontSize: 16,
    fontFamily: 'Inter',
  },
  touchableText: {
    color: colors.pink,
  },
  textInput: {
    marginTop: 10,
    marginHorizontal: 25,
    width: '90%',
    marginRight: 50,
    borderColor: colors.grey,
    borderBottomWidth: 0.4,
    padding: 10,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
    marginLeft: 20,
  },
  textInput1: {
    borderBottomWidth: 0.4,
    borderBottomColor: colors.grey,
    padding: 10,
    width: '84%',
  },
  headerContainer: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 0.6,
    paddingBottom: 30,
  },
  noteHeader: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 16,
    fontFamily: 'Inter',
  },
  textInput3: {
    marginTop: 10,
    marginLeft: 25,
    width: '80%',

    borderColor: colors.grey,
    borderBottomWidth: 0.4,
    padding: 10,
  },
  BillContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  billText: {
    fontSize: 16,
    fontWeight: '300',
  },

  paymentContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
