import React from "react";
import {useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VedioBackground = ({ movieId }) => {

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video"
       
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?si=R4dHEqjsnLyFRzFy" + "?&autoplay=1&loop=1&mute=1&controls=0&playlist=" + trailerVideo?.key}
        title="YouTube video player"
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerpolicy="strict-origin-when-cross-origin"
        // allowfullscreen
      ></iframe>
    </div>
  );
};

export default VedioBackground;
