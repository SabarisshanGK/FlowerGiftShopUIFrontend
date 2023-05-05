import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../../../assets/Theme/colors';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import CustomButton from '../CustomButton';

const HomeScreenModal = ({ modelVisible, setModelVisible }) => {
  const navigation = useNavigation();
  const [fonts] = useFonts({
    AlluraRegular: require('../../../assets/fonts/Allura-Regular.ttf'),
    Inter: require('../../../assets/fonts/Inter-Regular.ttf'),
    InterLight: require('../../../assets/fonts/Inter-Medium.ttf'),
    Pacifico: require('../../../assets/fonts/Pacifico-Regular.ttf'),
  });
  if (!fonts) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.firstText}>First Order</Text>
        <Text style={styles.modalText}>Get 30% off on your first order</Text>
        <View style={styles.modalButton}>
          <CustomButton
            text="Got It"
            onPress={() => setModelVisible(!modelVisible)}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreenModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: colors.white,
    borderRadius: 10,
    width: 290,
    height: 270,
  },

  modalText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 25,
    width: 200,
    fontFamily: 'Inter',
    marginLeft: 50,
    lineHeight: 30,
  },
  modalButton: {
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  firstText: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 24,
    fontFamily: 'Pacifico',
    color: colors.pink,
  },
});
