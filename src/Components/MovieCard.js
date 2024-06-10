import React from 'react';
import { Imag_URL } from '../Utils/constants';

const MovieCard = ({ posterPath }) => {
  return (
    <div className='w-48 pr-4 cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:shadow-lg'>
      <img src={Imag_URL + posterPath} alt="Movie Card" className='w-full h-auto' />
    </div>
  );
}

export default MovieCard;
