import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Share,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const AskForDateNextScreen = () => {
  const [showNoText, setShowNoText] = useState(false);
  const [noTextCount, setNoTextCount] = useState(0);
  const noText = [
    '',
    'Serious ah😞',
    'Ice tea vaangi tharen ji...',
    'Pavam la Naanu',
    'ini attitude pathi pesa mattaa',
    'Olunga OK Solliru...💕',
    'Oru time kooda unna Velia kootitu Ponadhu illa........',
  ];
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'mmm, vandhu tholaira. Enna enga kootitu pova..?',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  const onPressNo = () => {
    setNoTextCount(noTextCount + 1);
    setShowNoText(true);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <LottieView
          style={styles.lottieView}
          source={require('../assets/love.json')}
          autoPlay
          loop
          speed={0.7}
        />
      </View>
      <Text
        style={{
          fontSize: 32,
          fontWeight: 'bold',
          marginLeft: 20,
          color: '#000',
        }}>
        Oru Kutti Coffee Date Polama...?
      </Text>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <Pressable
          style={{
            borderWidth: 1,
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            marginTop: 10,
            borderRadius: 10,
            backgroundColor: '#000',
            width: 50,
          }}
          onPress={onShare}>
          <Text>Yes</Text>
        </Pressable>
        <Pressable
          style={{
            borderWidth: 1,
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            marginTop: 10,
            borderRadius: 10,
            backgroundColor: '#000',
            width: 50,
          }}
          onPress={onPressNo}>
          <Text>No</Text>
        </Pressable>
      </View>
      {showNoText && (
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 20,
              color: '#000',
              marginTop: 20,
            }}>
            {noText[noTextCount]}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default AskForDateNextScreen;

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
