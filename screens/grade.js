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
  FlatList,
} from 'react-native';
import Loader from '../components/Loader/Loader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import DropDownPicker from 'react-native-dropdown-picker';
import {colors} from '../utils';
import CheckBox from '@react-native-community/checkbox';

const GradeScreen = ({navigation}) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  const backAction = () => {
    Alert.alert(
      'Hold on!',
      'Are you sure you want to exit from the App?',
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

  const [selectSportOpen, setselectSportOpen] = useState(false);
  const [selectSportValue, setselectSportValue] = useState(null);
  const [selectSportItem, setselectSportItem] = useState([
    {label: 'Cricket', value: 'Cricket'},
    {label: 'Basketball', value: 'Basketball'},
    {label: 'Football', value: 'Football'},
    {label: 'Volleyball', value: 'Volleyball'},
  ]);

  const StudentList = [
    {
      id: '1',
      image: require('../assets/dummyImg.png'),
      regno: '001',
      name: 'Marina',
    },
    {
      id: '2',
      image: require('../assets/dummyImg.png'),
      regno: '002',
      name: 'Kimerly White',
    },
    {
      id: '3',
      image: require('../assets/dummyImg.png'),
      regno: '003',
      name: 'Steve Rogers',
    },
    {
      id: '4',
      image: require('../assets/dummyImg.png'),
      regno: '004',
      name: 'Amy Patterson',
    },
    {
      id: '5',
      image: require('../assets/dummyImg.png'),
      regno: '005',
      name: 'Hannah Paige',
    },
  ];



  const RenderStudent = ({item}) => {
    return (
      <TouchableOpacity
       
        style={styles.cardMain}
        activeOpacity={0.8}>
        <View style={styles.flxRow}>
          <Image style={styles.cardImage} source={item.image} />
          <View>
            <Text style={styles.regTxt}>{item.regno}</Text>
            <Text style={styles.nameTxt}>{item.name}</Text>
          </View>
        </View>
        <Entypo name="chevron-right" style={styles.rightIcon} size={16} />
      </TouchableOpacity>
    );
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
          <DropDownPicker
            placeholder="Select Sport Name"
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
            placeholderStyle={styles.placeholderstyle}></DropDownPicker>

        

          <FlatList
            data={StudentList}
            showsVerticalScrollIndicator={false}
            renderItem={RenderStudent}
            keyExtractor={item => item.id}
          />
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
  cardView: {
    marginHorizontal: 20,
    elevation: 2,
    borderRadius: 12,
    backgroundColor: '#E3F4F4',
    padding: 10,
    marginVertical: 20,
  },
  flxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  head: {
    color: colors.black,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginRight: 10,
  },
  subHead: {
    color: colors.black,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  cardMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FAFAFA',
    padding: 10,
    elevation: 1,
    backgroundColor: colors.white,
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  regTxt: {
    color: colors.black,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginRight: 10,
  },
  nameTxt: {
    color: colors.black,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
});

export default GradeScreen;
