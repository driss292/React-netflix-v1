import React from "react";
import "./_QuickView.scss";
import { Link } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function QuickView({ popup, bannerStyle, movie, popupStatut }) {
  return (
    <div className={`quickView ${popupStatut && "open"}`}>
      <div className="quickView__banner" style={bannerStyle}>
        <div className="quickView__content">
          <h3 className="quickView__title">
            {movie?.title || movie?.name || movie?.original_title}
          </h3>
          <p>{movie?.overview}</p>
        </div>
        <div
          className={`quickView__overlay ${popupStatut && "open"}`}
          onClick={popup}
        ></div>
        <button className="quickView__close" onClick={popup}>
          <CancelIcon fontSize="large" />
        </button>
        <Link to={`/video/${movie?.id}`}>
          <button className="quickView__play">
            <PlayArrowIcon />
            Lecture
          </button>
        </Link>
      </div>
    </div>
  );
}
