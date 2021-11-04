import {useState, useEffect} from 'react';
import movieDb from '../api/movieDb';
import {MovieDBResponse, Movie} from '../interfaces/movieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });
  const getMovies = async () => {
    const nowPlayingPromises = movieDb.get<MovieDBResponse>('/now_playing');
    const popularPromises = movieDb.get<MovieDBResponse>('/popular');
    const topRatedPromises = movieDb.get<MovieDBResponse>('/top_rated');
    const upcomingPromises = movieDb.get<MovieDBResponse>('/upcoming');

    const response = await Promise.all([
      nowPlayingPromises,
      popularPromises,
      topRatedPromises,
      upcomingPromises,
    ]);
    setMovies({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return {
    isLoading,
    ...movies,
  };
};
