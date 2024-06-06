import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../Utils/moviesSlice";
import { API_OPTIONS } from "../Utils/constants";

const useMovieTrailer = (movieId) =>{

    const dispatch = useDispatch();
    const getMovieTrailer = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
          API_OPTIONS
        );
        const json = await data.json();
        // console.log(json);
    
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer));
      };
      useEffect(() => {
        getMovieTrailer();
      }, []);
}

export default useMovieTrailer