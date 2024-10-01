import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIn from '../screens/Auth/Login';
import HeaderLeft from '../components/HeaderLeft';
import { navigationRef } from '../components/RootNavigation';
import ForgotPassword from '../screens/Auth/forgotpassword';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="LogIn"
        component={LogIn}
        options={{headerShown: false}}
      />
     <Stack.Screen
        name="forgotpassword"
        component={ForgotPassword}
        options={{
          headerTitle: 'Forgot Password',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTitleAlign:"center",
          headerTitleStyle: {fontSize: 16, fontFamily: 'Poppins-SemiBold'},
          headerLeft: () => <HeaderLeft navigation={navigationRef} />,
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
