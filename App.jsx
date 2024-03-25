import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Fontisto';

const App = () => {
  return (
    <SafeAreaView>
      <Text>App</Text>
      <Icon name="email" size={26} color="#900" />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})