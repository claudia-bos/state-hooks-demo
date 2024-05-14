import { useState } from "react"

function MovieList() {
  // Take the input value and add it to a "movie list" that gets displayed

  const [movies, setMovies] = useState(["Star Wars: Holiday Special", "Into the Spiderverse", "Crossroads"])
  const [inputValue, setInputValue] = useState("")

  const movieList = movies.map((movie) => <h5>{movie}</h5>)
  // creating an array of HTML elements

  // write a function to update 'movies' to add the last known value of 'inputValue'
  const addMovie = () => {
    setMovies([...movies, inputValue])
    setInputValue("")
  }

  return (
    <div>
      <h2>Movie List: </h2>
      {movieList}
      
      <input 
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button
        style={{ marginLeft: "5px" }}
        onClick={addMovie}
        >
        Add Movie
      </button>

    </div>
  )
}

export default MovieList