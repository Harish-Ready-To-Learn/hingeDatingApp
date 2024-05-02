import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Share,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AskForDateScreen = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={{fontSize: 30, color: 'black'}}>Oii Angry Bird🐒</Text>
      <Pressable
        style={{
          borderWidth: 1,
          borderColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          marginTop: 10,
          borderRadius: 10,
          backgroundColor: '#000',
        }}
        onPress={() => navigation.navigate('AskForDateNextScreen')}>
        <Text style={{fontSize: 15, color: 'white'}}>Idha Click Pannu</Text>
      </Pressable>
    </View>
  );
};

export default AskForDateScreen;

const styles = StyleSheet.create({});
