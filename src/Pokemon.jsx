import { useState, useEffect } from 'react'
import axios from 'axios'

function Pokemon(props) {

  const [pokemon, setPokemon] = useState([])

  const getPokemon = async () => {
    await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${props.num}`)
    .then((res) => {
      setTimeout(() => {
        setPokemon(res.data.results)
      }, 1000)
    })
  }

  const pokemonList = pokemon.map(p => <li key={p.name}>{p.name}</li>)

  console.log("hi")

  useEffect(() => {
    getPokemon()
  }, [])
  // useEffect takes in 2 arguments, a required callbackFunction and an optional 'dependency array'
  // useEffect will fire its callbackFunction on ever render, unless we provide a dependency array
  // if the dependency array is empty [], then the callbackFunction will only be invoked on the INITIAL render
  // otherwise, the callbackFunction will be invoked every time any element placed in the dependency array is changed/used (can pass in functions)

  return (
    <div>
      <ul>
        {pokemonList}
      </ul>
    </div>
  )
}

export default Pokemon