import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import colors from '../../assets/Theme/colors';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CustomButton from '../Components/CustomButton';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const TrackOrderScreen = () => {
  const navigation = useNavigation();
  const date = new Date(Date.now());
  const day = date.toDateString();

  const [fonts] = useFonts({
    Inter: require('../../assets/fonts/Inter-Regular.ttf'),
  });
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={34} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Track Order</Text>
      </View>
      <View style={{ marginTop: 20, marginLeft: 20, gap: 10 }}>
        <Text>{day}</Text>
        <Text>Order ID: 1234567</Text>
        <Text>Tamil Nadu,India</Text>
      </View>
      <Text
        style={{
          marginTop: 30,
          marginLeft: 20,
          fontSize: 18,
          fontFamily: 'Inter',
        }}
      >
        ETA: 30 min
      </Text>

      {/* Tracking Section */}

      <View style={{ marginTop: 30 }}>
        <View style={styles.trackContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
            <View style={styles.BigCircle} />
            <FontAwesome5 name="truck" size={24} color="black" />
            <View>
              <Text style={{ fontSize: 14, fontFamily: 'Inter' }}>
                On The Way
              </Text>
              <Text style={{ fontSize: 10, marginTop: 5 }}>
                Your order is on it's way to you
              </Text>
            </View>
          </View>
          <Text style={{ color: colors.grey }}>8:30</Text>
        </View>
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.trackContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
            <View
              style={[
                styles.BigCircle,
                {
                  backgroundColor: colors.pink,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}
            >
              <Entypo name="check" size={14} color={colors.white} />
            </View>
            <MaterialCommunityIcons
              name="flower-tulip-outline"
              size={32}
              color="black"
            />
            <View>
              <Text style={{ fontSize: 14, fontFamily: 'Inter' }}>
                Order Processed
              </Text>
              <Text style={{ fontSize: 10, marginTop: 5 }}>
                We made your order
              </Text>
            </View>
          </View>
          <Text style={{ color: colors.grey }}>6:30</Text>
        </View>
        <View style={[styles.circle, { backgroundColor: colors.pink }]} />
        <View style={[styles.circle, { backgroundColor: colors.pink }]} />
        <View style={[styles.circle, { backgroundColor: colors.pink }]} />
        <View style={[styles.circle, { backgroundColor: colors.pink }]} />
        <View style={[styles.circle, { backgroundColor: colors.pink }]} />
        <View style={styles.trackContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
            <View
              style={[
                styles.BigCircle,
                {
                  backgroundColor: colors.pink,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}
            >
              <Entypo name="check" size={14} color={colors.white} />
            </View>
            <MaterialIcons name="payment" size={34} color="black" />
            <View>
              <Text style={{ fontSize: 14, fontFamily: 'Inter' }}>
                Payment Confirmed
              </Text>
              <Text style={{ fontSize: 10, marginTop: 5 }}>
                We received your payment
              </Text>
            </View>
          </View>
          <Text style={{ color: colors.grey }}>4:30</Text>
        </View>
        <View style={[styles.circle, { backgroundColor: colors.pink }]} />
        <View style={[styles.circle, { backgroundColor: colors.pink }]} />
        <View style={[styles.circle, { backgroundColor: colors.pink }]} />
        <View style={[styles.circle, { backgroundColor: colors.pink }]} />
        <View style={[styles.circle, { backgroundColor: colors.pink }]} />
        <View style={styles.trackContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
            <View
              style={[
                styles.BigCircle,
                {
                  backgroundColor: colors.pink,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}
            >
              <Entypo name="check" size={14} color={colors.white} />
            </View>
            <Octicons name="checklist" size={34} color="black" />
            <View>
              <Text style={{ fontSize: 14, fontFamily: 'Inter' }}>
                Order Placed
              </Text>
              <Text style={{ fontSize: 10, marginTop: 5 }}>
                We received your order
              </Text>
            </View>
          </View>
          <Text style={{ color: colors.grey }}>2:30</Text>
        </View>
      </View>

      {/* Button */}
      <View style={{ alignItems: 'center', marginTop: 40 }}>
        <CustomButton text="Order Received" />
      </View>
    </View>
  );
};

export default TrackOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.lightGrey,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginTop: 60,
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'Inter',
  },
  trackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 10,
  },
  BigCircle: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: colors.grey,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.grey,
    marginBottom: 5,
    marginLeft: 25,
  },
});
