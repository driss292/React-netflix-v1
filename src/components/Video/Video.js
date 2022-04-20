import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./_Video.scss";

export default function Video() {
  const API_KEY = "d8f59f32b799bb737a3a611fe6d4dfa2";
  const BASE_URL = "https://api.themoviedb.org/3";
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
      );
      //   console.log(response.data.results[1].key);
      setMovie(response.data.results[1]?.key);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  console.log(id);
  return isLoading ? (
    <p>chargement</p>
  ) : (
    <div className="video">
      <iframe
        src={`https://www.youtube.com/embed/${movie}`}
        title="video"
        frameborder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}
