import {useEffect, useState} from 'react';
import movieDb from '../api/movieDb';
import {MovieFull} from '../interfaces/movieInterface';
import {CreditsResponse, Cast} from '../interfaces/creditsInterfaces';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useDetails = (movieId: number) => {
  const [movieDetalis, setMovieDetalis] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });
  const getMovieDetails = async () => {
    const responseDetails = movieDb.get<MovieFull>(`/${movieId}`);
    const responseCast = movieDb.get<CreditsResponse>(`${movieId}/credits`);
    const [movieDetailsResponse, movieCreditsResponse] = await Promise.all([
      responseDetails,
      responseCast,
    ]);
    setMovieDetalis({
      isLoading: false,
      movieFull: movieDetailsResponse.data,
      cast: movieCreditsResponse.data.cast,
    });
  };
  useEffect(() => {
    getMovieDetails();
  }, []);
  return {
    ...movieDetalis,
  };
};
