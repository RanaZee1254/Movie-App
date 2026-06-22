import React from 'react'



const search = ({ searchTerm , setSearchTerm}) => {
  return (
    <div className="search">
    <div>
      <img src="./Search.png" alt="search" className="search-icon"/>
      <input 
      type="text" 
      placeholder="Search for a movie from millions of movies" 
      value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
    </div>
  )
}

export default search
