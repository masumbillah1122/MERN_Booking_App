import React, { useState } from "react";
import Header from '../../components/header/Header';
import Footer from "./../../components/footer/Footer";
import './hotels.css';
import Subscribe from "./../../components/subscribe/Subscribe";
import ItemHotels from "../../components/itemHotels/ItemHotels";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "../../components/search/search.css";
import "../../components/listHotels/listhotels.css";



const Hotels = () => {

   const location = useLocation();
   const [destination, setDestination] = useState(location.state.destination);
   const [openDate, setOpenDate] = useState(false);
   const [date, setDate] = useState(location.state.date);
   const [options, setOptions] = useState(location.state.options);
   const [min, setMin] = useState(undefined);
   const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(`api/hotels?city=${destination}&min=${min || 0}&max=${max || 9999}`);
  // console.log(data);

  const handleClick = () => {
    reFetch();
  }

  return (
    <div>
      <Header type="smallHeader" />
      <div className="hotelsContainer">
        <div className="hotelsRow">
          <div className="hotelsCol">
            <div className="searchHotels">
              <div className="search">
                <div className="searchItem">
                  <label>Destination</label>
                  <input type="text" placeholder={destination} />
                </div>
                <div className="searchItem">
                  <label>Check-in-Date</label>
                  <label onClick={() => setOpenDate(!openDate)}>
                    {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                      date[0].endDate,
                      "MM/dd/yy"
                    )}`}
                  </label>
                  {openDate && (
                    <DateRange
                      onChange={(item) => setDate([item.selection])}
                      minDate={new Date()}
                      ranges={date}
                      clasName="searchDate"
                    />
                  )}
                </div>
                <div className="searchItem">
                  <div className="searchOptions">
                    <div className="searchOptionsItem">
                      <label className="searchOptionsText">
                        Min Price <sup>per night</sup>
                      </label>
                      <input
                        type="number"
                        onChange={(e) => setMin(e.target.value)}
                        className="searchOptionsInput"
                      />
                    </div>
                    <div className="searchOptionsItem">
                      <label className="searchOptionsText">
                        Max Price <sup>per night</sup>
                      </label>
                      <input
                        type="number"
                        onChange={(e) => setMax(e.target.value)}
                        className="searchOptionsInput"
                      />
                    </div>
                    <div className="searchOptionsItem">
                      <label className="searchOptionsText">Adult</label>
                      <input
                        type="number"
                        min={1}
                        className="searchOptionsInput"
                        placeholder={options.adult}
                      />
                    </div>
                    <div className="searchOptionsItem">
                      <label className="searchOptionsText">Children</label>
                      <input
                        type="number"
                        min={0}
                        className="searchOptionsInput"
                        placeholder={options.children}
                      />
                    </div>
                    <div className="searchOptionsItem">
                      <label className="searchOptionsText">Room</label>
                      <input
                        type="number"
                        min={1}
                        className="searchOptionsInput"
                        placeholder={options.room}
                      />
                    </div>
                  </div>
                </div>
                <div className="searchItem">
                  <button className="btnSearch" onClick={handleClick}>Search</button>
                </div>
              </div>
            </div>
          </div>
          <div className="hotelsCol">
            <div className="listHotels">
              {loading ? (
                <h2>Loading...</h2>
              ) : (
                <>
                    {data.map((item => 
                      <ItemHotels item={item} key={item._id} />
                    ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Hotels
