import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import Home from '../views/Home';

export type StackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export type StackProps<T extends keyof StackParamList> = {
  navigation: NativeStackNavigationProp<StackParamList, T>;
  route?: RouteProp<StackParamList, T>;
};

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Routes;
