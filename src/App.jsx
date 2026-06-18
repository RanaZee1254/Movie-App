import React from 'react'
import Cards from './Cards.jsx'
const App = () => {
  return (<div>

    <div >
      <div className="body">
        <p><b>Hi ,</b> We welcome you on our page where you can find the latesdt and best movies of all the time.</p>
      </div>
      <div className = "card-container">
        <Cards props={{ img:"https://cdn.britannica.com/24/259724-050-5F1007C0/Star-Wars-movie-poster-Episode-IV-A-New-Hope-1977.jpg" ,title: "Star Wars" }} />
        <Cards props={{ img:"https://variety.com/wp-content/uploads/2014/04/01-avengers-2012.jpg?w=1000&h=667&crop=1" ,title: "Avengers" }} />       
        <Cards props={{ img:"https://static0.cbrimages.com/wordpress/wp-content/uploads/2026/01/iron-man-1-header.jpg?w=1600&h=1200&fit=crop" ,title: "Iron Man" }} />
        
    </div>
  </div>
  </div>
  )
}

export default App
