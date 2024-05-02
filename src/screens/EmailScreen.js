import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {
  getRegistrationData,
  saveRegistrationData,
} from '../utils/registrationUtils';

const EmailScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');

  useEffect(() => {
    getRegistrationData('Email').then(data => {
      if (data) {
        console.log(data);
        setEmail(data.email ? data.email : '');
      }
    });
  }, []);

  const handleNext = () => {
    if (email.trim() !== '') {
      saveRegistrationData('Email', {email});
    }
    navigation.navigate('PasswordScreen');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{marginTop: 90, marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              borderWidth: 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Fontisto name="email" size={26} color="black" />
          </View>
          <Image
            style={{width: 100, height: 40}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 15,
          }}>
          Please, provide a valid email
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: 'gray',
            marginTop: 10,
          }}>
          Email,verification helps us keep the account secure
        </Text>
        <TextInput
          // autoFocus={true}
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Enter your email"
          placeholderTextColor={'#BEBEBE'}
          style={{
            width: 340,
            marginVertical: 10,
            marginTop: 25,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            paddingBottom: 10,
            color: 'black',
            fontSize: 22,
          }}
        />
        <Text
          style={{
            fontSize: 15,
            color: 'gray',
            marginTop: 7,
          }}>
          Note: You will asked to verify your email
        </Text>
        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.8}
          style={{marginTop: 30, marginLeft: 'auto'}}>
          <MaterialCommunityIcons
            style={{alignSelf: 'center', marginTop: 20}}
            name="arrow-right-circle"
            size={45}
            color="#581845"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EmailScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
