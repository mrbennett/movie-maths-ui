class Movies {
  constructor(apiKey) {
    this.apiKey = apiKey
    this.hannibalUrl = "localhost"
  }

  async configuration(key) {
    if (!this._configuration) {
      this._configuration = await this.fetch('configuration')
    }
    return this._configuration[key]
  }

  async search(title) {
    const hannibal = await this.fetchHannibal();
    console.log(hannibal);
    return hannibal.slice(0, 10).map(movie => ({
      id: "123",
      title: movie.substring(0, movie.length - 7),
      year: /\(([0-9][0-9][0-9][0-9])\)/.exec(movie)[1],
      image: "http://weknowyourdreams.com/images/dog/dog-13.jpg"
    }))
  }
  
  async getImage(title, year) {
    const data = await this.fetch('search/movie', { page: 1, query: title, year });
    // Validate that we select the correct movie from the list returned
    const configuration = await this.configuration('images');
    const image_path = `${configuration.base_url}w300${data.results[0].poster_path}`
    return image_path
  }

  async fetch(action, parameters = {}) {
    return fetch(this.url(action, parameters)).then(response =>
      response.json())
  }

  async fetchHannibal() {
    return fetch(`http://${this.hannibalUrl}:5000/movies`)
      .then(response => response.json())
  }

  url(action, parameters = {}) {
    var url = `https://api.themoviedb.org/3/${action}?language=en-US` +
      `&api_key=${this.apiKey}`
    for (var key in parameters) {
      url += `&${key}=${encodeURIComponent(parameters[key])}`
    }
    return url
  }
}

export default new Movies(process.env.REACT_APP_TMDB_KEY)
