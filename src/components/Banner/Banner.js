import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import request from "../../config/request";
import "./_Banner.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import QuickView from "../QuickView/QuickView";

export default function Banner() {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [popup, setPopup] = useState(false);

  const handleClickPopup = () => {
    setPopup(!popup);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(request.fetchTrending);
      setMovie(
        response.data.results[
          Math.ceil(Math.random() * response.data.results.length - 1)
        ]
      );
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const truncateText = (string, num) => {
    return string?.length > num
      ? string.substr(0, num - 1) + "..."
      : "No description";
  };
  const bannerStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "centre center",
  };

  // console.log(popup);
  return isLoading ? (
    <p>chargement...</p>
  ) : (
    <header className="banner" style={bannerStyle}>
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_title}
        </h1>
        <p className="banner__description">
          {truncateText(movie?.overview, 100)}
        </p>
        <div className="banner__buttons">
          <Link to={`/video/${movie?.id}`}>
            <button className="banner__button banner__button--play">
              <PlayArrowIcon /> Lecture
            </button>
          </Link>
          <button className="banner__button" onClick={handleClickPopup}>
            <InfoIcon />
            Plus d'infos
          </button>
        </div>
      </div>
      <QuickView
        bannerStyle={bannerStyle}
        movie={movie}
        popup={handleClickPopup}
        popupStatut={popup}
      />
    </header>
  );
}
