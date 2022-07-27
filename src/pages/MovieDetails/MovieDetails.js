import React, { useEffect, useState } from 'react';
import './MovieDetails.css';
import { useParams } from 'react-router-dom';
import VideoList from './../VideoList/VideoList';
import SimilarMovie from './../SimilarMovie/SimilarMovie';

const MovieDetails = () => {
  const [movieDetail, setMovie] = useState();
  const [similarMovies, setSimilarMovies] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getData();
    fetchSimilarMovies();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=15adc4cf6388a9d835667a7400191617&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  async function fetchSimilarMovies() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=15adc4cf6388a9d835667a7400191617`
    );
    const data = await response.json();

    setSimilarMovies(data.results);
  }
  return (
    <>
      {movieDetail && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original${
                movieDetail ? movieDetail.backdrop_path : ''
              }")`,
            }}
          ></div>

          <div className="mb-5 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url("https://image.tmdb.org/t/p/w500${
                    movieDetail ? movieDetail.poster_path : ''
                  }")`,
                }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h1 className="title">
                {movieDetail ? movieDetail.original_title : ''}
              </h1>
              <div className="genres">
                {movieDetail.genres &&
                  movieDetail.genres.slice(0, 5).map((genre, i) => (
                    <span key={i} className="genres__item">
                      {genre.name}
                    </span>
                  ))}
              </div>
              <div className="movie__tagline">
                {movieDetail ? movieDetail.tagline : ''}
              </div>
              <div className="movie__rating">
                {movieDetail ? movieDetail.vote_average : ''}{' '}
                <i class="fas fa-star" />
                <span className="movie__voteCount">
                  {movieDetail ? '(' + movieDetail.vote_count + ') votes' : ''}
                </span>
              </div>
              <div className="movie__runtime">
                {movieDetail ? movieDetail.runtime + ' mins' : ''}
              </div>
              <div className="movie__releaseDate">
                {movieDetail ? 'Release date: ' + movieDetail.release_date : ''}
              </div>
              <div className="movie-overview">
                <h1 style={{fontSize: '30px'}}>Overview</h1>
                <p className="overview">{movieDetail.overview}</p>
              </div>
            </div>
          </div>

          {/*========== trailer video ============*/}
          <div className="container mb-5">
            <VideoList />
          </div>
          {/*========== similar movie slider ============*/}
          <div className="container">
            <h2>Similar Movies</h2>
            <SimilarMovie movieList={similarMovies} id={similarMovies.id} />
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;

