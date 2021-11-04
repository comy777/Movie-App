import React, {useContext, useEffect} from 'react';
import {View, ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useMovies} from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';
import {getColors} from '../helpers/getColors';
import {GradientContext} from '../context/GradientContext';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {isLoading, nowPlaying, popular, topRated, upcoming} = useMovies();
  const {top} = useSafeAreaInsets();
  const {setMainColors} = useContext(GradientContext);
  const getPosterColor = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary = '', secondary = ''] = await getColors(uri);
    setMainColors({primary, secondary});
  };
  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColor(0);
    }
  }, [nowPlaying]);
  if (isLoading)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator size={108} color="teal" />
      </View>
    );
  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          <View style={{height: 440}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColor(index)}
            />
          </View>
          <HorizontalSlider movies={popular} title="Populares" />
          <HorizontalSlider movies={topRated} title="Top Rated" />
          <HorizontalSlider movies={upcoming} title="Upcoming" />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default HomeScreen;
