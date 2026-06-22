import React from 'react'
import Footer from './Components/Footer.jsx'

const Cards = ({ movies, loading, errorMessage }) => {
  return (
    <div>
       <section className="all-movies">
          <h2>All Movies</h2>
          {loading?(
            <p className="text-white text-2xl">Loading movies...</p>
          ):errorMessage?(
            <p className="text-red-500">{errorMessage}</p>
          ):(
            <ul>
              
            
              {movies.map((movie) => (
                <div key={movie.id} className="movie-card">
                  <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt={movie.title} className="movie-poster"/>
                  <h3 className="movie-title">{movie.title}</h3>
                  <div className="movie-details">
                    <p className="movie-rating text-white">Rating: {movie.vote_average}</p>
                    <img className="h-6 w-6" src="./star.png" alt="star" />
                     <p >{movie.vote_average ? movie.vote_average.toFixed(1):"N/A"}</p>
                  </div>
                     <span>

                     </span>
                     <p className="lang">{movie.original_language.toUpperCase()}</p>
                     <span></span>
                    <p className="movie-release-date text-white">Release Date: {movie.release_date}</p>

                </div>
              ))}
              </ul>
          
          )}
<Footer />
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </section>
    </div>
  )
}

export default Cards

