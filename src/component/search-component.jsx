import React,{useState,useEffect} from "react"
import SearchMovieCard from "./searchcard";


const SearchComponent = () =>  {
 const [query, setQuery] = useState("");
 const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
    e.preventDefault() 
    
    
    const url = `https://api.themoviedb.org/3/search/movie?api_key=5c65d3a95b5022f790e9be364c55e93f&language=en-US&query=${query}&page=1&include_adult=false`;
try{
 const response = await fetch(url)
    const data =  await response.json()
    setMovies(data.results)
    console.log(data)
}catch(err){
    console.error(err)
}
   
    }

    return (
      <div>
        <form className="form" onSubmit={searchMovies}>
          <label htmlFor="query" className="label">
            Movie Name
          </label>
          <input
            type="text"
            name="query"
            className="input"
            placeholder="i.e. Inception"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="button">
            button
          </button>
        </form>

        <div className="card-list">
         
          {movies ?  movies
            .filter((movie) => movie.poster_path )
            .map((movie) => (
            <SearchMovieCard  movie = {movie}/>
            ))
          :
          <p className="not-found">movie not found</p>
          }
        </div>
      </div>
    );
}



export default SearchComponent