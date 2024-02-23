const requests = [
	// Movies
	{
		queryKey: "NetflixOriginalsMovies",
		fetchUrl: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
	},
	{
		queryKey: "TopRatedMovies",
		fetchUrl: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
	},
	{
		queryKey: "ActionMovies",
		fetchUrl: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
	},
	{
		queryKey: "ComedyMovies",
		fetchUrl: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
	},
	{
		queryKey: "DocumentaryMovies",
		fetchUrl: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
	},
	{
		queryKey: "HorrorMovies",
		fetchUrl: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
	},
	{
		queryKey: "RomanceMovies",
		fetchUrl: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
	},
	{
		queryKey: "ScienceFictionMovies",
		fetchUrl: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=878`,
	},
	{
		queryKey: "WarMovies",
		fetchUrl: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10752`,
	},
	// TV
	{
		queryKey: "NetflixOriginalsTV",
		fetchUrl: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
	},
	{
		queryKey: "TopRatedTV",
		fetchUrl: `/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
	},
	{
		queryKey: "Action&AdventureTV",
		fetchUrl: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10759`,
	},
	{
		queryKey: "AnimationTV",
		fetchUrl: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=16`,
	},
	{
		queryKey: "ComedyTV",
		fetchUrl: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
	},
	{
		queryKey: "CrimeTV",
		fetchUrl: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=80`,
	},
	{
		queryKey: "DocumentaryTV",
		fetchUrl: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
	},
	{
		queryKey: "KidsTV",
		fetchUrl: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10762`,
	},
	{
		queryKey: "NewsTV",
		fetchUrl: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10763`,
	},
	{
		queryKey: "WesternTV",
		fetchUrl: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=37`,
	},
];

export default requests;
