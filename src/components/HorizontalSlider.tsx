import React from 'react';
import {View, Text, FlatList} from 'react-native';
import MoviePoster from './MoviePoster';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  title?: string;
  movies: Movie[];
}

const HorizontalSlider = ({movies, title}: Props) => {
  return (
    <View style={{height: title ? 260 : 220}}>
      {title && (
        <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 10}}>
          {title}
        </Text>
      )}
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <MoviePoster movie={item} height={200} width={140} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalSlider;
