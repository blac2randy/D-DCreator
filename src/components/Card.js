import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  const [count, setCount] = useState(0)
  const updateCount = () => {
    setCount((count) => count + 1);
  }

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <h2 className="title">{props.title}</h2>
          <h3 className="author">{"Race: " + props.author}</h3>
          <p className="description">{"Lore: " +props.description}</p>
          <p className="class">{"Class: " +props.class}</p>
          <button className="betButton" onClick={updateCount} >👍 Like: {count}</button>
      </div>
  );
};

export default Card;