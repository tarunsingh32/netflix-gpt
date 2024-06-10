import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./mainContainer";
import SecondaryContainer from "./secondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcoming";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";


const Browse = () => {
  const gptSearchView = useSelector((store)=> store.gpt.showGptSearch);

  useNowPlayingMovies();
  useUpcomingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      {gptSearchView ? (<GptSearch/> ): (
          <>
            <MainContainer/>
            <SecondaryContainer/>
          </>)
      }
     
      
    </div>
  );
};

export default Browse;
