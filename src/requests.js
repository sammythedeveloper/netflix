const API_KEY ="75caed8ed10401fc2dc2e4f642fc0aca"
const requests = {
    fetchNetflixOrginals: `/discover/tv/?api_key=${API_KEY}&with_network=12`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchAdventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchCrime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  };
  export default requests