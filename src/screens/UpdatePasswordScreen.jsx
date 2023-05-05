import {
  Dimensions,
  Keyboard,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useState } from 'react';
import colors from '../../assets/Theme/colors';
import AnimatedText from '../Components/AnimatedText/AnimatedText';
import { useFonts } from 'expo-font';
import CustomTextInput from '../Components/CustomTextInput/CustomTextInput';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import UpdatePasswordModal from '../Components/UpdatePasswordModal/UpdatePasswordModal';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const UpdatePasswordScreen = () => {
  const navigation = useNavigation();
  const [agree, setAgree] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, { opacity: modalVisible ? 0.3 : 1 }]}>
        <View style={styles.animTextContainer}>
          <AnimatedText
            name="Flowery"
            valueTo={65}
            font="Pacifico"
            color={colors.black}
            fontsize={60}
          />
        </View>

        <Text style={styles.text}>Sign in to your Account</Text>

        <CustomTextInput text="Update Password" />
        <CustomTextInput text="Confirm Password" />

        <View style={styles.agreeContainer}>
          <TouchableOpacity
            onPress={() => setAgree(!agree)}
            style={[styles.agreeCircle, { opacity: agree ? 1 : 0.5 }]}
          >
            {agree ? (
              <Ionicons name="checkmark-sharp" size={14} color={colors.white} />
            ) : null}
          </TouchableOpacity>

          <Text style={styles.agreeText}>Save Password </Text>
        </View>

        <View style={styles.button}>
          <CustomButton
            text="Update Password"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
        <View style={styles.account}>
          <Text style={styles.accountText}>Don't Have an account? </Text>
          <Text
            style={{ color: colors.pink, fontWeight: '600' }}
            onPress={() => navigation.navigate('CreateAccount')}
          >
            Sign Up{' '}
          </Text>
        </View>
        <View
          style={{
            marginTop: 50,
          }}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}
          >
            <UpdatePasswordModal />
          </Modal>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default UpdatePasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 35,
  },
  animTextContainer: {
    marginTop: SCREEN_HEIGHT * 0.1,
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 18,
    color: colors.black,
    marginTop: SCREEN_HEIGHT * 0.04,
    fontWeight: '600',
    marginBottom: SCREEN_HEIGHT * 0.03,
  },
  agreeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SCREEN_HEIGHT * 0.01,
  },
  agreeCircle: {
    width: 20,
    height: 20,
    backgroundColor: colors.pink,
    borderRadius: 10,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  agreeText: {
    fontFamily: 'InterLight',
    fontWeight: '600',
    color: colors.black,
  },
  button: {
    marginTop: SCREEN_HEIGHT * 0.03,
    alignItems: 'center',
  },
  account: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SCREEN_HEIGHT * 0.03,
    marginLeft: 35,
  },
  accountText: {
    fontFamily: 'InterLight',
  },
  forgotText: {
    fontFamily: 'InterLight',
    marginLeft: 70,
    color: colors.pink,
  },
});
