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
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const PasswordScreen = () => {
  const navigation = useNavigation();

  const [password, setPassword] = useState('');

  const handleNext = () => {
    navigation.navigate('DobScreen');
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
            <AntDesign name="lock1" size={26} color="black" />
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
            Please choose a password
          </Text>
          <View style={{alignSelf: 'center'}}>
            <TextInput
              // autoFocus={true}
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="Enter your password"
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
          </View>
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
      </View>
    </SafeAreaView>
  );
};

export default PasswordScreen;

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
