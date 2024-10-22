import { utils } from "./utils.js";
import{ API_KEY  } from "./secret.js"

const selectPopular = document.querySelector("#movie-filter");
let selectedValue = 'week';
const movieList = document.getElementById('movie-list');

const favorites_STORAGE_KEY = 'favorites';
const favorites = utils.getFromStorage(favorites_STORAGE_KEY) || [];

const favoriteEl = document.getElementById('favorites');
const homeEl = document.getElementById('home');

const searchIdInput = document.getElementById('searchId-input');
const searchIdButton = document.getElementById('searchID-button');

const searchNameInput = document.getElementById('searchName-input');
const searchNameButton = document.getElementById('searchName-button');


function homePage() {
    fetchMovies();
}


searchNameButton.addEventListener("click", () => {
    const nameValue = searchNameInput.value.trim();
    if (nameValue) {
        searchMovies(nameValue);
    } else {
        console.log("Please enter a movie name.");
    }
});

// Modify the searchMovies function to render the results
const searchMovies = async (nameValue) => {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {
            nameValue: nameValue,
            include_adult: false,
            language: 'en-US',
            page: 1
        },
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };

    try {
        const response = await axios.request(options);
        const movies = response.data.results;
        renderMovies(movies);  // Render the search results
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
};


function fetchMovies() {
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/trending/movie/${selectedValue}`,
        params: { language: 'en-US' },
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMGQ0OTMzZjc4Y2U4MThhMjg3NjllNTZkYzQ0N2ExMCIsIm5iZiI6MTcyODkyNjQ5OS44NDgxNDEsInN1YiI6IjY3MGNlYThhYjE1ZDk3YjFhOTNjZmUyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dOYbxAlbjKPvlfrZlMqch6GrworRKvY_QojVZDVTRS8'
        }
    };
    
    axios
    .request(options)
    .then(response => {
        const movies = response.data.results;
        renderMovies(movies);
    })
    .catch(error => {
        console.error(error);
    });
}

function renderMovies(movies) {
    movieList.innerHTML = '';
    
    movies.forEach(movie => {
        const movieDiv = createMovieCard(movie);
        movieList.appendChild(movieDiv);
    });
}

function createMovieCard(movie) {
    const movieDiv = document.createElement('div');
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    movieDiv.classList.add('movieCard');
    
    movieDiv.innerHTML = `
        <div class="movie-image" style="background-image: url('${imageUrl}');"></div>
        <div class="movieInfo">
            <h3>
                <span class="star-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
                        <path d="M12 .587l3.668 7.568 8.343 1.215-6.033 5.832 1.423 8.284L12 18.897l-7.4 3.888 1.423-8.284-6.033-5.832 8.343-1.215z"/>
                    </svg>
                </span>
                ${movie.title}
            </h3>
            <p>Release Date: ${movie.release_date}</p>
            <p class="rate">Rating: ${movie.vote_average}</p>
        </div>
        <div class="movieAbout">${movie.overview}</div>
    `;

    const starIcon = movieDiv.querySelector('.star-icon');
    updateStarIcon(starIcon, movie);

    starIcon.addEventListener('click', () => {
        toggleFavorite(movie, starIcon);
    });

    return movieDiv;
}

function updateStarIcon(starIcon, movie) {
    if (favorites.find(item => item.id === movie.id)) {
        starIcon.classList.add('clicked');
    }
}

function toggleFavorite(movie, starIcon) {
    starIcon.classList.toggle('clicked');

    const existingIndex = favorites.findIndex(item => item.id === movie.id);
    if (existingIndex === -1) {
        favorites.push(movie);
    } else {
        favorites.splice(existingIndex, 1);
    }

    console.log(favorites);
    utils.saveToStorage(favorites_STORAGE_KEY, favorites);
}

selectPopular.addEventListener("change", () => {
    selectedValue = selectPopular.value === 'daily' ? 'day' : 'week';
    console.log('Selected value:', selectedValue);
    homePage();
});

homePage();

favoriteEl.addEventListener("click",() => {
    renderMovies(favorites)
});

homeEl.addEventListener("click",() => {
    homePage()
});