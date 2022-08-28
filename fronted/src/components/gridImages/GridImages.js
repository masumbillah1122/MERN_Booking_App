import React from 'react';
import './gridimages.css';
import Gallery from 'react-grid-gallery';

const GridImages = () => {
    const IMAGES = [
      {
        src: "./assets/images/grid/1.jpg",
        thumbnail: "./assets/images/grid/1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Myrland, Nordland, Norway",
      },
      {
        src: "./assets/images/grid/2.jpg",
        thumbnail: "./assets/images/grid/2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Sodankyla, Finland",
      },

      {
        src: "./assets/images/grid/3.jpg",
        thumbnail: "./assets/images/grid/3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Iceland",
      },
      {
        src: "./assets/images/grid/4.jpg",
        thumbnail: "./assets/images/grid/4.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Algeria",
      },
      {
        src: "./assets/images/grid/5.jpg",
        thumbnail: "./assets/images/grid/5.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Scotland, United Kingdom",
      },

      {
        src: "./assets/images/grid/6.jpg",
        thumbnail: "./assets/images/grid/6.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Santa Cristina Valgardena, Trentino-Alto Adige, Italia",
      },
      {
        src: "./assets/images/grid/7.jpg",
        thumbnail: "./assets/images/grid/7.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Maldives",
      },
      {
        src: "./assets/images/grid/8.jpg",
        thumbnail: "./assets/images/grid/8.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "Braies, Trentino-Alto Adige, Italy",
      },
    ];
  return (
      <div className="gridImages">
          <h2 className="gridImagesTitle">Get inspiration for your next trip</h2>
          <Gallery images={IMAGES}/>
    </div>
  )
}

export default GridImages