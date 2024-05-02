import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveRegistrationData = async (screenName, data) => {
  try {
    const key = `register_${screenName}`;
    await AsyncStorage.setItem(key, JSON.stringify(data));
    console.log(`${screenName} data was saved...!`);
  } catch (error) {
    console.log('ERROR in SAVING DATA', error);
  }
};

export const getRegistrationData = async screenName => {
  try {
    const key = `register_${screenName}`;
    const data = await AsyncStorage.getItem(key);
    return data !== null ? JSON.parse(data) : null;
  } catch (error) {
    console.log('ERROR in RETRIEVING DATA', error);
  }
};
