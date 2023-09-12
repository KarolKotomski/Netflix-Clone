import React from 'react';
import Banner from '../components/Banner';
import BrowseFooter from '../components/BrowseFooter';
import BrowseHeader from '../components/BrowseHeader';
import Row from '../components/Row';
import requests from '../axios/requests';

const Browse = () => {
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
   
      <BrowseFooter/>
		</div>
  )
}

export default Browse;