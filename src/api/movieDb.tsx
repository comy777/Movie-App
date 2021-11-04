import axios from 'axios';

const movieDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '8a665d7e2f818607942a5c84bc2b443a',
    language: 'es-ES',
  },
});

export default movieDb;
