import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import colors from '../utils/colors';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';


const HeaderLeft = props=> {
  const {navigation, onPress} = props;
  const goBackOnPress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      style={styles.backBtn}
      onPress={onPress ? onPress : goBackOnPress}
      activeOpacity={0.5}>
      <Icon name="arrow-left-long" size={20} color={colors.textColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    marginRight: 10,
    backgroundColor: 'white',
    height: 35,
    width: 35,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HeaderLeft;
