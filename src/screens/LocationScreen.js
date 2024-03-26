import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';
import GeoLocation from '@react-native-community/geolocation';
import GetLocation from 'react-native-get-location';
import {
  isLocationEnabled,
  promptForEnableLocationIfNeeded,
} from 'react-native-android-location-enabler';

const LocationScreen = () => {
  const navigation = useNavigation();

  const [location, setLocation] = useState('');
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [coordinates, setCoordinates] = useState([
    {
      latitude: 12.9716,
      longitude: 77.5946,
    },
    {
      longitude: 13.0451,
      latitude: 77.6269,
    },
  ]);

  useEffect(() => {
    reqPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This App needs to Access your location',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };
  const requestLocationPermission2 = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This App needs to Access your location',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const reqPermission = async () => {
    if (Platform.OS === 'android') {
      const checkEnabled = await isLocationEnabled();
      console.log('checkEnabled', checkEnabled);
      if (!checkEnabled) {
        try {
          const enableResult = await promptForEnableLocationIfNeeded();
          console.log('enableResult', enableResult);
          // The user has accepted to enable the location services
          // data can be :
          //  - "already-enabled" if the location services has been already enabled
          //  - "enabled" if user has clicked on OK button in the popup
        } catch (error) {
          if (error instanceof Error) {
            console.error(error.message);
            // The user has not accepted to enable the location services or something went wrong during the process
            // "err" : { "code" : "ERR00|ERR01|ERR02|ERR03", "message" : "message"}
            // codes :
            //  - ERR00 : The user has clicked on Cancel button in the popup
            //  - ERR01 : If the Settings change are unavailable
            //  - ERR02 : If the popup has failed to open
            //  - ERR03 : Internal error
          }
        }
      }
    }
    let accessLocationPermission = await requestLocationPermission();
    let coarseLocationPermission = await requestLocationPermission2();
    console.log('PERMISSIONS,', accessLocationPermission);
    console.log('PERMISSIONS,', coarseLocationPermission);
    if (accessLocationPermission && coarseLocationPermission) {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
      })
        .then(position => {
          console.log('POSITIONS', position);
          const {latitude, longitude} = position;
          setRegion({...region, latitude, longitude});

          fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDE5_acaRsa7W1w0m_j-20CVQRjmUIQEPY`,
          )
            .then(response => response.json())
            .then(data => {
              console.log('DATA => ', data);
              if (data.results.length > 0) {
                console.log('data.results[0].formatted_address', coordinates);
                setLocation(data.results[0].formatted_address);
              }
            })
            .catch(error => console.log('error fetching the location'));
        })
        .catch(error => {
          const {code, message} = error;
          console.warn(code, message);
        });
    }
  };

  const handleMarkerDragEnd = event => {
    console.log(event);
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${event.latitude},${event.longitude}&key=AIzaSyDE5_acaRsa7W1w0m_j-20CVQRjmUIQEPY`,
    )
      .then(response => response.json())
      .then(data => {
        console.log('DATA => ', data);
        if (data.results.length > 0) {
          const addressComponents = data?.results[0].address_components;
          let formattedAddress = '';
          for (let component of addressComponents) {
            if (component.types.includes('route')) {
              formattedAddress += component.long_name + ', ';
            }
            if (component.types.includes('sublocality_level_1')) {
              formattedAddress += component.long_name + ', ';
            }
            if (component.types.includes('locality')) {
              formattedAddress += component.long_name + ', ';
            }
          }
          formattedAddress = formattedAddress.trim().slice(0, -1);
          setLocation(formattedAddress);
        }
      })
      .catch(error => console.log('error fetching the location'));
  };

  const handleNext = () => {
    navigation.navigate('GenderScreen');
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
              name="location-exit"
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
          Where do you live?
        </Text>

        <MapView
          initialRegion={{
            latitude: 11.1002556,
            longitude: 77.3249318,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{width: '100%', height: 400, marginTop: 20, borderRadius: 5}}>
          <Marker
            draggable
            onDragEnd={e => handleMarkerDragEnd(e.nativeEvent.coordinate)}
            coordinate={{latitude: 11.1002556, longitude: 77.3249318}}>
            <View
              style={{
                backgroundColor: 'black',
                paddingHorizontal: 12,
                paddingVertical: 5,
                borderRadius: 20,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 14,
                  fontWeight: '500',
                }}>
                {location}
              </Text>
            </View>
          </Marker>
        </MapView>
        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.8}
          style={{marginTop: 10, marginLeft: 'auto'}}>
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

export default LocationScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
