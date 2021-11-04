import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import {MovieFull} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterfaces';
import CastItem from './CastItem';
import {FlatList} from 'react-native-gesture-handler';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

const MovieDetails = ({movieFull, cast}: Props) => {
  const {vote_average, genres, overview, budget} = movieFull;
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="gray" size={16} />
          <Text>{vote_average}</Text>
          <Text style={{marginLeft: 5}}>
            - {genres.map(g => g.name).join(', ')}
          </Text>
        </View>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Historia
        </Text>
        <Text style={{fontSize: 16}}>{overview}</Text>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 18}}>
          {currencyFormatter.format(budget, {code: 'USD'})}
        </Text>
        <View style={{marginTop: 10, marginBottom: 100}}>
          <Text
            style={{
              fontSize: 23,
              marginTop: 10,
              fontWeight: 'bold',
            }}>
            Actores
          </Text>
          <FlatList
            data={cast}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <CastItem actor={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              marginTop: 10,
              height: 70,
            }}
          />
        </View>
      </View>
    </>
  );
};

export default MovieDetails;
