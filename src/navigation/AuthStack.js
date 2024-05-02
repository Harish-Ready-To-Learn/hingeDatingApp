import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import BasicInfoScreen from '../screens/BasicInfoScreen';
import NameScreen from '../screens/NameScreen';
import EmailScreen from '../screens/EmailScreen';
import PasswordScreen from '../screens/PasswordScreen';
import DobScreen from '../screens/DobScreen';
import LocationScreen from '../screens/LocationScreen';
import GenderScreen from '../screens/GenderScreen';
import TypeScreen from '../screens/TypeScreen';
import DatingTypeScreen from '../screens/DatingTypeScreen';
import LookingForScreen from '../screens/LookingForScreen';
import HomeTownScreen from '../screens/HomeTownScreen';
import PhotoScreen from '../screens/PhotoScreen';
import PromtScreen from '../screens/PromtScreen';
import ShowPromptScreen from '../screens/ShowPromptScreen';
import PreFinalScreen from '../screens/PreFinalScreen';
import PromptScreen from '../screens/PromtScreen';
import AskForDateScreen from '../screens/AskForDateScreen';
import AskForDateNextScreen from '../screens/AskForDateNextScreen';

const AuthStack = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator>
      {/* <AuthStack.Screen
        name="AskForDateScreen"
        component={AskForDateScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="AskForDateNextScreen"
        component={AskForDateNextScreen}
        options={{headerShown: false}}
      /> */}
      <AuthStack.Screen
        name="BasicInfoScreen"
        component={BasicInfoScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="NameScreen"
        component={NameScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="EmailScreen"
        component={EmailScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="PasswordScreen"
        component={PasswordScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="DobScreen"
        component={DobScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="LocationScreen"
        component={LocationScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="GenderScreen"
        component={GenderScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="TypeScreen"
        component={TypeScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="DatingTypeScreen"
        component={DatingTypeScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="LookingForScreen"
        component={LookingForScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="HomeTownScreen"
        component={HomeTownScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="PhotoScreen"
        component={PhotoScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="PromptScreen"
        component={PromptScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="ShowPromptScreen"
        component={ShowPromptScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="PreFinalScreen"
        component={PreFinalScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
