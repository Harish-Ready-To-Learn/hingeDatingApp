import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {
  getRegistrationData,
  saveRegistrationData,
} from '../utils/registrationUtils';

const LookingForScreen = () => {
  const navigation = useNavigation();

  const [lookingFor, setLookingFor] = useState('');

  useEffect(() => {
    getRegistrationData('LookingFor').then(data => {
      if (data) {
        setLookingFor(data.lookingFor || '');
      }
    });
  }, []);

  const handleNext = () => {
    if (lookingFor.trim() !== '') {
      saveRegistrationData('LookingFor', {lookingFor});
    }
    navigation.navigate('HomeTownScreen');
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
            <MaterialCommunityIcons
              name="cake-variant-outline"
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
        <View style={{marginTop: 15}}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
            What's your dating intention?
          </Text>
          <View style={{marginTop: 20}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 15, color: 'black', fontWeight: '500'}}>
                Life Partner
              </Text>
              <Pressable onPress={() => setLookingFor('Life Partner')}>
                <FontAwesome
                  name="circle"
                  size={26}
                  color={lookingFor == 'Life Partner' ? '#581845' : 'lightgray'}
                />
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 12,
              }}>
              <Text style={{fontSize: 15, color: 'black', fontWeight: '500'}}>
                Long-term relationship
              </Text>
              <Pressable
                onPress={() => setLookingFor('Long-term relationship')}>
                <FontAwesome
                  name="circle"
                  size={26}
                  color={
                    lookingFor == 'Long-term relationship'
                      ? '#581845'
                      : 'lightgray'
                  }
                />
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 12,
              }}>
              <Text style={{fontSize: 15, color: 'black', fontWeight: '500'}}>
                Long-term relationship open to short
              </Text>
              <Pressable
                onPress={() =>
                  setLookingFor('Long-term relationship open to short')
                }>
                <FontAwesome
                  name="circle"
                  size={26}
                  color={
                    lookingFor == 'Long-term relationship open to short'
                      ? '#581845'
                      : 'lightgray'
                  }
                />
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 12,
              }}>
              <Text style={{fontSize: 15, color: 'black', fontWeight: '500'}}>
                Short-term relationship
              </Text>
              <Pressable
                onPress={() => setLookingFor('Short-term relationship')}>
                <FontAwesome
                  name="circle"
                  size={26}
                  color={
                    lookingFor == 'Short-term relationship'
                      ? '#581845'
                      : 'lightgray'
                  }
                />
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 12,
              }}>
              <Text style={{fontSize: 15, color: 'black', fontWeight: '500'}}>
                Short-term relationship open to long
              </Text>
              <Pressable
                onPress={() =>
                  setLookingFor('Short-term relationship open to long')
                }>
                <FontAwesome
                  name="circle"
                  size={26}
                  color={
                    lookingFor == 'Short-term relationship open to long'
                      ? '#581845'
                      : 'lightgray'
                  }
                />
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 12,
              }}>
              <Text style={{fontSize: 15, color: 'black', fontWeight: '500'}}>
                Figuring out my dating goal
              </Text>
              <Pressable
                onPress={() => setLookingFor('Figuring out my dating goal')}>
                <FontAwesome
                  name="circle"
                  size={26}
                  color={
                    lookingFor == 'Figuring out my dating goal'
                      ? '#581845'
                      : 'lightgray'
                  }
                />
              </Pressable>
            </View>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}>
              <AntDesign name="checksquare" size={26} color={'#581845'} />
              <Text style={{fontSize: 15, color: 'black'}}>
                Visible on profile
              </Text>
            </View>
          </View>
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

export default LookingForScreen;

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
