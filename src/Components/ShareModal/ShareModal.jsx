import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../../../assets/Theme/colors';
import { TouchableWithoutFeedback } from 'react-native';
import { useFonts } from 'expo-font';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const ShareModal = ({ setIsModal, isModal }) => {
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
    <TouchableWithoutFeedback onPress={() => setIsModal(!isModal)}>
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <Text style={styles.Header}>Share With</Text>
          <View style={{ flexDirection: 'row', marginTop: 20, gap: 40 }}>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity style={styles.IconContainer}>
                <AntDesign name="instagram" size={44} color={colors.white} />
              </TouchableOpacity>
              <Text>Instagram</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity style={styles.IconContainer}>
                <FontAwesome name="whatsapp" size={44} color={colors.white} />
              </TouchableOpacity>
              <Text>WhatsApp</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity style={styles.IconContainer}>
                <Entypo
                  name="facebook-with-circle"
                  size={40}
                  color={colors.white}
                />
              </TouchableOpacity>
              <Text>FaceBook</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20, gap: 40 }}>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity style={styles.IconContainer}>
                <FontAwesome5
                  name="facebook-messenger"
                  size={40}
                  color={colors.white}
                />
              </TouchableOpacity>
              <Text>messenger</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity style={styles.IconContainer}>
                <AntDesign name="twitter" size={44} color={colors.white} />
              </TouchableOpacity>
              <Text>Twitter</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity style={styles.IconContainer}>
                <FontAwesome5 name="copy" size={40} color={colors.white} />
              </TouchableOpacity>
              <Text>Copy Link</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ShareModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    position: 'absolute',
    padding: 40,
    bottom: 0,
    width: '100%',
    height: 370,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  Header: {
    fontFamily: 'Inter',
    fontSize: 18,
  },
  IconContainer: {
    backgroundColor: colors.pink,
    padding: 20,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
});
