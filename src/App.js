import React, { Component } from 'react'
import './stylesheets/App.css'
import Movie from './components/movie'
import Operator from './components/operator'
import TMDBLogo from './tmdb_logo.svg'
import Movies from './lib/movies'

const sample = {
  cowboys: {
    id: 30462,
    title: "The Comancheros",
    year: 1961,
    image: "http://image.tmdb.org/t/p/w300/nJOTH28vU6Jo6VxylCWMZ3jEe75.jpg"
  },
  aliens: {
    id: 679,
    title: "Aliens",
    year: 1986,
    image: "http://image.tmdb.org/t/p/w300/nORMXEkYEbzkU5WkMWMgRDJwjSZ.jpg"
  },
  cowboys_and_aliens: {
    id: 49849,
    title: "Cowboys & Aliens",
    year: 2011,
    image: "http://image.tmdb.org/t/p/w300/tXEHvxU315Yu7bEaMMRcpDpW6RI.jpg"
  }
}

class App extends Component {
  state = {
    first: sample.cowboys,
    second: sample.aliens,
    third: sample.cowboys_and_aliens,
    operation: 'plus'
  }

  constructor(props) {
    super(props)
    this.changeOperation = this.changeOperation.bind(this)
  }

  render() {
    const { first, second, third, operation } = this.state

    return (
      <main className="app">
        <header>
          <h1>Movie Maths</h1>
        </header>
        <div className="equation">
          <Movie movie={first} onChange={movie => this.change('first', movie)} />
          <Operator operator={operation} onClick={this.changeOperation} />
          <Movie movie={second} onChange={movie => this.change('second', movie)} />
          <Operator operator="equals" />
          <Movie movie={third} readOnly loading />
        </div>
        <footer>
          <p>
            <span>Maths by <a href="https://twitter.com/simoncarryer">@simoncarryer</a>.</span>
            {' '}
            <span>UI by <a href="https://twitter.com/fauxparse">@fauxparse</a>.</span>
          </p>
          <p>
            This product uses
            the <a href="https://www.themoviedb.org/">TMDb</a> API
            but is not endorsed or certified by TMDb.
          </p>

          <a href="https://www.themoviedb.org/" className="tmdb-logo">
            <img src={TMDBLogo} alt="Powered by The Movie DB" />
          </a>
        </footer>
      </main>
    )
  }

  async change(which, movie) {
    this.setState({ [which]: movie })
    if (!movie || !this.state.first || !this.state.second) {
      this.setState({ third: undefined, loading: true })
    } else { 
      await this.calculateMovies(this.state.operation)
    }
  }

  async calculateMovies(operation) {
    const movieOperation = operation === 'plus'
        ? Movies.addMovies
        : Movies.subtractMovies;

    const movieId = movieOperation(this.state.first.id, this.state.second.id)

    const resultMovie = await Movies.getByImdbId('tt0097814');

    const movieObject =
    {
      id: resultMovie.id,
      title: resultMovie.title,
      year: resultMovie.release_date.split("-")[0],
      image: `http://image.tmdb.org/t/p/w300${resultMovie.poster_path}`
    }

    this.setState({ third: movieObject, loading: false, operation });
  }

  changeOperation() {
    const operation = this.state.operation === 'plus' ? 'minus' : 'plus';
    this.calculateMovies(operation);
  }
}

export default App
