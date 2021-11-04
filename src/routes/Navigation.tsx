import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import {Movie} from '../interfaces/movieInterface';

export type RootStackParams = {
  home: undefined;
  details: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name="details"
        component={DetailsScreen}
        options={{title: 'Details'}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
