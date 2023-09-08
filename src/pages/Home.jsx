import React from 'react';
import HomeHeader from '../components/HomeHeader';
import HomeRow from '../components/HomeRow';
import HomeFooter from '../components/HomeFooter';
import HomeBanner from '../components/HomeBanner';
import requests from '../axios/requests';

const Home = () => {
  return (
		<div className='home'>
      <HomeHeader />
      <HomeBanner/>
      <HomeRow
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <HomeRow
        title='Top Rated'
        fetchUrl={requests.fetchTopRated}
        isLargeRow
        
      />
      <HomeRow
        title='Action Movies'
        fetchUrl={requests.fetchActionMovies}
        
      />
      <HomeRow
        title='Comedy Movies'
        fetchUrl={requests.fetchComedyMovies}
        
      />
      <HomeRow
        title='Horror Movies'
        fetchUrl={requests.fetchHorrorMovies}
        
      />
      <HomeRow
        title='Romance Movies'
        fetchUrl={requests.fetchRomanceMovies}
        
      />
      <HomeRow
        title='Documentaries'
        fetchUrl={requests.fetchDocumentaries}
        
      />
   
      <HomeFooter/>
		</div>
  )
}

export default Home