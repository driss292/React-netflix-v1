import React, { useState, useEffect } from "react";
import axios from "axios";
import "./_Row.scss";

export default function Row({ title, fetchUrl, isPoster }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(fetchUrl);
      console.log(response.data.results);
      setMovies(response.data.results);
    };
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__images">
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={
                isPoster
                  ? `${base_url}${movie.poster_path}`
                  : `${base_url}${movie.backdrop_path}`
              }
              className="row__image"
              alt="movie?.title || movie?.name || movie?.original_title"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
