const selectPopular = document.querySelector("#movie-filter");
let selectedValue = 'week';
const movieList = document.getElementById('movie-list');

// popular of the day
function homePage() {
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
    .then(function (response) {
        const movies = response.data.results;
        movieList.innerHTML = ''; // Clear previous content
        
        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movieCard');

            const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            
            movieCard.innerHTML = `
                <div class="movieInner">
                    <div class="movieFront">
                        <img src="${imageUrl}" alt="${movie.title}">
                        <h3>${movie.title}</h3>
                    </div>
                    <div class="movieBack">
                        <div class="movieAbout">
                            <p>Release Date: ${movie.release_date}</p>
                            <p class="rate">Rating: ${movie.vote_average}</p>
                        </div>
                    </div>
                </div>
            `;
            
            movieList.appendChild(movieCard);
        });
    })
    .catch(function (error) {
        console.error(error);
    });
}

homePage();

selectPopular.addEventListener("change", () => {
    if (selectPopular.value === 'daily') {
        selectedValue = 'day';
    } else if (selectPopular.value === 'weekly') {
        selectedValue = 'week';
    }

    console.log('Selected value:', selectedValue);
    homePage();
});
