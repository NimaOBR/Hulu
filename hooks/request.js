const APIKEY = `a7a5c2539c24f1275bab07a8e7a66080`;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  },
  fetchActionsMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=${APIKEY}&with_genres=9648`,
  },
  fetcSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${APIKEY}&with_genres=878`,
  },
  fetcWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${APIKEY}&with_genres=37`,
  },
  fetcAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${APIKEY}&with_genres=16`,
  },
  fetcTV: {
    title: "TV-Movie",
    url: `/discover/movie?api_key=${APIKEY}&with_genres=10770`,
  }
};
