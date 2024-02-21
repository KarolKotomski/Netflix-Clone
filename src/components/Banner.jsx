import axios from "../axios/axios";
import triangle from "../icons/triangle.png";
import info from "../icons/info.png";
import { useQuery } from "react-query";

const Banner = ({ fetchUrl, queryId }) => {
	const { data, isLoading, error } = useQuery(
		queryId,
		() => {
			return axios.get(fetchUrl).then((res) => res.data.results);
		},
		{
			staleTime: 600000,
		}
	);

	const randomBannerImageIndex = data
		? data[Math.floor(Math.random() * data.length - 1)]
		: null;

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
					randomBannerImageIndex &&
					`url("https://image.tmdb.org/t/p/original/${randomBannerImageIndex.backdrop_path}")`,
			}}>
			<div className='container_long'>
				<div className='banner_container_long'>
					<div className='content'>
						<h1 className='title'>
							{isLoading
								? "Loading..."
								: randomBannerImageIndex?.title ||
								  randomBannerImageIndex?.name ||
								  randomBannerImageIndex?.original_name}
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
