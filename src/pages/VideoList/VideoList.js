import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './VideoList.css';


const VideoList = () => {
    const [getVideo, setGetVideo] = useState({});
  const { id } = useParams();
console.log(getVideo);
  useEffect(() => {
       fetchMovieTrailer();
  }, []);

  async function fetchMovieTrailer() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=15adc4cf6388a9d835667a7400191617`
    );
    const data = await response.json();

    const trailer = data.results.filter((video) => {
      return video.type === 'Trailer';
    });

    // setMovieVideos(data.results);
    // setUrl(data.results[0].key);
    setGetVideo(trailer[0]);
  }


    return (
      <div className="video">
        <div className="video__title">
          <h2>{getVideo.name}</h2>
        </div>

        <iframe
          className="teaser"
          width="100%"
          height="800"
          src={`https://www.youtube.com/embed/${getVideo.key}`}
          title={getVideo.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        ></iframe>
      </div>
    );
    
};

export default VideoList;
