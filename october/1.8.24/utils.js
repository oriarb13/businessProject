import { API_KEY } from "./secret.js";

document.addEventListener("DOMContentLoaded", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        alert("גאו לוקיישן לא נתמך בדפדפן הזה.");
    }

    function success(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getWeather(lat, lon);
    }

    function error() {
        alert("לא ניתן לקבוע את המיקום שלך.");
    }

    async function getWeather(lat, lon) {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${API_KEY}&units=metric&lang=he`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('בעיה בקבלת נתוני מזג האוויר');
            }
            const data = await response.json();

            // מילוי הנתונים להיום
            const cityName = data.timezone; // יש לשנות את זה לשם העיר אם יש צורך
            const currentWeather = data.current.weather[0];
            const temp = data.current.temp;
            const description = currentWeather.description;
            const maxTemp = data.daily[0].temp.max;
            const minTemp = data.daily[0].temp.min;
            const icon = `http://openweathermap.org/img/wn/${currentWeather.icon}.png`;

            // עדכון פרטי מזג האוויר להיום
            document.getElementById('city').innerText = cityName;
            document.getElementById('img').innerHTML = `<img src="${icon}" alt="${description}">`;
            document.getElementById('deg').innerText = `${temp}°C`;
            document.getElementById('weather').innerText = description;
            document.getElementById('degrees').innerText = `${maxTemp}°C/${minTemp}°C`;

            // עדכון נתוני מזג האוויר לימים הבאים
            const otherDaysDiv = document.getElementById('other-days');
            otherDaysDiv.innerHTML = ''; // ניקוי תצוגה קודמת

            data.daily.slice(1, 4).forEach((day) => {
                const dayIcon = day.weather[0].icon;
                const dayDescription = day.weather[0].description;
                const dayMax = day.temp.max;
                const dayMin = day.temp.min;
                const dayDate = new Date(day.dt * 1000).toLocaleDateString('he-IL', { weekday: 'long' });

                otherDaysDiv.innerHTML += `
                    <div>
                        <img src="http://openweathermap.org/img/wn/${dayIcon}.png" alt="${dayDescription}">
                        <span>${dayDate}</span>
                        <span>${dayMax}°C/${dayMin}°C</span>
                    </div>
                `;
            });

        } catch (err) {
            console.error(err);
            alert("אירעה שגיאה במהלך קבלת נתוני מזג האוויר.");
        }
    }
});

