import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
  state = {
    isLoding: true,
    movies: [],
  }

  getMovies =  async () => {

    const data = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    const movies = data.data.data.movies;
    this.setState({ movies , isLoding: false  });
    
  };

  componentDidMount() {
    this.getMovies();
  };

  render() {
    const { isLoding , movies } = this.state;
    console.log(movies);
  return (
      <section className="container">
        {isLoding 
        ?(<div className="loader">
          <span className="loader__text"> 로딩중....</span>
        </div>
        )
        :
        (<div className="movies">
         { movies.map((movie) => {
          console.log(movie);
          return (
            <Movie
              key={movie.id}
               id={movie.id}
               year={movie.year}
               title={movie.title}
               summary={movie.summary}
               poster={movie.medium_cover_image}
               genres={movie.genres}
            />
          );
        })}  
        </div>) 
      }  
      </section>
    );
  }

}

export default App;