import React from 'react';
import {View, Button, Animated} from 'react-native';
import {useFade} from '../hooks/useFade';

const FadeScreen = () => {
  const {opacity, fadeIn, fadeOut} = useFade();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#086F6A',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          opacity,
          marginBottom: 10,
        }}></Animated.View>
      <Button title="FadeIn" onPress={fadeIn} />
      <Button title="FadeOut" onPress={fadeOut} />
    </View>
  );
};

export default FadeScreen;
