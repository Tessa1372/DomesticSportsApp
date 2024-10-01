import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
  StatusBar,
  Alert,
  BackHandler,
} from 'react-native';
import colors from '../../utils/colors';
import Foundation from 'react-native-vector-icons/Foundation';
import AppButton from '../../components/AppButton';
import {TextInput, useTheme} from 'react-native-paper';

const ForgotPassword = props => {
  const {navigation} = props;

  const theme = useTheme();

  useEffect(() => {}, []);

  const [showLoader, setLoader] = useState('');

  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.safearea}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle="dark-content" />
      <ScrollView nestedScrollEnabled>
        <View style={styles.container}>
          <View style={styles.headerView}>
            <Text style={styles.header}>Verification</Text>
          </View>

          <View style={styles.alreadyView}>
            <Text style={[styles.rememberText]}>
              We need your registration Email to send you password reset code!
            </Text>
          </View>
          <View style={styles.fieldscontainer}>
            <TextInput
              style={styles.input}
              label={<Text style={styles.labeltext}>Type your email</Text>}
              caretHidden={false}
              placeholderTextColor={colors.TextGrey}
              onChangeText={value => {
                setEmail(value);
              }}
              cursorColor={colors.black}
              mode="outlined"
              activeOutlineColor={colors.secondaryColor}
              outlineColor={colors.Grey}
              value={email}
              theme={{
                fonts: {
                  bodyLarge: {
                    ...theme.fonts.bodyLarge,
                    fontFamily: 'Poppins-Medium',
                  },
                },
              }}
              // left={<TextInput.Icon icon={() => <MailIcon />} />}
            />
          </View>
        </View>
        <AppButton
          style={styles.verifyBtn}
          title="Continue"
          onPress={() => {
            navigation.navigate('LogIn');
          }}
        />
      </ScrollView>
      <View style={{}}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 16,
  },
  header: {
    color: colors.textColor,
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
  },
  headertilt: {
    color: '#F47A20',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBoldItalic',
  },
  fieldscontainer: {
    marginHorizontal: 24,
  },
  label: {
    color: colors.textColor,
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    backgroundColor: colors.white,
    fontSize: 14,
    marginBottom: 24,
    fontFamily: 'Poppins-Bold',
    color: colors.textColor,
  },

  rememberText: {
    color: colors.Grey,
    fontFamily: 'UrPoppinsbanist-Regular',
    fontSize: 14,
    lineHeight: 24,
  },
  alreadyView: {
    marginHorizontal: 24,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30,
  },
});



export default ForgotPassword
