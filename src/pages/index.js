import React from "react"
import Base from "../components/base"
import Bio from "../components/bio"
import PhotoGallery from "../components/photogallery"
import "../styles/index.css"

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
