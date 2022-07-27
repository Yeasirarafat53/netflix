import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieList.css';
import MovieCard from './../MovieCard/MovieCard';

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

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
    <div className="movie__list container">
      <h2 className="list__title">{(type ? type : 'POPULAR').toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
