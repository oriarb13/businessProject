import { utils } from "./utils.js";
import { API_KEY } from "./secret.js";

const selectPopular = document.querySelector("#movie-filter");
let selectedValue = 'week';
const weekDayTitle = document.getElementById('week/day');

const topRatedList = document.getElementById("top-rated-list");
const movieList = document.getElementById('movie-list');

const favorites_STORAGE_KEY = 'favorites';
const favorites = utils.getFromStorage(favorites_STORAGE_KEY) || [];

const favoriteEl = document.getElementById('favorites');
const homeEl = document.getElementById('home');
const moviesTitleEl = document.getElementById("moovies-title");

const searchNameInput = document.getElementById('searchName-input');
const searchNameButton = document.getElementById('searchName-button');

let currentIndex = 0; // Start from the first movie

//home page
function homePage() {
    fetchMoviesTopRated();
    fetchMovies();
    moviesTitleEl.innerHTML = `Popular movies`;
}

//top rated movies
function fetchMoviesTopRated() {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/top_rated',
        params: { language: 'en-US', page: '1' },
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };
    
    axios
        .request(options)
        .then(function (response) {
            const movies = response.data.results;
            renderTopMovies(movies);
        })
        .catch(function (error) {
            console.error(error);
        });
}

//get the popular movies by api
function fetchMovies() {
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/trending/movie/${selectedValue}`,
        params: { language: 'en-US' },
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
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

//render top movies
function renderTopMovies(movies) {
    topRatedList.innerHTML = '';
    
    const carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel-inner');

    movies.forEach(movie => {
        const movieDiv = createMovieCard(movie);
        carouselInner.appendChild(movieDiv);
    });

    topRatedList.appendChild(carouselInner);
    updateCarousel();
}

function updateCarousel() {
    const itemsToShow = 3; // Number of movies to show at once
    const carouselInner = document.querySelector('.carousel-inner');
    const totalMovies = carouselInner.childElementCount;

    // Adjust carousel position
    carouselInner.style.transform = `translateX(-${(currentIndex / itemsToShow) * 100}%)`;
}

document.querySelector('.prev-button').addEventListener('click', () => {
    const totalMovies = topRatedList.querySelector('.carousel-inner').childElementCount;
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

document.querySelector('.next-button').addEventListener('click', () => {
    const totalMovies = topRatedList.querySelector('.carousel-inner').childElementCount;
    if (currentIndex < totalMovies - 3) { // Assuming 3 items visible at once
        currentIndex++;
        updateCarousel();
    }
});

//render movies
function renderMovies(movies) {
    movieList.innerHTML = '';
    
    movies.forEach(movie => {
        const movieDiv = createMovieCard(movie);
        movieList.appendChild(movieDiv);
    });
}

//create movie dom element
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
    
    //star icon
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

//select by week or day
selectPopular.addEventListener("change", () => {
    selectedValue = selectPopular.value === 'daily' ? 'day' : 'week';
    console.log('Selected value:', selectedValue);
    homePage();
    weekDayTitle.innerHTML = selectPopular.value === 'daily' ? 'daily top movies' : 'weekly top movies';
});

favoriteEl.addEventListener("click", () => {
    renderMovies(favorites);
    moviesTitleEl.innerHTML = `Favorites movies`;
    hideElement(selectPopular);
    hideElement(weekDayTitle);
});

homeEl.addEventListener("click", () => {
    homePage();
    showElement(selectPopular);
    showElement(weekDayTitle);
});

//hidden func
function hideElement(el) {
    el.classList.add('hidden');
}

function showElement(el) {
    el.classList.remove('hidden');
}

//search by name
searchNameButton.addEventListener("click", () => {
    let nameValue = searchNameInput.value.trim();
    if (nameValue) {
        searchMovies(nameValue);
    } else {
        prompt("please enter a movie name.");
    }
});

const searchMovies = async (nameValue) => {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {
            query: nameValue,
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

homePage();
