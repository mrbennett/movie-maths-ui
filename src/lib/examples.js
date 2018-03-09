const example_movies = {
  // Cowboys + Aliens = Coybows and Aliens
  cowboys: {
    id: 30462,
    title: 'The Comancheros',
    year: 1961,
    image: 'http://image.tmdb.org/t/p/w300/nJOTH28vU6Jo6VxylCWMZ3jEe75.jpg',
  },
  aliens: {
    id: 679,
    title: 'Aliens',
    year: 1986,
    image: 'http://image.tmdb.org/t/p/w300/nORMXEkYEbzkU5WkMWMgRDJwjSZ.jpg',
  },
  cowboys_and_aliens: {
    id: 49849,
    title: 'Cowboys & Aliens',
    year: 2011,
    image: 'http://image.tmdb.org/t/p/w300/tXEHvxU315Yu7bEaMMRcpDpW6RI.jpg',
  },
  // Endless summer + Alien = Lilo & Stitch
  the_endless_summer: {
    id: 123,
    title: 'The Endless Summer',
    year: 1966,
    image: 'http://image.tmdb.org/t/p/w300/jqsZQPxeMjcvVN5aFGgAk7qQodr.jpg',
  },
  alien: {
    id: 456,
    title: 'Alien',
    year: 1979,
    image: 'http://image.tmdb.org/t/p/w300/2h00HrZs89SL3tXB4nbkiM7BKHs.jpg',
  },
  lilo_and_stitch: {
    id: 789,
    title: 'Lilo & Stitch',
    year: 2002,
    image: 'http://image.tmdb.org/t/p/w300/tVaEulzowKhMhDvHNNYb9rNEZPB.jpg',
  },
  // Point Break + Cars = Fast & Furious
  point_break: {
    id: 111,
    title: 'Point Break',
    year: 1991,
    image: 'http://image.tmdb.org/t/p/w300/zAt6vprHgkQCaQ5n6qwfXd4zAcD.jpg',
  },
  cars: {
    id: 222,
    title: 'Cars',
    year: 2006,
    image: 'http://image.tmdb.org/t/p/w300/5damnMcRFKSjhCirgX3CMa88MBj.jpg',
  },
  fast_and_furious: {
    id: 333,
    title: 'Fast & Furious',
    year: 2001,
    image: 'http://image.tmdb.org/t/p/w300/x4So4OkqnjfOSBCCNd5uosMmQiB.jpg',
  },
};

const example_equations = [
  {
    first: example_movies.cowboys,
    second: example_movies.aliens,
    third: example_movies.cowboys_and_aliens,
  },
  {
    first: example_movies.the_endless_summer,
    second: example_movies.alien,
    third: example_movies.lilo_and_stitch,
  },
  {
    first: example_movies.point_break,
    second: example_movies.cars,
    third: example_movies.fast_and_furious,
  },
];

const getExampleEquation = () => {
  return example_equations[Math.floor(Math.random() * example_equations.length)];
};

export default getExampleEquation;
