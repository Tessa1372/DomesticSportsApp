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
  Modal,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Loader from '../components/Loader/Loader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AppButton from '../components/AppButton';
import Icon from 'react-native-vector-icons/AntDesign';
import {TextInput, FAB, useTheme} from 'react-native-paper';
import {colors} from '../utils';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import DropDownPicker from 'react-native-dropdown-picker';

const Competition = ({navigation}) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  const theme = useTheme();

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

  const [addName, setAddName] = useState('');
  const [addScore, setAddScore] = useState('');
  const [floatModalVisibility, setFloatModalVisibility] = useState(false);

  const StudentList = [
    {
      id: '1',
      image: require('../assets/dummyImg.png'),
      team: 'Basketball W',
      competet: 'Jain University',
      level: 'Zonal',
      score: 50,
    },
    {
      id: '2',
      image: require('../assets/dummyImg.png'),
      team: 'Volleyball W',
      competet: 'Allaince University',
      level: 'Zonal',

      score: 50,
    },
    {
      id: '3',
      image: require('../assets/dummyImg.png'),
      team: 'Cricket M',
      competet: 'Presidency',
      level: 'Zonal',

      score: 50,
    },
  ];

  const [selectSportOpen, setselectSportOpen] = useState(false);
  const [selectSportValue, setselectSportValue] = useState(null);
  const [selectSportItem, setselectSportItem] = useState([
    {label: 'Cricket', value: 'Cricket'},
    {label: 'Basketball', value: 'Basketball'},
    {label: 'Volleyball', value: 'Volleyball'},
    {label: 'Football', value: 'Football'},
  ]);

  const [selectLevelOpen, setselectLevelOpen] = useState(false);
  const [selectLevelValue, setselectLevelValue] = useState(null);
  const [selectLevelItem, setselectLevelItem] = useState([
    {label: 'Level 1', value: 'Level 1'},
    {label: 'Level 2', value: 'Basketball 2'},
    {label: 'Level 3', value: 'Level 3'},
    {label: 'Level 4', value: 'Level 4'},
  ]);

  const RenderStudent = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AddStudent');
        }}
        style={styles.cardMain}
        activeOpacity={0.8}>
        <View>
          <View style={styles.flxRow}>
            <Text style={styles.regTxt}>Team : </Text>
            <Text style={styles.nameTxt}>{item.team}</Text>
          </View>
          <View style={styles.flxRow}>
            <Text style={styles.regTxt}>Competition : </Text>
            <Text style={styles.nameTxt}>{item.competet}</Text>
          </View>
          <View style={styles.flxRow}>
            <Text style={styles.regTxt}>Level : </Text>
            <Text style={styles.nameTxt}>{item.level}</Text>
          </View>
          <View style={styles.flxRow}>
            <Text style={styles.regTxt}>Score : </Text>
            <Text style={styles.nameTxt}>{item.score}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const [dateParam, setDateParam] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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
    setDateParam(moment(selectedDate).format('DD/MMM/YYYY'));
    setDatePickerVisibility(false);
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
          <View>
            <Text style={styles.regTxt}></Text>
          </View>

          <FlatList
            data={StudentList}
            showsVerticalScrollIndicator={false}
            renderItem={RenderStudent}
            keyExtractor={item => item.id}
          />

          <FAB
            style={styles.fab}
            icon="plus"
            color="white"
            size="medium"
            onPress={() => setFloatModalVisibility(true)}
          />

          <Modal
            animationType="fade"
            transparent={true}
            statusBarTranslucent={true}
            visible={floatModalVisibility}
            avoidKeyboard={true}
            onRequestClose={() => {
              setFloatModalVisibility(!floatModalVisibility);
            }}>
            <View style={styles.modalBg}>
              <View style={[styles.modalViewBg, {height: '80%'}]}>
                <KeyboardAvoidingView
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                  style={{}}>
                  <View style={styles.modalheadView}>
                    <Text style={styles.modalHead}>Add Competition</Text>
                  </View>
                  <TouchableOpacity
                    style={{position: 'absolute', right: -10, top: -10}}
                    onPress={() => {
                      setFloatModalVisibility(!floatModalVisibility);
                    }}
                    activeOpacity={0.8}>
                    <Entypo
                      name="squared-cross"
                      color={colors.black}
                      size={25}
                    />
                  </TouchableOpacity>

                  <ScrollView>
                    <View style={styles.fieldscontainer}>
                      <Text style={styles.label}>Name</Text>

                      <TextInput
                        style={styles.input}
                        label={<Text style={styles.labeltext}>Name</Text>}
                        caretHidden={false}
                        placeholderTextColor={colors.TextGrey}
                        onChangeText={value => {
                          setAddName(value);
                        }}
                        cursorColor={colors.textColor}
                        mode="outlined"
                        activeOutlineColor={colors.secondaryColor}
                        outlineColor={colors.Grey}
                        value={addName}
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
                      <Text style={styles.label}>Select Date & Time </Text>
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
                    {/* <View style={styles.fieldscontainer}> */}
                    <DropDownPicker
                      placeholder="Select Competition"
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
                        width: '100%',
                        // marginHorizontal: 20,
                        // marginTop: 20,
                        //   maxWidth: 180,
                      }}
                      placeholderStyle={styles.placeholderstyle}
                    />
                    {/* </View> */}

                    <View style={styles.fieldscontainer}>
                      <TextInput
                        style={styles.input}
                        label={<Text style={styles.labeltext}>Score</Text>}
                        caretHidden={false}
                        placeholderTextColor={colors.TextGrey}
                        onChangeText={value => {
                          setAddScore(value);
                        }}
                        cursorColor={colors.textColor}
                        mode="outlined"
                        activeOutlineColor={colors.secondaryColor}
                        outlineColor={colors.Grey}
                        value={addScore}
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

                    <DropDownPicker
                      placeholder="Select Level"
                      open={selectLevelOpen}
                      onOpen={{}}
                      value={selectLevelValue}
                      items={selectLevelItem}
                      setOpen={setselectLevelOpen}
                      setValue={setselectLevelValue}
                      setItems={setselectLevelItem}
                      style={[styles.ddinput, {zIndex: 10}]}
                      dropDownContainerStyle={{
                        borderColor: colors.borderColor,
                        width: '100%',
                      }}
                      placeholderStyle={styles.placeholderstyle}
                    />

                    <AppButton
                      style={{marginHorizontal: 0, marginTop: 30}}
                      title="Submit"
                      onPress={() => {
                        setFloatModalVisibility(!floatModalVisibility);
                      }}
                    />
                    <DateTimePickerModal
                      isVisible={isDatePickerVisible}
                      mode={'date'}
                      minimumDate={new Date()} // Ensuring future time
                      onConfirm={handleConfirm}
                      onCancel={hideDatePicker}
                    />
                  </ScrollView>
                </KeyboardAvoidingView>
              </View>
            </View>
          </Modal>
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
    marginBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
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
  dateView: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.Grey,
    height: 55,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateText: {
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
    paddingHorizontal: 20,
    paddingVertical: 10,
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
  input: {
    backgroundColor: colors.white,
    fontSize: 14,
    marginBottom: 16,
    fontFamily: 'Poppins-Bold',
    color: colors.textColor,
  },
  modalBg: {
    backgroundColor: '#000000aa',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalViewBg: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 25,
    width: '90%',
  },
  label: {
    color: '#888888',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginBottom: 5,
  },
  modalheadView: {
    alignSelf: 'center',
    marginBottom: 30,
  },
  modalHead: {
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
    color: colors.black,
  },
  fab: {
    position: 'absolute',
    margin: 24,
    right: 0,
    borderRadius: 100,
    bottom: 0,
    backgroundColor: '#0F67B1',
  },
});

export default Competition;
