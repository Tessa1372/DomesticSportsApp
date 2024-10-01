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
  Dimensions,
} from 'react-native';
import Loader from '../components/Loader/Loader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../utils';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const StudentPerformance = ({navigation}) => {
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

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 100, 43],
        color: (opacity = 1) => `rgba(0, 150, 136, ${opacity})`,
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Individual Performance'], // optional
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
          <View style={{alignSelf: 'center', marginVertical: 25,alignItems:"center"}}>
            <Text style={styles.txtStyle}>Student 1</Text>
            <Text style={styles.txtStyle}>Aggregate 95%</Text>

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
  txtStyle: {color: colors.black, fontSize: 16, fontFamily: 'Poppins-SemiBold',marginBottom:10},
});

export default StudentPerformance;
