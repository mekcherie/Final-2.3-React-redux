import React from 'react'
function Display(props) {
  const { name, birthYear, gender, height, mass, skinColor, hairColor, eyeColor, homeworld, films  } = props;
  
  return (
    <div className="Display">
      <h2>{name}</h2>
      <p>Birth Year: {birthYear}</p>
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Skin Color: {skinColor}</p>
      <p>Hair Color: {hairColor}</p>
      <p>Eye Color: {eyeColor}</p>
      <p>Homeworld: {homeworld}</p>
      {/* {films.map(film => <p key={film.title}>Film: {film.title}</p>)} */}
    </div>
  );
}

export default Display;