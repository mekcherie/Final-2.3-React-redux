import React from 'react';
import { useState } from 'react';
import Display from './Display';
import './Display.css';

function StarWars() {
  const [id, setId] = useState(1);
  const [data, setData] = useState(null);

  async function getDisplay(displayId) {
    try {
      const res = await fetch(`https://swapi.dev/api/people/${displayId}/`);
      const json = await res.json();

      const name = json.name;
      const height = json.height;
      const mass = json.mass;
      const hairColor = json.hair_color;
      const eyeColor = json.eye_color;

      setData({
        name,
        height,
        mass,
        hairColor,
        eyeColor
      });
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="StarWars">
      <form onSubmit={e => {
        e.preventDefault();
      }}>
        <input
          onChange={(e) => setId(e.target.value)}
          value={id}
          placeholder={'Display Id'}
        />
        <button className="StarWars" onClick={() => getDisplay(id)}>Submit</button>
      </form>
      {data && <Display {...data} />}
    </div>
  );
}

export default StarWars