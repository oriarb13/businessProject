import { API_KEY } from "./secret.js";

const cityEl = document.getElementById('city');
const imgEl = document.getElementById('img');

const currentDeg = document.getElementById('deg');
const currentDes = document.getElementById('weather');
const currentDegrees = document.getElementById('degrees');

const otherDays = document.getElementById('other-days');



document.addEventListener("DOMContentLoaded", () => {    //wait for dom element to load//
    if (navigator.geolocation) {   
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        alert("geo location problem");
    }

    function success(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getWeather(lat, lon);
    }

    function error() {
        alert("geo location problem");
    }

    async function getWeather(lat, lon) {
        const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=3&appid=${API_KEY}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('בעיה בקבלת נתוני מזג האוויר');
            }
            const data = await response.json();
            console.log(data);
            

            const temp = data.main.temp;
            const description = data.weather[0].description;
            console.log();
            
            cityEl.innerHTML = data.name
            const iconCode = data.weather[0].icon; // קוד האייקון
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`; // URL לתמונה
imgEl.innerHTML = `<img src="${iconUrl}" alt="${data.weather[0].description}">`;

        } catch (err) {
            console.error(err);
            alert("אירעה שגיאה במהלך קבלת נתוני מזג האוויר.");
        }
    }
});






async function fetchWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=3&appid=${API_KEY}&units=metric`;
    console.log('Request URL:', url); // הוספת הדפסת ה-URL

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}


// דוגמה לשימוש בפונקציה
const latitude = 32.0853;  // לדוגמה: תל אביב
const longitude = 34.7818;

fetchWeather(latitude, longitude)
    .then(weatherData => {
        console.log('Weather Data:', weatherData);
    });