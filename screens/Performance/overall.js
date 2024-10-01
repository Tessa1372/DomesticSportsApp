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
  Dimensions,
} from 'react-native';
import Loader from '../../components/Loader/Loader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import {colors} from '../../utils';
import CheckBox from '@react-native-community/checkbox';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const Overall = ({navigation}) => {
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
    {label: 'Cricket', value: 'Cricket'},
    {label: 'Basketball', value: 'Basketball'},
    {label: 'Football', value: 'Football'},
    {label: 'Volleyball', value: 'Volleyball'},
  ]);

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 100, 43],
        color: (opacity = 1) => `rgba(0, 150, 136, ${opacity})`,
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Overall Performance'], // optional
  };

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    labelColor: (opacity = 1) => `rgba(17, 17, 17, ${opacity})`,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: true, // optional
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
            placeholderStyle={styles.placeholderstyle}
          />
          <View style={{alignSelf: 'center', marginVertical: 25}}>
            <LineChart
              data={data}
              width={Dimensions.get('window').width * 0.8}
              height={220}
              chartConfig={chartConfig}
            />
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

export default Overall;
