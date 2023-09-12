import React from 'react';
import BrowseHeader from '../components/BrowseHeader';
import Row from '../components/Row';
import HomeFooter from '../components/HomeFooter';
import Banner from '../components/Banner';
import requests from '../axios/requests';

const Home = () => {
  return (
		<div className='browse'>
      <BrowseHeader />
      <Banner/>
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