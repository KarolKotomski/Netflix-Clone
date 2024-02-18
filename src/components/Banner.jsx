import axios from "../axios/axios";
import triangle from "../icons/triangle.png";
import info from "../icons/info.png";
import { useQuery } from "react-query";

const Banner = ({ fetchUrl }) => {
	const { data, isLoading, error } = useQuery([], () => {
		return axios
			.get(fetchUrl)
			.then(
				(res) =>
					res.data.results[
						Math.floor(Math.random() * res.data.results.length - 1)
					]
			);
	});

	error && console.error("error:", error.message);

	const truncate = (string, number) => {
		return string?.length > number
			? string.substr(0, number - 1) + "..."
			: string;
	};

	return (
		<section
			className='banner'
			style={{
				backgroundImage:
					data &&
					`url("https://image.tmdb.org/t/p/original/${data.backdrop_path}")`,
			}}>
			<div className='container_long'>
				<div className='banner_container_long'>
					<div className='content'>
						<h1 className='title'>
							{isLoading
								? "Loading..."
								: data?.title || data?.name || data?.original_name}
						</h1>
						{data && (
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
						)}

						<p className='description'>{truncate(data?.overview, 200)}</p>
					</div>
				</div>
			</div>
			<div className='banner_fade_bottom'></div>
		</section>
	);
};

export default Banner;
