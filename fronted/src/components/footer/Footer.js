import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerRow">
        <div className="footerCol">
          <ul>
            <li>
              <Link to="/">Countries</Link>
            </li>
            <li>
              <Link to="/">Regions</Link>
            </li>
            <li>
              <Link to="/">Cities</Link>
            </li>
            <li>
              <Link to="/">Airports</Link>
            </li>
            <li>
              <Link to="/">Hotels</Link>
            </li>
          </ul>
        </div>
        <div className="footerCol">
          <ul>
            <li>
              <Link to="/">Homes</Link>
            </li>
            <li>
              <Link to="/">Apartments</Link>
            </li>
            <li>
              <Link to="/">Resorts</Link>
            </li>
            <li>
              <Link to="/">Villas</Link>
            </li>
            <li>
              <Link to="/">Hostels</Link>
            </li>
          </ul>
        </div>
        <div className="footerCol">
          <ul>
            <li>
              <Link to="/">All Destinations</Link>
            </li>
            <li>
              <Link to="/">Discovers</Link>
            </li>
            <li>
              <Link to="/">Reviews</Link>
            </li>
            <li>
              <Link to="/">Seasonal and holiday deals</Link>
            </li>
          </ul>
        </div>
        <div className="footerCol">
          <ul>
            <li>
              <Link to="/">Car Rental</Link>
            </li>
            <li>
              <Link to="/">Flight Finder</Link>
            </li>
            <li>
              <Link to="/">Restaurent reservation</Link>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
            <li>
              <Link to="/">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerRow">
        <div className="footerCol">
          <p className="copyrights">
            &copy; 2022. All Rights Reserved. Powered By Khan Haque.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer