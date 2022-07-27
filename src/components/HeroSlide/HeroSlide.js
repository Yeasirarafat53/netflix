import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// react-modal-video
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';
// main css file
import './HeroSlide.css';

const HeroSlide = () => {
  let url = 'https://www.youtube.com/embed/fb5ELWi-ekk';

  const [isOpen, setOpen] = useState(false);

  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=15adc4cf6388a9d835667a7400191617&language=en-US'
    )
      .then((res) => res.json())
      .then((data) => setMovieItems(data.results.slice(1, 5)));
  }, []);

  return (
    <div className="hero-slide">
      <Swiper spaceBetween={50} slidesPerView={1}>
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className="hero-slide__item"
              style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w500${
                  item.backdrop_path ? item.backdrop_path : item.poster_path
                }")`,
              }}
            >
              <div className="hero-slide__item__content container">
                <div className="hero-slide__item__content__info">
                  <h2 className="title mb-5">{item.title}</h2>
                  <div className="posterImage__runtime mb-4">
                    {item ? item.release_date : ''}
                    <span className="posterImage__rating">
                      {item ? item.vote_average : ''}
                      <i className="fas fa-star" />{' '}
                    </span>
                  </div>
                  <div className="overview mb-5">{item.overview}</div>
                  <div className="btns">
                    <Link to={`/movie/${item.id}`}>
                      <button className="btn me-3">Watch now</button>
                    </Link>
                    <buton
                      className="btn btn-outline"
                      onClick={() => setOpen(true)}
                    >
                      Watch trailer
                    </buton>
                  </div>
                </div>

                <div className="hero-slide__item__content__poster">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${
                      item && item.poster_path
                    }`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <ModalVideo
        channel="custom"
        autoplay
        isOpen={isOpen}
        url={url}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default HeroSlide;
