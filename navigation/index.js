import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../components/RootNavigation';
import SplashScreenPage from '../screens/splashscreen';
import MyDrawer from './DrawerNavigation';
import AuthStack from './authNavigation';
import HeaderLeft from '../components/HeaderLeft';
import { colors } from '../utils';
import Scheduled from '../screens/Attendance/Scheduled';
import Manual from '../screens/Attendance/manual';
import Individual from '../screens/Performance/individual';
import AddStudent from '../screens/addStudent';
import Overall from '../screens/Performance/overall';
import StudentPerformance from '../screens/studentperf';

const Stack = createNativeStackNavigator();

function AppContainer() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreenPage}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="DrawerTab"
          component={MyDrawer}
          options={{headerShown: false}}
        />

<Stack.Screen
          name="Scheduled"
          component={Scheduled}
          options={{
            headerTitle: 'Scheduled',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: colors.secondaryColor,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Poppins-Medium',
              color:colors.white
            },
            headerLeft: () => <HeaderLeft navigation={navigationRef} />,
          }}
        />
        <Stack.Screen
          name="Manual"
          component={Manual}
          options={{
            headerTitle: 'Manual',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: colors.secondaryColor,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Poppins-Medium',
              color:colors.white
            },
            headerLeft: () => <HeaderLeft navigation={navigationRef} />,
          }}
        />
         <Stack.Screen
          name="Individual"
          component={Individual}
          options={{
            headerTitle: 'Performance',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: colors.secondaryColor,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Poppins-Medium',
              color:colors.white
            },
            headerLeft: () => <HeaderLeft navigation={navigationRef} />,
          }}
        />
            <Stack.Screen
          name="Overall"
          component={Overall}
          options={{
            headerTitle: 'Overall Performance',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: colors.secondaryColor,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Poppins-Medium',
              color:colors.white
            },
            headerLeft: () => <HeaderLeft navigation={navigationRef} />,
          }}
        />
            <Stack.Screen
          name="StudentPerformance"
          component={StudentPerformance}
          options={{
            headerTitle: 'Individual Performance',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: colors.secondaryColor,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Poppins-Medium',
              color:colors.white
            },
            headerLeft: () => <HeaderLeft navigation={navigationRef} />,
          }}
        />

          <Stack.Screen
          name="AddStudent"
          component={AddStudent}
          options={{
            headerTitle: 'Add Student',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: colors.secondaryColor,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Poppins-Medium',
              color:colors.white
            },
            headerLeft: () => <HeaderLeft navigation={navigationRef} />,
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;
