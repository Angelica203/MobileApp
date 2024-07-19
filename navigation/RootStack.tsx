
import React from 'react';
import { Colors } from './../components/styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import CreateEvent from '../screens/CreateEvent';

const { primary, tertiary } = Colors;

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  CreateEvent: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: primary,
          },
          headerTintColor: tertiary,
          headerTransparent: true,
          headerTitle: '',
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="CreateEvent" component={CreateEvent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
