// clé_API:d8f59f32b799bb737a3a611fe6d4dfa2
//https://api.themoviedb.org/3

const API_KEY = "d8f59f32b799bb737a3a611fe6d4dfa2";
const BASE_URL = "https://api.themoviedb.org/3";

const request = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `${BASE_URL}/discover/movie?with_genres=18&primary_release_year=2014&api_key=${API_KEY}`,
  fetchActionMovies: `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${API_KEY}`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?certification_country=US&certification=R&sort_by=revenue.desc&with_cast=3896&api_key=${API_KEY}`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&api_key=${API_KEY}`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${API_KEY}`,
};

export default request;
