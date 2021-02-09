import React from "react"
import Base from "../components/base"
import Bio from "../components/bio"
import PhotoGallery from "../components/photogallery"
import ReactGA from 'react-ga';

import "../styles/index.css"

ReactGA.initialize('UA-176658398-2');
ReactGA.pageview(window.location.pathname + window.location.search);

const Index = () => (
  <div className="main">
    <div className="base">
      <Base className={"graffiti"} />
    </div>
    <Bio/>
    <PhotoGallery />
  </div>
)

export default Index
