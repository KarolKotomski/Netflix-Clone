import React from 'react';
import HomeHeader from '../components/HomeHeader';
import HomeMain from '../components/HomeMain';
import HomeFooter from '../components/HomeFooter';
import HomeBanner from '../components/HomeBanner';

const Home = () => {
  return (
		<div className='home'>
      <HomeHeader />
      <HomeBanner/>
      <HomeMain />
      <HomeFooter/>
		</div>
  )
}

export default Home