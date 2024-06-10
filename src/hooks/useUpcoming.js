import { useDispatch } from "react-redux";
import {addUpcomingMovies } from "../Utils/moviesSlice";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";

const useUpcomingMovies = () =>{
    const dispatch = useDispatch();

  const getUpcomingSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingSeries();
  }, []);

}

export default useUpcomingMovies