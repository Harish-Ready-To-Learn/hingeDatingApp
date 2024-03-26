import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const GenderScreen = () => {
  const navigation = useNavigation();

  const [gender, setGender] = useState('');

  const handleNext = () => {
    navigation.navigate('TypeScreen');
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
            Which gender describes you the best?
          </Text>
          <Text style={{fontSize: 15, color: 'gray', marginTop: 20}}>
            Hinge users are matched based on these three gender groups. You can
            add more gender after.
          </Text>
          <View style={{marginTop: 20}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 15, color: 'black', fontWeight: '500'}}>
                Men
              </Text>
              <Pressable onPress={() => setGender('Men')}>
                <FontAwesome
                  name="circle"
                  size={26}
                  color={gender == 'Men' ? '#581845' : 'lightgray'}
                />
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: 12,
              }}>
              <Text style={{fontSize: 15, color: 'black', fontWeight: '500'}}>
                Women
              </Text>
              <Pressable onPress={() => setGender('Women')}>
                <FontAwesome
                  name="circle"
                  size={26}
                  color={gender == 'Women' ? '#581845' : 'lightgray'}
                />
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 15, color: 'black', fontWeight: '500'}}>
                Non Binary
              </Text>
              <Pressable onPress={() => setGender('Non Binary')}>
                <FontAwesome
                  name="circle"
                  size={26}
                  color={gender == 'Non Binary' ? '#581845' : 'lightgray'}
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

export default GenderScreen;

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
