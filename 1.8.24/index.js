import { utils } from "./utils.js";
import{ API_KEY  } from "./secret.js"

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


let currentIndex = 0
const carousel = document.querySelector(".carousel")
const carouselItems = document.querySelectorAll(".carousel-item")
const carouselContainer = document.getElementById("top-rated");


//home page
function homePage() {
    fetchMoviesTopRated()
    fetchMovies();
    moviesTitleEl.innerHTML=`Popular movies`
}

//carousel func
const updateCarousel = () => {
    console.log(currentIndex);
    carousel.style.transform = `translateX(${-currentIndex * 100}%)`
}

document.querySelector(".next-button").addEventListener("click", () => {
    currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
    console.log(currentIndex);
    updateCarousel()
})

document.querySelector(".prev-button").addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
    console.log(currentIndex);
    updateCarousel()
})


//top rated movies
function fetchMoviesTopRated() {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/top_rated',
        params: {language: 'en-US', page: '1'},
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };
    
    axios
        .request(options)
        .then(function (response) {
            const movies = response.data.results;
            renderTopMovies(movies)
        })
        .catch(function (error) {
            console.error(error);
    });
}


//grt the popular movies by api
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
    
    movies.forEach(movie => {
        const movieDiv = createTopMovieCard(movie);
        topRatedList.appendChild(movieDiv);
    });
}

//renderr movies
function renderMovies(movies) {
    movieList.innerHTML = '';
    
    movies.forEach(movie => {
        const movieDiv = createMovieCard(movie);
        movieList.appendChild(movieDiv);
    });
}

//create top movie dom element
function createTopMovieCard(movie) {
    const movieDiv = document.createElement('div');
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    movieDiv.classList.add('carousel-item');
    
    movieDiv.innerHTML = `
    <h3>
    <span class="star-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="40" height="40">
    <path d="M12 .587l3.668 7.568 8.343 1.215-6.033 5.832 1.423 8.284L12 18.897l-7.4 3.888 1.423-8.284-6.033-5.832 8.343-1.215z"/>
    </svg>
    </span>
    ${movie.title}
    </h3>
    <div class="movie-image" style="background-image: url('${imageUrl}');">
        <div class="movieInfo">
            <p>Release Date: ${movie.release_date}</p>
            <p class="rate">Rating: ${movie.vote_average}</p>
            <div class="movieAbout">${movie.overview}</div>
        </div>
    </div>
    `;
    
    
    //star icon
    const starIcon = movieDiv.querySelector('.star-icon');
    updateStarIcon(starIcon, movie);
    
    starIcon.addEventListener('click', () => {
        toggleFavorite(movie, starIcon);
    });
    
    return movieDiv;
}


//create movie dom element
function createMovieCard(movie) {
    const movieDiv = document.createElement('div');
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    movieDiv.classList.add('movieCard');

    movieDiv.innerHTML = `
    <h3>
        <span class="star-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="40" height="40">
                <path d="M12 .587l3.668 7.568 8.343 1.215-6.033 5.832 1.423 8.284L12 18.897l-7.4 3.888 1.423-8.284-6.033-5.832 8.343-1.215z"/>
            </svg>
        </span>
        ${movie.title}
    </h3>
        <div class="card-inner">
            <div class="card-front">
                <div class="movie-image" style="background-image: url('${imageUrl}');"></div>
            </div>
            <div class="card-back">
                <div class="movieAbout">${movie.overview}</div>
            </div>
        </div>
    `;

    // עדכון כוכב
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

//slect by week or day
selectPopular.addEventListener("change", () => {
    selectedValue = selectPopular.value === 'daily' ? 'day' : 'week';
    console.log('Selected value:', selectedValue);
    homePage();
    weekDayTitle.innerHTML= selectPopular.value === 'daily' ? 'daily top movies' : 'weekly top movies'
});

//
favoriteEl.addEventListener("click",() => {
    renderMovies(favorites)
    moviesTitleEl.innerHTML=`Favorites movies`
    hideElement(selectPopular)
    hideElement(weekDayTitle)
    
});

homeEl.addEventListener("click",() => {
    homePage()
    showElement(selectPopular)
    showElement(weekDayTitle)
    showElement(carouselContainer)
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
        hideElement(carouselContainer)
        hideElement(selectPopular)
        hideElement(weekDayTitle)
        moviesTitleEl.innerHTML=`${nameValue} movies`

    } catch (error) {
        console.error('Error fetching movies:', error);
    }
};

homePage();