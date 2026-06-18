import React from 'react'
import { useState, useEffect } from 'react'
const Cards = ({props}) => {
  const [hasLiked, setHasLiked] = useState(false);
  const[count, setCount] = useState(0);
  useEffect(() => {
    console.log(`You have ${hasLiked ? "unliked" : "liked"} this movie. Total likes: ${count}`);
  }, [hasLiked, count]);
  return (
    <div className="card">
      {props.title}
      <img className="card-img" src={props.img} alt={props.title} />
      <button className="button" onClick={() => setHasLiked(!hasLiked), () => setCount(count + 1)}>
        {hasLiked ? "Liked" : "Like"} {count}
      </button>
    </div>
  )
}

export default Cards;
