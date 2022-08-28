import React, { useContext, useState } from "react";
import Header from '../../components/header/Header';
import './hotel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-regular-svg-icons';
import PhotoAlbum from "react-photo-album";
import Subscribe from '../../components/subscribe/Subscribe';
import Footer from '../../components/footer/Footer';
import useFetch from '../../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
import Reserve from "../../components/reserve/Reserve";

const Hotel = () => {
  const location = useLocation();
  // console.log(location);
  const id = location.pathname.split("/")[2];

  const { data, loading, error, reFetch } = useFetch(`/api/hotels/find/${id}`);
  // console.log(data);

  
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const { date, options } = useContext(SearchContext);
  const MILLISECONDS_PER_DAYS = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDifferent = Math.abs(date2.getTime() - date1.getTime());
    const differentDays = Math.ceil(timeDifferent / MILLISECONDS_PER_DAYS);
    return differentDays;
  }
   const days = (dayDifference(date[0].endDate, date[0].startDate));

  const handleClick = () => {
    if (user) {
      setOpen(true);
    }else{
      navigate("/login");
    }
  }

  const photos = [
    {
      src: data.image,
      width: 800,
      height: 600,
    },
    {
      src: data.image1,
      width: 800,
      height: 600,
    },
    {
      src: data.image2,
      width: 800,
      height: 600,
    },
    {
      src: data.image3,
      width: 800,
      height: 600,
    },
    {
      src: data.image4,
      width: 800,
      height: 600,
    },
    {
      src: data.image5,
      width: 800,
      height: 600,
    },
    {
      src: data.image6,
      width: 800,
      height: 600,
    },
  ];
  
  return (
    <>
      <Header type="smallHeader" />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="hotelContainer">
          <div className="hotelRow">
            <div className="hotelCol">
              <h2 className="hotelTitle">{data.name}</h2>
              <span>
                <FontAwesomeIcon icon={faMap} />
                {data.address}
              </span>
              <br />
              <br />
              <h3>
                <strong>
                  Price: ${days * data.price * options.room} for {days} days
                </strong>
              </h3>
            </div>
            <div className="hotelCol">
              <button onClick={handleClick} className="hotelBtn">
                Booking Now
              </button>
            </div>
          </div>
          <div className="hotelRow">
            <PhotoAlbum layout="rows" photos={data.photos} />
          </div>
          <div className="hotelRow">
            <h3 className="hotelSubTitle">Description</h3>
            <p className="hotelDesc">{data.desc}</p>
          </div>
        </div>
      )}
      {open && <Reserve setOpen={setOpen} hotelId={id} />}
      <Subscribe />
      <Footer />
    </>
  );
};

export default Hotel