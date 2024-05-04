import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../AuthContext';
import {getRegistrationData} from '../utils/registrationUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const PreFinalScreen = () => {
  const navigation = useNavigation();
  const [userDataState, setUserDataState] = useState();
  const {token, setToken} = useContext(AuthContext);

  useEffect(() => {
    getAllUserData();
  }, []);

  useEffect(() => {
    // Check if the token is set and not in loading state
    if (token) {
      // Navigate to the main screen
      navigation.navigate('MainStack', {screen: 'Main'});
    }
  }, [token, navigation]);

  const getAllUserData = async () => {
    try {
      // Define an array to store data for each screen
      const screens = [
        'name',
        'Email',
        'Password',
        'Dob',
        'Location',
        'Gender',
        'Type',
        'Dating',
        'LookingFor',
        'HomeTown',
        'Photos',
        'Prompts',
      ]; // Add more screens as needed

      let userData;

      // Retrieve data for each screen and add it to the user data object
      for (const screenName of screens) {
        const screenData = await getRegistrationData(screenName);
        if (screenData) {
          console.log(screenData);
          userData = {...userData, ...screenData}; // Merge screen data into user data
        }
      }
      // Return the combined user data
      console.log('stae', userData);
      setUserDataState(userData);
    } catch (error) {
      console.error('Error retrieving user data:', error);
      return null;
    }
  };

  const clearAllScreenData = async () => {
    try {
      const screens = [
        'name',
        'Email',
        'Password',
        'Dob',
        'Location',
        'Gender',
        'Type',
        'Dating',
        'LookingFor',
        'HomeTown',
        'Photos',
      ];
      // Loop through each screen and remove its data from AsyncStorage
      for (const screenName of screens) {
        const key = `registration_progress_${screenName}`;
        await AsyncStorage.removeItem(key);
      }
      console.log('All screen data cleared successfully');
    } catch (error) {
      console.error('Error clearing screen data:', error);
    }
  };

  const registerUser = async () => {
    try {
      console.log('hi');
      
      const response = await axios
        .post('http://10.0.2.2:3000/register', userDataState)
        .then(response => {
          console.log('response => ', response);
          const token = response.data.token;
          AsyncStorage.setItem('token', token);
          setToken(token);
        });
      // Assuming the response contains the user data and token

      // Store the token in AsyncStorage
      // navigation.replace('Main', {
      //   screen: 'Home',
      // });
      //   navigation.replace('MainStack', {screen: 'Main'});

      clearAllScreenData();
    } catch (error) {
      console.error('Error registering user:', error);
      throw error; // Throw the error for handling in the component
    }
  };
  console.log('user data', userDataState);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 80}}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginLeft: 20,
          }}>
          All set to register
        </Text>
        <Text
          style={{
            fontSize: 33,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginLeft: 20,
            marginRight: 10,
            marginTop: 10,
          }}>
          Setting up your profile for you
        </Text>
      </View>

      <View>
        <LottieView
          source={require('../assets/love.json')}
          style={{
            height: 260,
            width: 300,
            alignSelf: 'center',
            marginTop: 40,
            justifyContent: 'center',
          }}
          autoPlay
          loop={true}
          speed={0.7}
        />
      </View>

      <Pressable
        onPress={() => {
          registerUser();
        }}
        style={{backgroundColor: '#900C3F', padding: 15, marginTop: 'auto'}}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: '600',
            fontSize: 15,
          }}>
          Finish registering
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PreFinalScreen;

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
