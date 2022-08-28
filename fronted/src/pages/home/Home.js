import React from 'react';
import City from '../../components/city/City';
import Footer from '../../components/footer/Footer';
import GridImages from '../../components/gridImages/GridImages';
import Header from '../../components/header/Header';
import PropertyType from '../../components/propertyType/PropertyType';
import Subscribe from '../../components/subscribe/Subscribe';
import Tops from '../../components/Tops/Tops';
import './home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <City />
        <PropertyType />
        <Tops />
        <GridImages />
        <Subscribe />
        <Footer />
      </div>
    </div>
  )
}

export default Home