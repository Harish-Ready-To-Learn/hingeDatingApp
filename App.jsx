import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Fontisto';
import BottomNavigation from './src/navigation/BottomNavigation';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
  return (
    <StackNavigator />
  )
}

export default App

const styles = StyleSheet.create({})