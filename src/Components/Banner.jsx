import React, { useEffect, useState } from "react";
import axios from "../axios/axios";
import requests from "../axios/requests";
import triangle from "../icons/triangle.png";
import info from "../icons/info.png";

const Banner = () => {
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

	return (
		<div
			className='banner'
			style={{
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
			}}>
			<div className='container_long'>
				<div className='banner_container_long'>
					<div className='content'>
						<h1 className='title'>
							{movie?.title || movie?.name || movie?.original_name}
						</h1>
						<div className='buttons'>
							<button className='play_button'>
								<img
									className='traingle'
									src={triangle}
									alt='triangle play sign'
								/>
								Play
							</button>
							<button className='more_info_button'>
								<img className='info' src={info} alt='info sign' />
								More Info
							</button>
						</div>

						<p className='description'>{movie?.overview}</p>
					</div>
				</div>
			</div>
			<div className='banner_fade_bottom'></div>
		</div>
	);
};

export default Banner;
