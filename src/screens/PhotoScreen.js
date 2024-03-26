import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';

const PhotoScreen = () => {
  const navigation = useNavigation();

  const [imageUrls, setImageUrls] = useState(['', '', '', '', '', '']);
  const [imageUrlText, setImageUrlText] = useState('');

  const handleAddImage = () => {
    // Find the first empty slot in  the "imageUrls" array
    const index = imageUrls?.findIndex(url => url === '');
    console.log(imageUrlText);
    if (index != -1) {
      const updatedUrls = [...imageUrls];
      updatedUrls[index] = imageUrlText;
      setImageUrls(updatedUrls);
      setImageUrlText('');
    }
  };

  const handleNext = () => {
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
            <MaterialIcons name="photo-camera-back" size={26} color="black" />
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
            Pick your photos and videos
          </Text>
          <View style={{marginTop: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 20,
              }}>
              {imageUrls.slice(0, 3).map((url, index) => (
                <Pressable
                  key={index}
                  style={{
                    borderColor: '#581845',
                    borderWidth: url ? 0 : 2,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderStyle: 'dashed',
                    borderRadius: 10,
                    height: 100,
                  }}>
                  {url ? (
                    <Image
                      style={{height: '100%', width: '100%', borderRadius: 10}}
                      source={{uri: url}}
                    />
                  ) : (
                    <EvilIcons name="image" size={22} color="black" />
                  )}
                </Pressable>
              ))}
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 20,
                marginTop: 20,
              }}>
              {imageUrls.slice(3, 6).map((url, index) => (
                <Pressable
                  key={index}
                  style={{
                    borderColor: '#581845',
                    borderWidth: url ? 0 : 2,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderStyle: 'dashed',
                    borderRadius: 10,
                    height: 100,
                  }}>
                  {url ? (
                    <Image
                      style={{height: 100, width: 100, borderRadius: 10}}
                      source={{uri: url}}
                    />
                  ) : (
                    <EvilIcons name="image" size={22} color="black" />
                  )}
                </Pressable>
              ))}
            </View>
          </View>

          <View style={{marginVertical: 10}}>
            <Text style={{color: 'gray', fontSize: 15}}>Drag to re-order</Text>
            <Text
              style={{
                color: '#581845',
                fontSize: 15,
                fontWeight: '500',
                marginTop: 3,
              }}>
              Add four to six photos
            </Text>
          </View>

          <View style={{marginVertical: 25}}>
            <Text>Add a picture of yourself</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                paddingVertical: 5,
                marginTop: 5,
                paddingVertical: 5,
                borderRadius: 5,
                backgroundColor: '#DCDCDC',
              }}>
              <EvilIcons
                style={{marginLeft: 8}}
                name="image"
                size={22}
                color="black"
              />
              <TextInput
                value={imageUrlText}
                onChangeText={text => setImageUrlText(text)}
                placeholder="Enter your image-url"
                placeholderTextColor={'#BEBEBE'}
                style={{
                  color: 'gray',
                  width: 300,
                }}
                secureTextEntry={false}
              />
            </View>
            <Button title="Add Image" onPress={handleAddImage} />
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

export default PhotoScreen;

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
