import React from 'react'
import Search from './Components/Search.jsx'
import { useState, useEffect } from 'react'
import Cards from './Cards.jsx'
import {useDebounce} from 'react-use';
import Navbar from './Components/Navbar.jsx'


const API_BASE_URL='https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS={
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};
const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const[errorMessage, setErrorMessage] = useState('')
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

  const fetchMovies = async (query='') => {
    setLoading(true);
    setErrorMessage('');
    try{
      const endPoint = query 
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&api_key=${API_KEY}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
      const response = await fetch(endPoint);
      if(!response.ok){
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      if (!data.results || data.results.length === 0) {
  setErrorMessage('No movies found');
  setMovies([]);
} else {
  setMovies(data.results);
}
    }
    catch(error){
      console.error(error);
      setErrorMessage('Failed to fetch movies. Please try again later.');
    } finally{
      setLoading(false);
    }
  };
useEffect(() => {
  fetchMovies(debouncedSearchTerm);
}, [debouncedSearchTerm]);
  
  return (
  <main>
    <Navbar title="Movie Finder" />

    <div className="pattern">
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="hero" className="hero" />

          <h1>
            Find <span className="text-gradient">Movies</span>
            {" "}You'll enjoy without the hassle
          </h1>

          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </header>

        <Cards
          movies={movies}
          loading={loading}
          errorMessage={errorMessage}
        />
      </div>
   
    </div>

  </main>
);
}
export default App
