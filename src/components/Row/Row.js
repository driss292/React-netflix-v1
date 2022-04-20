import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import "./_Row.scss";

export default function Row({ title, fetchUrl, isPoster }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(fetchUrl);
      // console.log(response.data.results);
      setMovies(response.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, [fetchUrl]);
  // console.log(movies);
  return isLoading ? (
    <p>chargement...</p>
  ) : (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__images">
        {movies.map((movie) => (
          <div key={movie.id}>
            <Link to={`/video/${movie?.id}`}>
              <img
                src={
                  isPoster
                    ? `${base_url}${movie.poster_path}`
                    : `${base_url}${movie?.backdrop_path}`
                }
                className="row__image"
                alt="movie?.title || movie?.name || movie?.original_title"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
