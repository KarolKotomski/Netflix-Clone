import React, { useEffect, useState } from "react";
import axios from "../axios/axios";
import requests from "../axios/requests";

const Home_Banner = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			return request;
		}

		fetchData();
	}, []);

	console.log(movie);

	return (
		<div
			className='home_banner'
			style={{
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
			}}>
			<div className='container_long'>
				<div className='home_header_container_long'>
					<div className='content'>
						<h1 className='title'>
							{movie?.title || movie?.name || movie?.original_name}
						</h1>
						<button className='play_button'>Play</button>
						<button className='more_info_button'>More Info</button>
						<p className='description'>{movie?.overview}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home_Banner;
