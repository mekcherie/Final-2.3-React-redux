import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LOAD_CHARACTER } from './actions'
import Display from './Display'
import character from './character'

function Starwars () {
  const dispatch = useDispatch()

  const [characterNumber, setNumber] = useState(0)
  const [characterList, setList] = useState([])
  const data = useSelector(state => state.character)

  return (
    <div>
      <div className='forms'>
        <form
          onSubmit={event => {
            event.preventDefault()
            dispatch(loadCharacter(characterNumber))
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

            const character = (
              <character
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

            const list = [...characterList, character]
            setList(list)
          }}
        >
          <button name='save' type='submit'>SAVE</button>
        </form>

      </div>

      {data &&
        <div>
          <character
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

      <Character characterList={characterList} />

    </div>
  )
}

export default Starwars