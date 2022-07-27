import React from 'react';
import { Link } from 'react-router-dom';
import "./MovieCard.css";

const MovieCard = ({movie}) => {
    return (
      <div className="card-item">
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <div className="cards">
            <img
              className="cards__img"
              alt=""
              src={`https://image.tmdb.org/t/p/w500${
                movie ? movie.poster_path : ''
              }`}
            />
            <div className="cards__overlay">
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
        </Link>
      </div>
    );
};

export default MovieCard;