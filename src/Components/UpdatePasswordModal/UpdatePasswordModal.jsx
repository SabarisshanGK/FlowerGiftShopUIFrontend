import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../../../assets/Theme/colors';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import CustomButton from '../CustomButton';

const UpdatePasswordModal = () => {
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
        <View style={styles.tick}>
          <Feather name="check" size={24} color={colors.white} />
        </View>
        <Text style={styles.modalText}>Password was successfully updated</Text>
        <View style={styles.modalButton}>
          <CustomButton
            text="Got it"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </View>
  );
};

export default UpdatePasswordModal;

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
  tick: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderRadius: 25,
    backgroundColor: colors.pink,
    marginTop: 30,
  },
  modalText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 25,
    fontFamily: 'Inter',
  },
  modalButton: {
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
});
