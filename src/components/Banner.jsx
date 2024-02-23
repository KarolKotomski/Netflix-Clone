import triangle from "../icons/triangle.png";
import info from "../icons/info.png";
import { useTMDBdata } from "../hooks/useTMDBdata";

const Banner = ({ fetchUrl, queryId }) => {
	const { data, isLoading, isError, error } = useTMDBdata(fetchUrl, queryId);

	const randomBannerIndex = data
		? data[Math.floor(Math.random() * data.length - 1)]
		: null;

	isError && console.error("error:", error.message);

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
					randomBannerIndex &&
					`url("https://image.tmdb.org/t/p/original/${randomBannerIndex.backdrop_path}")`,
			}}>
			<div className='container_long'>
				<div className='banner_container_long'>
					<div className='content'>
						<h1 className='title'>
							{isLoading
								? "Loading..."
								: randomBannerIndex?.title ||
								  randomBannerIndex?.name ||
								  randomBannerIndex?.original_name}
						</h1>
						{randomBannerIndex && (
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

						<p className='description'>
							{truncate(randomBannerIndex?.overview, 200)}
						</p>
					</div>
				</div>
			</div>
			<div className='banner_fade_bottom'></div>
		</section>
	);
};

export default Banner;
