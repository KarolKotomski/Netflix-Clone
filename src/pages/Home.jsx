import React from 'react';
import HomeHeader from '../components/HomeHeader';
import Row from '../components/Row';
import HomeFooter from '../components/HomeFooter';
import HomeBanner from '../components/HomeBanner';
import requests from '../axios/requests';

const Home = () => {
  return (
		<div className='home'>
      <HomeHeader />
      <HomeBanner/>
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row
        title='Top Rated'
        fetchUrl={requests.fetchTopRated}
        isLargeRow
        
      />
      <Row
        title='Action Movies'
        fetchUrl={requests.fetchActionMovies}
        
      />
      <Row
        title='Comedy Movies'
        fetchUrl={requests.fetchComedyMovies}
        
      />
      <Row
        title='Horror Movies'
        fetchUrl={requests.fetchHorrorMovies}
        
      />
      <Row
        title='Romance Movies'
        fetchUrl={requests.fetchRomanceMovies}
        
      />
      <Row
        title='Documentaries'
        fetchUrl={requests.fetchDocumentaries}
        
      />
   
      <HomeFooter/>
		</div>
  )
}

export default Home