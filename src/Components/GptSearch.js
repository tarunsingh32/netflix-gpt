import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { Background_URL } from '../Utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div  className='absolute -z-10'>
        <img
          src={Background_URL}
          alt="logo"
        />
        </div>
        
        
     <GptSearchBar/>
     <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch
