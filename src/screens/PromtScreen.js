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
import {useNavigation, useRoute} from '@react-navigation/native';
import {saveRegistrationData} from '../utils/registrationUtils';

const PromptScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const handleNext = () => {
    saveRegistrationData('Prompts', {prompts: route?.params?.prompts});
    navigation.navigate('PreFinalScreen');
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
            <AntDesign name="eye" size={26} color="black" />
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
            Write your profile answers
          </Text>
          <View style={{marginTop: 20, flexDirection: 'column', gap: 20}}>
            {route?.params?.prompts ? (
              route?.params?.prompts?.map((item, index) => (
                <Pressable
                  key={index}
                  onPress={() => navigation.navigate('ShowPromptScreen')}
                  style={{
                    borderColor: '#707070',
                    borderWidth: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderStyle: 'dashed',
                    borderRadius: 10,
                    height: 70,
                  }}>
                  <Text
                    style={{
                      fontWeight: '600',
                      fontStyle: 'italic',
                      fontSize: 15,
                      color: 'black',
                    }}>
                    {item?.question}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '600',
                      fontStyle: 'italic',
                      fontSize: 15,
                      marginTop: 3,
                      color: 'black',
                    }}>
                    {item?.answer}
                  </Text>
                </Pressable>
              ))
            ) : (
              <View>
                <Pressable
                  onPress={() => navigation.navigate('ShowPromptScreen')}
                  style={{
                    borderColor: '#707070',
                    borderWidth: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderStyle: 'dashed',
                    borderRadius: 10,
                    height: 70,
                  }}>
                  <Text
                    style={{
                      color: 'gray',
                      fontWeight: '600',
                      fontStyle: 'italic',
                      fontSize: 15,
                    }}>
                    Select a Prompt
                  </Text>
                  <Text
                    style={{
                      color: 'gray',
                      fontWeight: '600',
                      fontStyle: 'italic',
                      fontSize: 15,
                      marginTop: 3,
                    }}>
                    And write your own answer
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() => navigation.navigate('ShowPromptScreen')}
                  style={{
                    borderColor: '#707070',
                    borderWidth: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderStyle: 'dashed',
                    borderRadius: 10,
                    height: 70,
                    marginVertical: 15,
                  }}>
                  <Text
                    style={{
                      color: 'gray',
                      fontWeight: '600',
                      fontStyle: 'italic',
                      fontSize: 15,
                    }}>
                    Select a Prompt
                  </Text>
                  <Text
                    style={{
                      color: 'gray',
                      fontWeight: '600',
                      fontStyle: 'italic',
                      fontSize: 15,
                      marginTop: 3,
                    }}>
                    And write your own answer
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() => navigation.navigate('ShowPromptScreen')}
                  style={{
                    borderColor: '#707070',
                    borderWidth: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderStyle: 'dashed',
                    borderRadius: 10,
                    height: 70,
                  }}>
                  <Text
                    style={{
                      color: 'gray',
                      fontWeight: '600',
                      fontStyle: 'italic',
                      fontSize: 15,
                    }}>
                    Select a Prompt
                  </Text>
                  <Text
                    style={{
                      color: 'gray',
                      fontWeight: '600',
                      fontStyle: 'italic',
                      fontSize: 15,
                      marginTop: 3,
                    }}>
                    And write your own answer
                  </Text>
                </Pressable>
              </View>
            )}
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

export default PromptScreen;

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
