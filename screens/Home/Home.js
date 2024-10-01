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
import Loader from '../../components/Loader/Loader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../utils';

const Home = ({navigation}) => {
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
        barStyle={'dark-content'}
      />
      {false ? (
        <Loader />
      ) : (
        <View style={styles.container}>
          <View style={styles.menuView}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Ionicons name="menu" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.profileIcon}>
              <Image
                style={{width: 40, height: 40, borderRadius: 12}}
                source={require('../../assets/dummyImg.png')}
              />
            </View>
          </View>
          <View style={styles.emptyView}>
            <Text style={styles.emptyTxt}>Stay Connected</Text>
          </View>
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
  profileIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  attTxt: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: colors.white,
    marginRight: 10,
  },
  emptyView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTxt: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: colors.black,
  },
  menuView: {
    flexDirection: 'row',
    backgroundColor:colors.secondaryColor,
    paddingHorizontal: 25,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Home;
