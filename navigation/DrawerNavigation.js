import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from '../utils/customDrawer';
import Home from '../screens/Home/Home';
import Attendance from '../screens/attendance';
import {colors} from '../utils';
import Grade from '../screens/grade';
import Competitions from '../screens/competitions';
import Performance from '../screens/performance';
import Settings from '../screens/settings';

const Drawer = createDrawerNavigator();

const MyDrawer = props => {
  const {Navigation} = props;

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      style={{borderTopRightRadius: 20, borderBottomRightRadius: 20}}
      drawerStyle={{
        backgroundColor: 'transparent',
      }}
      screenOptions={{
        swipeEnabled: false,
        drawerActiveBackgroundColor: '#ED6D6C',
        drawerActiveTintColor: '#FFFFFF',
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Attendance"
        component={Attendance}
        options={{
          title: 'Attendance Entry',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            color: colors.white,
          },
          headerStyle: {
            backgroundColor: colors.secondaryColor,
          },
        }}
      />
      <Drawer.Screen
        name="Grade"
        component={Grade}
        options={{
          title: 'Grade',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            color: colors.white,
          },
          headerStyle: {
            backgroundColor: colors.secondaryColor,
          },
        }}
      />
      <Drawer.Screen
        name="Competitions"
        component={Competitions}
        options={{
          title: 'Competitions',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            color: colors.white,
          },
          headerStyle: {
            backgroundColor: colors.secondaryColor,
          },
        }}
      />
      <Drawer.Screen
        name="Performance"
        component={Performance}
        options={{
          title: 'Performance',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            color: colors.white,
          },
          headerStyle: {
            backgroundColor: colors.secondaryColor,
          },
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            color: colors.white,
          },
          headerStyle: {
            backgroundColor: colors.secondaryColor,
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
