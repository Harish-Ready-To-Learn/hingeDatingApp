import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';

const MainStack = () => {
  const MainStack = createNativeStackNavigator();
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Main"
        component={BottomNavigation}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
