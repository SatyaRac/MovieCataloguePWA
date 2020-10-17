const CONFIG = {
  KEY: 'Your API KEY from the Moviedb',
  BASE_URL: 'https://api.themoviedb.org/3/',
  BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500/',
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: new Date().toISOString(),
  DATABSE_NAME: 'movie-catalogue-database',
  DATABSE_VERSION: 1,
  OBJECT_STORE_NAME: 'movies',
  WEB_SOCKET_SERVER: 'wss://stormy-badlands-06326.herokuapp.com',
};

export default CONFIG;
