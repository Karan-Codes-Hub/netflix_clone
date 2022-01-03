const Api_Key= "617eed88b22ca7c1c9d17b755b9dbaf5";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${Api_Key}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${Api_Key}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${Api_Key}&language=en-US`,
  fetchActiionMovies: `/discover/movie?api_key=${Api_Key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${Api_Key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${Api_Key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${Api_Key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${Api_Key}&with_genres=99`

}

export default requests;
