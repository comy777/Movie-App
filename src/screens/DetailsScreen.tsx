import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RootStackParams} from '../routes/Navigation';
import {useDetails} from '../hooks/useDetails';
import MovieDetails from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'details'> {}

const {height: heightScreen} = Dimensions.get('window');

const DetailsScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const {poster_path, original_title, title, id} = movie;
  const {isLoading, cast, movieFull} = useDetails(id);
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <ScrollView>
      <View style={styles.imageBorder}>
        <View style={styles.imageContainer}>
          <Image source={{uri}} style={styles.image} />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{original_title}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size={35} color="teal" style={{marginTop: 20}} />
      ) : (
        <MovieDetails movieFull={movieFull!} cast={cast} />
      )}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-outline" color="white" size={60} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: heightScreen * 0.7,
    shadowColor: '#008',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
  imageBorder: {
    flex: 1,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 28,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backBtn: {
    position: 'absolute',
    elevation: 9,
    top: 30,
    left: 5,
  },
});

export default DetailsScreen;
