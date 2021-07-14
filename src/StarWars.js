import React from 'react';
import { useState } from 'react';
import Display from './Display.js';
import { useDispatch, useSelector } from 'react-redux'
import { loadDisplay } from './actions'

function StarWars () {
  const dispatch = useDispatch()

  const [displayNumber, setNumber] = useState(0)
  const [displayList, setList] = useState([])
  const data = useSelector(state => state.character)

  return (
    <div>
      <div className='forms'>
        <form
          onSubmit={event => {
            event.preventDefault()
            dispatch(loadDisplay(displayNumber))
          }}
        >

          <input
            type='number'
            onChange={event => setNumber(event.target.value)}
          />
          <button name='submit' type='submit'>SUBMIT</button>
        </form>

        <form
          onSubmit={event => {
            event.preventDefault()

            const display = (
              <Display
                name={data[0].name}
                birthYear={data[0].birth_year}
                gender={data[0].gender}
                height={data[0].height}
                mass={data[0].mass}
                skinColor={data[0].skin_color}
                hairColor={data[0].hair_color}
                eyeColor={data[0].eye_color}
                homeworld={data[1].name}
                films={data[2]}
              />
            )

            const list = [...displayList, display]
            setList(list)
          }}
        >
          <button name='save' type='submit'>SAVE</button>
        </form>

      </div>

      {data &&
        <div>
          <Display
            name={data[0].name}
            birthYear={data[0].birth_year}
            gender={data[0].gender}
            height={data[0].height}
            mass={data[0].mass}
            skinColor={data[0].skin_color}
            hairColor={data[0].hair_color}
            eyeColor={data[0].eye_color}
            homeworld={data[1].name}
            films={data[2]}
          />
        </div>}

      <Display displayList={displayList} />

    </div>
  )
}

export default StarWars