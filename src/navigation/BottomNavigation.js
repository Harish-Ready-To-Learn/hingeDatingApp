import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import LikesScreen from '../screens/LikesScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';

const BottomNavigation = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator screenOptions={() => ({tabBarShowLabel: false})}>
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarStyle: {backgroundColor: '#101010'},
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <MaterialCommunityIcons name="alpha" size={26} color="white" />
            ) : (
              <MaterialCommunityIcons name="alpha" size={26} color="#989898" />
            ),
        }}
      />
      <BottomTab.Screen
        name="LikesScreen"
        component={LikesScreen}
        options={{
          tabBarStyle: {backgroundColor: '#101010'},
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Entypo name="heart" size={26} color="white" />
            ) : (
              <Entypo name="heart" size={26} color="#989898" />
            ),
        }}
      />
      <BottomTab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          tabBarStyle: {backgroundColor: '#101010'},
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <MaterialIcons
                name="chat-bubble-outline"
                size={26}
                color="white"
              />
            ) : (
              <MaterialIcons
                name="chat-bubble-outline"
                size={26}
                color="#989898"
              />
            ),
        }}
      />
      <BottomTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarStyle: {backgroundColor: '#101010'},
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="person-circle-outline" size={26} color="white" />
            ) : (
              <Ionicons
                name="person-circle-outline"
                size={26}
                color="#989898"
              />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
