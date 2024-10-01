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
import DropDownPicker from 'react-native-dropdown-picker';
import {TextInput, useTheme} from 'react-native-paper';
import {colors} from '../utils';
import CheckBox from '@react-native-community/checkbox';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import AppButton from '../components/AppButton';

const Attendance = ({navigation}) => {
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

  const [numPerson, setNumPerson] = useState('');

  const [dateParam, setDateParam] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [startDate, setStartDate] = useState(new Date());

  const [enddateParam, setEndDateParam] = useState('');
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);

  // showing datepicker
  const showDatePicker = visible => {
    setDatePickerVisibility(visible);
  };

  //hiding date picker
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  // Handling Date
  const handleConfirm = date => {
    const selectedDate = moment(date).toDate();
    setDateParam(moment(selectedDate).format('DD/MMM/YYYY  hh:mm A'));
    setStartDate(selectedDate);
    setDatePickerVisibility(false);
  };

  // showing End datepicker
  const showEndDatePicker = visible => {
    setEndDatePickerVisibility(visible);
  };

  //hiding End date picker
  const hideEndDatePicker = () => {
    setEndDatePickerVisibility(false);
  };

  // Handling End Date
  const handleEndConfirm = date => {
    const minEndDate = moment(startDate).add(1, 'hours').toDate();
    if (date < minEndDate) {
      Alert.alert(
        'Invalid End Time',
        'End time must be at least 1 hour after the start time.',
        [{text: 'OK', onPress: () => hideEndDatePicker()}],
        {cancelable: true},
      );
    } else {
      setEndDateParam(moment(date).format('DD/MMM/YYYY  hh:mm A'));
      setEndDatePickerVisibility(false);
    }
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

  const [selectedStudents, setSelectedStudents] = useState([]);

  const toggleSelectStudent = id => {
    if (selectedStudents.includes(id)) {
      setSelectedStudents(
        selectedStudents.filter(studentId => studentId !== id),
      );
    } else {
      setSelectedStudents([...selectedStudents, id]);
    }
  };

  const RenderStudent = ({item}) => {
    const isSelected = selectedStudents.includes(item.id);
    return (
      <TouchableOpacity
        onPress={() => {
          toggleSelectStudent(item.id);
        }}
        style={styles.cardMain}
        activeOpacity={0.8}>
        <View style={styles.flxRow}>
          <Image style={styles.cardImage} source={item.image} />
          <View>
            <Text style={styles.regTxt}>{item.regno}</Text>
            <Text style={styles.nameTxt}>{item.name}</Text>
          </View>
        </View>
        <CheckBox
          value={isSelected}
          onValueChange={() => toggleSelectStudent(item.id)}
          tintColors={{true: '#3384FF', false: '#111111'}}
        />
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
          <View style={styles.fieldscontainer}>
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
                // width: '100%',
                // marginHorizontal: 20,
                marginTop: 20,
                //   maxWidth: 180,
              }}
              placeholderStyle={styles.placeholderstyle}
            />
          </View>

          <View style={styles.fieldscontainer}>
            <Text style={styles.label}>Select Start Time </Text>
            <TouchableOpacity
              onPress={() => {
                showDatePicker(!isDatePickerVisible);
              }}
              style={styles.dateView}>
              <Text style={styles.dateText}>{dateParam}</Text>
              <Image
                style={{width: 20, height: 20}}
                source={require('../assets/Calendardate.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.fieldscontainer}>
            <Text style={styles.label}>Select End Time </Text>
            <TouchableOpacity
              onPress={() => {
                showEndDatePicker(!isEndDatePickerVisible);
              }}
              style={styles.dateView}>
              <Text style={styles.dateText}>{enddateParam}</Text>
              <Image
                style={{width: 20, height: 20}}
                source={require('../assets/Calendardate.png')}
              />
            </TouchableOpacity>
          </View>

          {/* <View> */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin:20,
            }}>
            <Text style={styles.subHead}>Student List</Text>
            <Text style={styles.subHead}>Check the absenties</Text>
          </View>
          <FlatList
            data={StudentList}
            showsVerticalScrollIndicator={false}
            renderItem={RenderStudent}
            keyExtractor={item => item.id}
          />
          {/* </View> */}

          <AppButton title="Submit" />

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode={'datetime'}
            minimumDate={moment().add(1, 'minutes').toDate()} // Ensuring future time
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <DateTimePickerModal
            isVisible={isEndDatePickerVisible}
            mode={'datetime'}
            minimumDate={moment(startDate).add(1, 'hours').toDate()} // Ensuring at least 1 hour after start time
            onConfirm={handleEndConfirm}
            onCancel={hideEndDatePicker}
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
    marginVertical: 20,
    // marginBottom: 20,
    // maxWidth:180,
    width: '100%',
    paddingHorizontal: 20,
    borderRadius: 12,
  },

  placeholderstyle: {
    color: colors.Grey,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  fieldscontainer: {
    marginHorizontal: 24,
  },
  label: {
    color: '#1E1E1E',
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    marginBottom: 8,
  },
  input: {
    backgroundColor: colors.white,
    marginBottom: 24,
    fontFamily: 'Poppins-Medium',
  },
  dateView: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.Grey,
    height: 55,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateText: {
    color: colors.black,
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

export default Attendance;
