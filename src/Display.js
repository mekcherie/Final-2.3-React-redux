import React from 'react';
import './Display.css';

function Display (props) {
    const { name, birthYear, gender, height, mass, skinColor, hairColor, eyeColor, homeworld } = props
  
    return (
      <div className='Display'>
        <h2>Name: {name}</h2>
        <p>Birth Year: {birthYear}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
        <p>Skin Color: {skinColor}</p>
        <p>Hair Color: {hairColor}</p>
        <p>Eye Color: {eyeColor}</p>
        <p>Homeworld: {homeworld}</p>
      </div>
    )
  }
  
  export default Display;