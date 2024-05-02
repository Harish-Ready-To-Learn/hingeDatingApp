import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

const BasicInfoScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerTextView}>
        <Text style={styles.headerText_1}>You're on of a kind.</Text>
        <Text style={styles.headerText_2}>You're profile should be too.</Text>
      </View>
      <View>
        <LottieView
          style={styles.lottieView}
          source={require('../assets/love.json')}
          autoPlay
          loop
          speed={0.7}
        />
      </View>
      <Pressable
        style={styles.buttonView}
        onPress={() => navigation.navigate('NameScreen')}>
        <Text style={styles.buttonText}>Enter basic Info</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default BasicInfoScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerTextView: {
    marginTop: 80,
  },
  headerText_1: {
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#000',
  },
  headerText_2: {
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#000',
    marginTop: 10,
  },
  lottieView: {
    height: 260,
    width: 300,
    alignSelf: 'center',
    marginTop: 40,
    justifyContent: 'center',
  },
  buttonView: {
    backgroundColor: '#900',
    padding: 15,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '600',
    color: 'white',
    fontSize: 15,
  },
});
