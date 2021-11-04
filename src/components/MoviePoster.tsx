import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
  const {title, poster_path} = movie;
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('details', movie)}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
      }}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    shadowColor: '#008',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderRadius: 18,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});

export default MoviePoster;
