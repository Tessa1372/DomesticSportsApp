import React, {useEffect, useState} from 'react';
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
import DropDownPicker from 'react-native-dropdown-picker';

import {colors} from '../utils';
import AppButton from '../components/AppButton';

const Reports = ({navigation}) => {
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

  const [selectSportOpen, setselectSportOpen] = useState(false);
  const [selectSportValue, setselectSportValue] = useState(null);
  const [selectSportItem, setselectSportItem] = useState([
    {label: 'Semester 1', value: 'Semester 1'},
    {label: 'Semester 2', value: 'Semester 2'},
    {label: 'Semester 3', value: 'Semester 3'},
    {label: 'Semester 4', value: 'Semester 4'},
  ]);

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
          <DropDownPicker
            placeholder="Select Semester"
            open={selectSportOpen}
            onOpen={{}}
            value={selectSportValue}
            items={selectSportItem}
            setOpen={setselectSportOpen}
            setValue={setselectSportValue}
            setItems={setselectSportItem}
            style={[styles.ddinput, {zIndex: 10}]}
            dropDownContainerStyle={{
              borderColor: colors.borderColor,
              width: '90%',
              marginHorizontal: 20,
              marginTop: 20,
              //   maxWidth: 180,
            }}
            placeholderStyle={styles.placeholderstyle}
          />

          <AppButton title="Download" />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  ddinput: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    backgroundColor: colors.white,
    color: colors.textColor,
    borderColor: colors.Grey,
    margin: 20,
    // marginBottom: 20,
    // maxWidth:180,
    width: '90%',
    paddingHorizontal: 20,
    borderRadius: 12,
  },

  placeholderstyle: {
    color: colors.Grey,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
});

export default Reports;
