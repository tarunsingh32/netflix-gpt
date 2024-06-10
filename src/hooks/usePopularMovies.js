import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/moviesSlice";
import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";

const usePopularMovies = () =>{
    const dispatch = useDispatch();

  const getPopularSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularSeries();
  }, []);

}

export default usePopularMovies 