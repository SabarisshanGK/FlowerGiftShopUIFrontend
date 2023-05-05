import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import colors from '../../assets/Theme/colors';
import HomeScreenModal from '../Components/HomeScreenModal/HomeScreenModal';
import CustomTextInput from '../Components/CustomTextInput/CustomTextInput';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const HomeScreen = () => {
  const [isModal, setIsModal] = useState(true);
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
      <View style={styles.searchBar}>
        <CustomTextInput text="Search" />
      </View>
      <View style={styles.categoriesContainer}>
        <TouchableOpacity>
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
        <TouchableOpacity>
          <View style={styles.category}>
            <Octicons name="gift" size={34} color={colors.pink} />
          </View>
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={styles.categoryText}>Gifts</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.category}>
            <FontAwesome5 name="wine-glass" size={34} color={colors.pink} />
          </View>
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={styles.categoryText}>Vases</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.Offers}>
        <Text style={styles.Text1}>Offers</Text>
        <TouchableOpacity>
          <Text style={styles.Text2}>View all</Text>
        </TouchableOpacity>
      </View>
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
  Offers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  Text1: {
    fontSize: 20,
    fontFamily: 'Inter',
  },
  Text2: {
    color: colors.pink,
    fontFamily: 'InterLight',
  },
});
