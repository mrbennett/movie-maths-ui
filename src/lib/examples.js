import Movies from './movies';

async function makeMovieObject(imdbId) {
  const movie = await Movies.getByImdbId(imdbId);
  return {
    id: movie.id,
    title: movie.title,
    year: movie.release_date.split('-')[0],
    image: `http://image.tmdb.org/t/p/w300${movie.poster_path}`,
  };
}

const example_equations = [
  {
    first: makeMovieObject('tt0054757'), // The Comancheros
    second: makeMovieObject('tt0090605'), // Aliens
    third: makeMovieObject('tt0409847'), // Coybows and Aliens
    operation: 'plus',
  },
  {
    first: makeMovieObject('tt0060371'), // The Endless Summer
    second: makeMovieObject('tt0078748'), // Alien
    third: makeMovieObject('tt0275847'), // Lilo & Stitch
    operation: 'plus',
  },
  {
    first: makeMovieObject('tt0102685'), // Point Break
    second: makeMovieObject('tt0317219'), // Cars
    third: makeMovieObject('tt0232500'), // Fast & Furious
    operation: 'plus',
  },
];

const getExampleEquation = () => {
  return example_equations[Math.floor(Math.random() * example_equations.length)];
};

export default getExampleEquation;
