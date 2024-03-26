import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import BottomNavigation from './BottomNavigation';
import MainStack from './MainStack';
import AuthStack from './AuthStack';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
