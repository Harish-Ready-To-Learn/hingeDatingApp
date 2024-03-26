import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const DobScreen = () => {
  const navigation = useNavigation();

  const monthRef = useRef(null);
  const yearRef = useRef(null);

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleDayChange = text => {
    setDay(text);
    if (text.length == 2) {
      monthRef.current.focus();
    }
  };
  const handleMonthChange = text => {
    setMonth(text);
    if (text.length == 2) {
      yearRef.current.focus();
    }
  };
  const handleYearChange = text => {
    setYear(text);
  };

  const handleNext = () => {
    navigation.navigate('LocationScreen');
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
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 15,
          }}>
          What's your date of birth?
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 80,
            gap: 10,
            justifyContent: 'center',
          }}>
          <TextInput
            value={day}
            onChangeText={handleDayChange}
            placeholder="DD"
            placeholderTextColor={'#BEBEBE'}
            maxLength={2}
            keyboardType="numeric"
            style={{
              width: 50,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              padding: 10,
              color: 'black',
              fontSize: 22,
            }}
          />
          <TextInput
            ref={monthRef}
            value={month}
            onChangeText={handleMonthChange}
            placeholder="MM"
            placeholderTextColor={'#BEBEBE'}
            maxLength={2}
            keyboardType="numeric"
            style={{
              width: 60,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              padding: 10,
              color: 'black',
              fontSize: 22,
            }}
          />
          <TextInput
            ref={yearRef}
            value={year}
            onChangeText={handleYearChange}
            placeholder="YYYY"
            placeholderTextColor={'#BEBEBE'}
            maxLength={4}
            keyboardType="numeric"
            style={{
              width: 75,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              padding: 10,
              color: 'black',
              fontSize: 22,
            }}
          />
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
    </SafeAreaView>
  );
};

export default DobScreen;

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
