import React from 'react'
import Navbar from './Navbar'
import BannerBackground from "../Assets/img.jpg";
import BannerImage from "../Assets/bg.jpg";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { FiArrowRight } from "react-icons/fi";

const home = () => {
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  // });
  // const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <div className="home-container">
    <Navbar />
    <div className="home-banner-container">
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="" />
      </div>
      <div className="home-text-section">
        <h1 className="primary-heading">
          Getting to know React</h1>
        <p className="primary-text">
        As you can see it helps to create good looking UI.
        </p>
        <button className="secondary-button">
          Call Us <FiArrowRight />{" "}
        </button>
      </div>
      <div className="home-image-section">
        <img src={BannerImage} alt="" />
      </div>
    </div>
    <div>
      
        <GoogleMap
          mapContainerClassName="map-container"
          // center={center}
          zoom={10}
        >
          <Marker position={{ lat: 18.52043, lng: 73.856743 }}
          icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"} />

        </GoogleMap>
      
    </div>
  </div>
  
  )
}

export default home