import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './tops.css';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Tops = () => {
   const { data, loading, error } = useFetch(
     "api/hotels/bycity?cities=Kragujevac,Leskovac,Belgrade,Novi Sad,Aleksandrovac Zupa"
   );
   console.log(data);
  return (
    <>
      {/*For this here I wil not fetch new Information from the database, I leave it to you, Do the same as for the cities*/}
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        transitionTime={1500}
        showArrows={false}
        showIndicators={false}
      >
        <div className="cImage">
          <Link to="/">
            <img src="./assets/images/angokar.jpg" alt="Angokar Wat" />
            <div className="cImgDesc">
              <h2 className="cImgTitle">Angokar Wat</h2>
              <span className="cImgP">{data[0]} properties</span>
            </div>
          </Link>
        </div>
        <div className="cImage">
          <Link to="/">
            <img src="./assets/images/boro.jpg" alt="Boro Boro" />
            <div className="cImgDesc">
              <h2 className="cImgTitle">Boro Boro</h2>
              <span className="cImgP">{data[2]} properties</span>
            </div>
          </Link>
        </div>
        <div className="cImage">
          <Link to="/">
            <img src="./assets/images/niagara.jpg" alt="Niagara Falls" />
            <div className="cImgDesc">
              <h2 className="cImgTitle">Niagara Falls</h2>
              <span className="cImgP"> {data[4]} properties</span>
            </div>
          </Link>
        </div>
        <div className="cImage">
          <Link to="/">
            <img src="./assets/images/tajmohol.jpg" alt="Taj Mahal" />
            <div className="cImgDesc">
              <h2 className="cImgTitle">Taj Mahal</h2>
              <span className="cImgP">{data[1]} properties</span>
            </div>
          </Link>
        </div>
        <div className="cImage">
          <Link to="/">
            <img src="./assets/images/petra.jpg" alt="Petra" />
            <div className="cImgDesc">
              <h2 className="cImgTitle">Petra</h2>
              <span className="cImgP">{data[3]} properties</span>
            </div>
          </Link>
        </div>
      </Carousel>
    </>
  );
}

export default Tops