import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const NameScreen = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleNext = () => {
    navigation.navigate('EmailScreen');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.headerText}>NO BACKGROUND CHECKS ARE CONDUCTED</Text>
      <View style={{marginTop: 30, marginHorizontal: 20}}>
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
            <MaterialCommunityIcons
              name="newspaper-variant-outline"
              size={26}
              color="black"
            />
          </View>
          <Image
            style={{width: 100, height: 40}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}
          />
        </View>
        <View style={{marginTop: 30}}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
            What's your name?
          </Text>
          <View style={{alignSelf: 'center'}}>
            <TextInput
              // autoFocus={true}
              value={firstName}
              onChangeText={text => setFirstName(text)}
              placeholder="First Name(required)"
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
            <TextInput
              // autoFocus={true}
              value={lastName}
              onChangeText={text => setLastName(text)}
              placeholder="Last Name"
              placeholderTextColor={'#BEBEBE'}
              style={{
                width: 340,
                marginVertical: 10,
                marginTop: 20,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                paddingBottom: 10,
                color: 'black',
                fontSize: 22,
              }}
            />
          </View>
          {/* <Text style={{fontSize: 15, color: 'gray', fontWeight: '500'}}>
            Last name is optional
          </Text> */}
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
      </View>
    </SafeAreaView>
  );
};

export default NameScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    fontWeight: 'bold',
    marginTop: 50,
    color: 'gray',
    textAlign: 'center',
  },
});
