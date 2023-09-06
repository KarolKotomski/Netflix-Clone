import React from 'react';
import Home_Header from '../components/Home_Header';
import Home_Main from '../components/Home_Main';
import Home_Footer from '../components/Home_Footer';
import Home_Banner from '../components/Home_Banner';

const Home = () => {
  return (
		<div className='home'>
      <Home_Header />
      <Home_Banner/>
      <Home_Main />
      <Home_Footer/>
		</div>
  )
}

export default Home