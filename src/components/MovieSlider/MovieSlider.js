import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from 'react-slick';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
// import './MovieSlider.css';

const MovieSlider = ({ type }) => {
  const [movieList, setMovieList] = useState([]);
  // console.log(movieList);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : 'popular'
      }?api_key=15adc4cf6388a9d835667a7400191617&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };
  return (
    <div className="movie-list">
      <Swiper
        slidesPerView={2}
        spaceBetween={5}
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
            spaceBetween: 10,
          },
        }}
        className="mySwiper"
      >
        {movieList.map((movie, i) => (
          <SwiperSlide key={i}>
          <Link
            to={`/movie/${movie.id}`}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <div
              className="movie-card me-3"
              style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w500${
                  movie ? movie.poster_path : ''
                }")`,
              }}
            >
              {/* <button className="btn">
                  <i class="fa-solid fa-play"></i>
                </button> */}
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

export default MovieSlider;







{/* <div className="overlay">
  <div className="card__title">{movie ? movie.original_title : ''}</div>
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
</div>; */}
