const API_KEY = "bdf6f6ad60c894bd5a6232000c8f6b06";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movies?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movies?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movies?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movies?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumenttaries: `/discover/movies?api_key=${API_KEY}&with_genres=99`,

}
export default requests;
