import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../../assets/Theme/colors';
import { Entypo } from '@expo/vector-icons';
import { Image } from 'react-native';

const ProfilePageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://cdn.statusqueen.com/dpimages/thumbnail/dp_images_8-1279.jpg',
          }}
          style={styles.image}
        />
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          Sabarisshan G K
        </Text>
        <Text style={{ color: colors.pink }}>Edit Profile</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>My People</Text>
        <Entypo name="chevron-right" size={24} color="black" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Payment Method</Text>
        <Entypo name="chevron-right" size={24} color="black" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>My Orders</Text>
        <Entypo name="chevron-right" size={24} color="black" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Coupons</Text>
        <Entypo name="chevron-right" size={24} color="black" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Settings</Text>
        <Entypo name="chevron-right" size={24} color="black" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Privacy</Text>
        <Entypo name="chevron-right" size={24} color="black" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Contact Us</Text>
        <Entypo name="chevron-right" size={24} color="black" />
      </View>
    </View>
  );
};

export default ProfilePageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: colors.lightGrey,
  },
  image: {
    width: 90,
    aspectRatio: 1,
    borderRadius: 50,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 100,
    gap: 15,
  },
});
