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

const HomeTownScreen = () => {
  const navigation = useNavigation();

  const [homeTown, setHomeTown] = useState('');

  useEffect(() => {
    getRegistrationData('HomeTown').then(data => {
      if (data) {
        setHomeTown(data);
      }
    });
  }, []);

  const handleNext = () => {
    if (homeTown.trim() !== '') {
      saveRegistrationData('HomeTown', homeTown);
    }
    navigation.navigate('PhotoScreen');
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
            <AntDesign name="hearto" size={26} color="black" />
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
            Where's your hometown?
          </Text>

          <TextInput
            // autoFocus={true}
            keyboardType="email-address"
            value={homeTown}
            onChangeText={text => setHomeTown(text)}
            placeholder="HomeTown"
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

export default HomeTownScreen;

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
