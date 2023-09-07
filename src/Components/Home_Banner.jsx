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
						<h1 className='title'>Movie title</h1>
						<button className='play_button'>Play</button>
						<button className='more_info_button'>More Info</button>
						<p className='description'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
							quaerat nam error vitae hic. Consequuntur illo minima, maxime
							quisquam quos enim perferendis dolore neque dolorum in? Eum fugiat
							delectus nam. Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Reprehenderit similique debitis iure, doloremque maxime
							suscipit voluptas itaque corporis enim dolorem saepe, ipsum amet
							quibusdam animi placeat dolorum necessitatibus vel aspernatur?
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Praesentium mollitia sequi numquam repellendus consectetur
							expedita aperiam itaque alias commodi cupiditate vel blanditiis,
							repellat maiores eligendi libero natus voluptatem impedit nihil.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home_Banner;
