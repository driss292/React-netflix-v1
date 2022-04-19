// clé_API:d8f59f32b799bb737a3a611fe6d4dfa2
//https://api.themoviedb.org/3

const API_KEY = "d8f59f32b799bb737a3a611fe6d4dfa2";
const BASE_URL = "https://api.themoviedb.org/3";

const request = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
  fetchActionMovies: `${BASE_URL}/discover/movie/?api_key=${API_KEY}`,
  fetchComedyMovies: `${BASE_URL}/discover/movie/?api_key=${API_KEY}`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie/?api_key=${API_KEY}`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie/?api_key=${API_KEY}`,
  fetchDocumentaries: `${BASE_URL}/discover/movie/?api_key=${API_KEY}`,
};

export default request;
