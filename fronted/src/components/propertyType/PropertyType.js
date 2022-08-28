import React from 'react';
import './propertytype.css';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const PropertyType = () => {
  const { data, loading, error } = useFetch(
    "api/hotels/bytype?cities=Kragujevac,Leskovac,Belgrade,Novi Sad,Aleksandrovac Zupa"
  );
  console.log(data);

  const images = [
    "./assets/images/ho.jpg",
    "./assets/images/ap.jpg",
    "./assets/images/rs.jpg",
    "./assets/images/vs.jpg",
    "./assets/images/cs.jpg",
  ];

  return (
    <div className="ptypeContainer">
      <h2 className="ptypeTitle">Browse by property type</h2>
      <div className="cityImages">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            {data &&
              images.map((img, i) => (
                <div className="cityImage" key={i}>
                  <Link to="/">
                    <div className="cityImg">
                      <img src={img} alt="Hotels" />
                    </div>
                    <h4 className="cityImgTitle">{data[i]?.type}</h4>
                    <span className="cityImgProperties">
                      {data[i]?.count} properties
                    </span>
                  </Link>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
}

export default PropertyType
