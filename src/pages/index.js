import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import Base from '../components/base';
import Bio from '../components/bio';
import PhotoGallery from '../components/photogallery';

import '../styles/index.css';

function Index() {
  useEffect(() => {
    if (typeof window !== 'undefined') {  
      ReactGA.initialize("UA-176658398-2"); 
    }
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="main">
      <div className="base">
        <Base className={"graffiti"} />
      </div>
      <Bio/>
      <PhotoGallery />
    </div>
  )
}

export default Index;
