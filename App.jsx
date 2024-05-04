import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import BottomNavigation from './src/navigation/BottomNavigation';
import StackNavigator from './src/navigation/StackNavigator';
import {ModalPortal} from 'react-native-modals';
import {AuthProvider} from './src/AuthContext';

const App = () => {
  return (
    <>
      <AuthProvider>
        <>
          <StackNavigator />
          <ModalPortal />
        </>
      </AuthProvider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
