document.getElementById('searchButton').addEventListener('click', searchMovies);

let api_key = '9f50e2af6a12c6bda6f18592b381bd2d';
let urlBase = 'https://api.themoviedb.org/3/search/movie';
let urlImg =  'https://image.tmdb.org/t/p/w200'

let resultContainer = document.getElementById('results');

function searchMovies() {
	resultContainer.innerHTML = 'Cargando...';
	let searchInput = document.getElementById('searchInput').value;

	fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
		.then(response => response.json())
		.then(response => displayMovies(response.results));
}

function displayMovies(movies) {
	
	resultContainer.innerHTML = '';

	if (movies.length === 0) {
		resultContainer.innerHTML = '<p>No hay resultados de tu búsqueda.</p>';
		return;
	}

	movies.forEach((movie) => {
		let = movieDiv = document.createElement('div');
		movieDiv.classList.add('movie');

		let title = document.createElement('h2');
		title.textContent = movie.title;

		let releaseDate = document.createElement('p');
		releaseDate.textContent =
			'Lanzamiento fue: ' + movie.release_date;

		let overview = document.createElement('p');
		overview.textContent = movie.overview;

		let posterPath = urlImg + movie.poster_path
		let poster = document.createElement('img')
		poster.src = posterPath

		let popularity = document.createElement('p');
		popularity.textContent = `Popularidad: ${movie.popularity}`;

		let vote_average = document.createElement('p');
		vote_average.textContent = `Votos: ${movie.vote_average}`;

		movieDiv.appendChild(poster)
		movieDiv.appendChild(title)
		movieDiv.appendChild(releaseDate)
		movieDiv.appendChild(overview)
		movieDiv.appendChild(popularity)
		movieDiv.appendChild(vote_average)

		resultContainer.appendChild(movieDiv)

	});
}
