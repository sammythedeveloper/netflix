import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./requests";



function truncate(strings, num) {
  return strings?.length>num? strings.substr(0, num -1) +"...": strings; 
}
function Banner() {
const [movie, setMovie] = useState([]);


    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(requests.fetchNetflixOrginals);
            const randomMovie =
              response?.data.results[
                Math.floor(Math.random() * response.data.results.length)
              ];
            setMovie(randomMovie);
            return response;
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
        fetchData();
      }, []);



    return (
        <header
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundPosition: "center",
          }}
        >
          <div className="banner_contents">
            <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner_buttons">
              <button className="banner_button">Play</button>
              <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_description">{truncate(movie?.overview, 200)}</h1>
          </div>
          <div className="banner--fadeBottom" />
        </header>
      );
}

export default Banner;