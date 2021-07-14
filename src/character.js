import React from 'react'
import './Display.css'

function character (props) {
  const { characterList } = props

  const character = characterList.map(character => {
    return (
      character
    )
  })

  return (
    <div className='character'>
      {character}
    </div>
  )
}

export default character