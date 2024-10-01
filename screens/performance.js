import React, {useEffect} from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  BackHandler,
  Alert,
  Text,
} from 'react-native';
import Loader from '../components/Loader/Loader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../utils';

const Performance = ({navigation}) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to exit from the App?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <StatusBar
        translucent={false}
        backgroundColor={colors.secondaryColor}
        barStyle={'light-content'}
      />
      {false ? (
        <Loader />
      ) : (
        <View style={styles.container}>
          <Text style={styles.heading}>
            Choose the Performance type you would like to view
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Individual');
            }}
            style={styles.BtnView}>
            <Text style={styles.BtnTxt}>Individual</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Overall');
            }}
            style={styles.BtnView}>
            <Text style={styles.BtnTxt}>Team Wise</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BtnView: {
    backgroundColor: '#0F67B1',
    borderRadius: 12,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginBottom: 40,
  },
  BtnTxt: {
    fontFamily: 'Poppins-SemiBold',
    color: colors.white,
    fontSize: 16,
  },
  heading: {
    textAlign:"center",
    fontFamily: 'Poppins-SemiBold',
    color: colors.black,
    fontSize: 16,
    marginBottom:40,
    marginHorizontal:20
  },
});

export default Performance;
