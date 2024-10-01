import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import colors from '../utils/colors';

const SplashScreenPage = props => {
  const {navigation} = props;

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('AuthStack');
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.safearea}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <View style={styles.container}>
        <Image
          source={require('../assets/logo.jpg')}
          style={styles.imgView}
          resizeMode="contain"
        />   
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgView: {
    width: '80%',
    height: '80%',
    marginHorizontal: 10,
  },
  splastTxt: {
    color: colors.black,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 28,
  },
});

export default SplashScreenPage
