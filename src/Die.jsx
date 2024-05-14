import './dice.css'
import { useState } from 'react'

export default function Die(props) {

  const [diceValue, setDiceValue] = useState("?")

  // function to calculate a random number between 1-number of sides (from props)
  const getRandomNum = (highestValue) => {
    const randNum = Math.ceil(Math.random() * highestValue)
    return randNum
  }

  // Need the button to calculate a random number between 1-props.sides, then we need to display that value in place of 'RollValue' --> probably need a state value
  const roll = () => {
    const rollValue = getRandomNum(props.sides)
    setDiceValue(rollValue)
  }

  return (
    <button type='button' className='die' onClick={roll}>
      <i>Sides={props.sides}</i>
      <b>{diceValue}</b>
    </button>
  )
}