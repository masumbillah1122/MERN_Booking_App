import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './city.css';

const City = () => {

  const { data, loading, error } = useFetch(
    "api/hotels/bycity?cities=Kragujevac,Leskovac,Belgrade,Novi Sad,Aleksandrovac Zupa"
  );
  console.log(data);

  return (
    <div className="cities">
      <h2 className="cityTitle">Explore Serbia</h2>
      <p className="cityDesc">These popular description have a lot of offer</p>
      <div className="cityImages">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <div className="cityImage">
              <Link to="/">
                <div className="cityImg">
                  <img src="./assets/images/kg.jpg" alt="Kragujevac" />
                </div>
                <h4 className="cityImgTitle">Kragujevac</h4>
                <span className="cityImgProperties">{data[0]} properties</span>
              </Link>
            </div>
            <div className="cityImage">
              <Link to="/">
                <div className="cityImg">
                  <img src="./assets/images/bg.jpg" alt="Belgrade" />
                </div>
                <h4 className="cityImgTitle">Belgrade</h4>
                <span className="cityImgProperties">{data[2]} properties</span>
              </Link>
            </div>
            <div className="cityImage">
              <Link to="/">
                <div className="cityImg">
                  <img src="./assets/images/ac.jpg" alt="Aleksandrovac Zupa" />
                </div>
                <h4 className="cityImgTitle">Aleksandrovac Zupa</h4>
                <span className="cityImgProperties">{data[4]} properties</span>
              </Link>
            </div>
            <div className="cityImage">
              <Link to="/">
                <div className="cityImg">
                  <img src="./assets/images/lc.jpg" alt="Leskovac" />
                </div>
                <h4 className="cityImgTitle">Leskovac</h4>
                <span className="cityImgProperties">{data[1]} properties</span>
              </Link>
            </div>
            <div className="cityImage">
              <Link to="/">
                <div className="cityImg">
                  <img src="./assets/images/ns.jpg" alt="Novi Sad" />
                </div>
                <h4 className="cityImgTitle">Novi Sad</h4>
                <span className="cityImgProperties">{data[3]} properties</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default City