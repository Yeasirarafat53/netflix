import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import './Homepage.css';

import HeroSlide from '../HeroSlide/HeroSlide';
import MovieSlider from './../MovieSlider/MovieSlider';

const Homepage = () => {
  const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
  };

  return (
    <>
      <HeroSlide />
      <div className="container">
        <div className="section mb-5">
          <div className="section__header mb-4">
            <h2>Popular Movies</h2>
            <Link to="/movies/popular">
              <button className="small">View more</button>
            </Link>
          </div>
          <MovieSlider type={movieType.popular} />
        </div>

        <div className="section mb-5">
          <div className="section__header mb-4">
            <h2>Top Rated Movies</h2>
            <Link to="/movies/top_rated">
              <button className="small">View more</button>
            </Link>
          </div>
          <MovieSlider type={movieType.top_rated} />
        </div>

        <div className="section mb-5">
          <div className="section__header mb-4">
            <h2>Upcoming Movies</h2>
            <Link to="/movies/upcoming">
              <button className="small">View more</button>
            </Link>
          </div>
          <MovieSlider type={movieType.upcoming} />
        </div>
      </div>
    </>
  );
};

export default Homepage;
