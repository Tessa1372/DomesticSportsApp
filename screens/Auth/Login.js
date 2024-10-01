import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
  StatusBar,
  Image,
  Alert,
  BackHandler,
  KeyboardAvoidingView,
  PermissionsAndroid,
  Linking,
} from 'react-native';
import colors from '../../utils/colors';
import AppButton from '../../components/AppButton';
import {TextInput, useTheme} from 'react-native-paper';
import Loader from '../../components/Loader/Loader';
import CheckBox from '@react-native-community/checkbox';

const LogIn = props => {
  const {navigation} = props;

  const theme = useTheme();

  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        'Hold on!',
        'Are you sure you want to Exit from the App?',
        [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ],
      );
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  const [isSelected, setSelection] = useState(false);

  const [loginParams, setLoginParams] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(true);
  const [showLoader, setLoader] = useState(false);

  return (
    <SafeAreaView style={styles.safearea}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle="dark-content" />
      {showLoader ? (
        <Loader />
      ) : (
        <View style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{}}>
            <ScrollView nestedScrollEnabled>
              <View style={{flex: 1}}>
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: 40,
                    marginBottom: 80,
                  }}>
                  <Image
                    style={{width: '85%'}}
                    resizeMode="contain"
                    source={require('../../assets/logo.jpg')}
                  />
                </View>

                <View style={styles.fieldscontainer}>
                  <TextInput
                    style={styles.input}
                    label={
                      <Text style={styles.labeltext}>Type your email</Text>
                    }
                    caretHidden={false}
                    placeholderTextColor={colors.TextGrey}
                    onChangeText={value => {
                      setLoginParams({...loginParams, email: value});
                    }}
                    cursorColor={colors.textColor}
                    mode="outlined"
                    activeOutlineColor={colors.secondaryColor}
                    outlineColor={colors.Grey}
                    value={loginParams.email}
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

                <View style={styles.fieldscontainer}>
                  <TextInput
                    label={
                      <Text style={styles.labeltext}>Type your password</Text>
                    }
                    placeholderTextColor={colors.TextGrey}
                    secureTextEntry={showPassword}
                    style={[styles.input, {marginBottom: 10}]}
                    onChangeText={value => {
                      setLoginParams({...loginParams, password: value});
                    }}
                    value={loginParams.password}
                    cursorColor={colors.textColor}
                    caretHidden={false}
                    mode="outlined"
                    activeOutlineColor={colors.secondaryColor}
                    outlineColor={colors.Grey}
                    theme={{
                      fonts: {
                        bodyLarge: {
                          ...theme.fonts.bodyLarge,
                          fontFamily: 'Poppins-Medium',
                        },
                      },
                    }}
                    // left={<TextInput.Icon icon={() => <LockIcon />} />}
                    right={
                      <TextInput.Icon
                        size={24}
                        icon={!showPassword ? 'eye' : 'eye-off'}
                        color={colors.TextGrey}
                        onPress={() => {
                          setShowPassword(!showPassword);
                        }}
                      />
                    }
                  />
                </View>

                <View
                  style={{
                    marginHorizontal: 20,
                    alignSelf: 'flex-end',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('forgotpassword');
                    }}>
                    <Text
                      style={[
                        styles.rememberText,
                        {color: colors.black, fontFamily: 'Poppins-Medium'},
                      ]}>
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.BtnView}>
                  <AppButton
                    style={{marginBottom: 20}}
                    title="LogIn"
                    onPress={() => {
                     navigation.navigate("DrawerTab")
                    }}
                  />
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      )}
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
  socialBtnView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 20,
    justifyContent: 'center',
    padding: 16,
  },
  socialText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: colors.textColor,
  },
  tctext:{
    color: colors.TextGrey,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  borderview: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  borderText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: colors.TextGrey,
    // marginHorizontal:10
  },
  borderline: {
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
    width: '44%',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 60,
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
    marginHorizontal: 20,
  },
  labeltext: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.TextGrey,
  },
  input: {
    backgroundColor: colors.white,
    fontSize: 14,
    marginBottom: 24,
    fontFamily: 'Poppins-Bold',
    color: colors.textColor,
  },
  rememberText: {
    color: colors.TextGrey,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  alreadyView: {
    marginHorizontal: 25,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 40,
  },
  BtnView: {
    marginTop: 60,
  },
  rememberView: {
    // marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  signupBtn: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderColor,
    marginHorizontal: 10,
    letterSpacing: 0.2,
    fontFamily: 'Poppins-Bold',
  },
});

export default LogIn;
