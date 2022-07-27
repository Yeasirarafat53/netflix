import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import './SimilarMovie.css'

import 'swiper/css/pagination';
// import required modules
// import { Pagination } from 'swiper';
import { Link } from 'react-router-dom';


const SimilarMovie = ({  movieList,id }) => {
  return (
    <div className="movie-list">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {movieList.map((movie) => (
          <SwiperSlide>
            <Link
              to={`/movie/${movie.id}`}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <div
                className="movie-card"
                style={{
                  backgroundImage: `url("https://image.tmdb.org/t/p/w500${
                    movie ? movie.poster_path : ''
                  }")`,
                }}
              >
                {/* <img
                  className="cards-img"
                  alt=""
                  src={`https://image.tmdb.org/t/p/w500${
                    movie ? movie.poster_path : ''
                  }`}
                /> */}
                <div className="overlay">
                  <div className="card__title">
                    {movie ? movie.original_title : ''}
                  </div>
                  <div className="card__runtime">
                    {movie ? movie.release_date : ''}
                    <span className="card__rating">
                      {movie ? movie.vote_average : ''}
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <div className="card__description">
                    {movie ? movie.overview.slice(0, 118) + '...' : ''}
                  </div>
                </div>
              </div>
              <h3>{movie ? movie.original_title : ''}</h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimilarMovie;
