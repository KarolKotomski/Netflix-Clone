const requests = {
	// Movies
	fetchNetflixOriginals: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
	fetchTopRatedMovie: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
	fetchDocumentaries: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
	fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
	fetchScienceFictionMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=878`,
	fetchWarMovie: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10752`,

	// TV Shows
	fetchNetflixOriginalsTv: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
	fetchTopRatedTv: `/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
	fetchActionAndAdventureTV: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10759`,
	fetchAnimationTV: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=16`,
	fetchComedyTV: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
	fetchCrimeTV: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=80`,
	fetchDocumentaryTV: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
	fetchKidsTV: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10762`,
	fetchNewsTV: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10763`,
	fetchWesternTV: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=37`,
};

export default requests;
