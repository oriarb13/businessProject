import { utils } from "./utils.js";
import{ API_KEY  } from "./secret.js"

const selectPopular = document.querySelector("#movie-filter");
let selectedValue = 'week';
const weekDayTitle = document.getElementById('week/day');

const topRatedList = document.getElementById("top-rated-list");
const prevBtn = document.getElementById(`prev`)
const nextBtn = document.getElementById(`next`)


const movieList = document.getElementById('movie-list');
let num=0;

const favorites_STORAGE_KEY = 'favorites';
const favorites = utils.getFromStorage(favorites_STORAGE_KEY) || [];

const favoriteEl = document.getElementById('favorites');
const homeEl = document.getElementById('home');
const aboutEl = document.getElementById('about');

const moviesTitleEl = document.getElementById("moovies-title");

const searchNameInput = document.getElementById('searchName-input');
const searchNameButton = document.getElementById('searchName-button');

let topList=0;
let currentIndex = 0
const carousel = document.querySelector(".carousel")
const carouselItems = document.querySelectorAll(".carousel-item")
const carouselContainer = document.getElementById("top-rated");
const aboutPageEl = document.getElementById("about-page");

const themeToggleButton = document.getElementById('theme-toggle');
const exitBtn = document.getElementById("exitBtn");



const mainWrap=document.getElementById("main1")

const trailer = document.getElementById('trailer3');

const movieName = document.getElementById('movie-name3');
const releaseDate = document.getElementById('date3');
const rating = document.getElementById('rating3');
const overview = document.querySelector('#overview3 p');
const bgImage = document.getElementById('bg-Image3');

const actors = document.getElementById('actors');
const wrapWrap=document.getElementById(`wrap-wrap`)

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

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === topList - 1) ? 0 : currentIndex + 1;
    console.log(currentIndex);
    console.log(topList);
    
    updateCarousel()
})

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? topList - 1 : currentIndex - 1;
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
        topList++;
        const movieDiv = createTopMovieCard(movie);
        topRatedList.appendChild(movieDiv);

        //call movie page func
        movieDiv.addEventListener(`click`,()=>{
            moviePage(movie);
        })
    });
}

//renderr movies
function renderMovies(movies) {
    num=0;
    movieList.innerHTML = '';
    
    movies.forEach(movie => {
        const movieDiv = createMovieCard(movie);
        movieList.appendChild(movieDiv);

        movieDiv.addEventListener(`click`,()=>{
            moviePage(movie);
        })
    });
}

//create top movie dom element
function createTopMovieCard(movie) {
    const movieDiv = document.createElement('div');
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    movieDiv.classList.add('carousel-item');
    num++;
    movieDiv.innerHTML = `
    <h3>
        <span class="star-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="40" height="40">
            <path d="M12 .587l3.668 7.568 8.343 1.215-6.033 5.832 1.423 8.284L12 18.897l-7.4 3.888 1.423-8.284-6.033-5.832 8.343-1.215z"/>
            </svg>
        </span>
        ${movie.title}
    </h3>
    <div class="movieInfo1">
        <p>Release Date: ${movie.release_date}</p>
        <p class="rate">Rating: ${movie.vote_average}</p>
    </div>

    <div class="card-inner1">
        <div class="card-front1">
            <div class="movie-image1" style="background-image: url('${imageUrl}');"></div>
        </div>
        <div class="card-back1">
            <div class="movieAbout1">${movie.overview}</div>
        </div>
    </div>
    <div class="number">number ${num}</div>

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
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="50" height="50">
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
            <div class="movieInfo">
                <p>Release Date: ${movie.release_date}</p>
                <p class="rate">Rating: ${movie.vote_average}</p>
            </div>
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

function updateStarIcon(starIcon, movie) {
    if (favorites.find(item => item.id === movie.id)) {
        starIcon.classList.add('clicked');
    }
}

function toggleFavorite(movie, starIcon) {
    starIcon.classList.toggle('clicked');
///insert to the top list    
    const existingIndex = favorites.findIndex(item => item.id === movie.id);
    if (existingIndex === -1) {
        favorites.push(movie);
    } else {
        //takeout from top list
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

//fav list
favoriteEl.addEventListener("click",() => {
    renderMovies(favorites)
    moviesTitleEl.innerHTML=`Favorites movies`
    hideElement(selectPopular)
    hideElement(weekDayTitle)
    hideElement(carouselContainer)
    showElement(movieList)
    hideElement(aboutPageEl)
    hideElement(wrapWrap)
    showElement(mainWrap)
    
});


//home page
homeEl.addEventListener("click",() => {
    homePage()
    showElement(mainWrap)
    showElement(selectPopular)
    showElement(weekDayTitle)
    showElement(carouselContainer)
    showElement(movieList)
    hideElement(aboutPageEl)
    hideElement(wrapWrap)
});


//about page
aboutEl.addEventListener(`click`,() =>{
    showElement(mainWrap)
    hideElement(selectPopular)
    hideElement(weekDayTitle)
    hideElement(carouselContainer)
    hideElement(movieList)
    showElement(aboutPageEl)
    hideElement(wrapWrap)
    hideElement(moviesTitleEl)


})

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
        renderMovies(movies);  
        hideElement(carouselContainer)
        hideElement(selectPopular)
        hideElement(weekDayTitle)
        hideElement(wrapWrap)
        moviesTitleEl.innerHTML=`${nameValue} movies`

    } catch (error) {
        console.error('Error fetching movies:', error);
    }
};

//////light mode
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

//////exit
exitBtn.addEventListener('click', () => {
    window.location.href = 'logIn.html';
});




//actors render
function displayActors(cast) {
    const actorsContainer = document.getElementById('actors');
    actorsContainer.innerHTML = ''; 

    cast.forEach(actor => {
        const actorDiv = document.createElement('div');
        actorDiv.classList.add('actor');

        const actorName = document.createElement('h3');
        actorName.textContent = actor.name;

        const profilePath = actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : 'no-image.jpg'; // תמונה ברירת מחדל
        const actorImage = document.createElement('img');
        actorImage.src = profilePath;
        actorImage.alt = actor.name;

        actorDiv.appendChild(actorName);
        actorDiv.appendChild(actorImage);

        actorsContainer.appendChild(actorDiv);
    });
}


//movie page
function moviePage(movie) {
    console.log(movie);
    
    showElement(wrapWrap)
    hideElement(mainWrap);

    movieName.textContent = movie.title;
    releaseDate.textContent = `Release Date: ${movie.release_date}`;
    rating.textContent = `Rating: ${movie.vote_average}`;
    overview.textContent = movie.overview;
    document.getElementById('bg-Image3').style.backgroundImage = `url('https://image.tmdb.org/t/p/original${movie.poster_path}')`;
    //trailer
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${movie.id}/videos`,
        params: { language: 'en-US' },
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };

    axios.request(options)
        .then(res => {
            const trailers = res.data.results;
            trailer.innerHTML = ''; 
            if (trailers.length > 0) {
                trailer.innerHTML = `<iframe width="560" height="800" src="https://www.youtube.com/embed/${trailers[0].key}" frameborder="0" allowfullscreen></iframe>`;
            } else {
                trailer.textContent = 'No trailer available.';
            }
        })
        .catch(err => {
            console.error(err);
            trailer.textContent = 'Error fetching trailer.';
        });

    // credits
    const creditsOptions = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${movie.id}/credits`,
        params: { language: 'en-US' },
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    };
    //take the actors
    axios.request(creditsOptions)
        .then(res => {
            const cast = res.data.cast; 
            displayActors(cast); //act render func
        })
        .catch(err => {
            console.error(err);
        });
}

homePage();