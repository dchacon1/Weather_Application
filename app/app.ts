import Vue from 'vue';

const getWeatherByCity = (city) => `http://api.openweathermap.org/data/2.5/weather?appid=dc884d8347e8b27fc4bbbc265f2e9d3c&q=${city}`;

// =================================================== //

// Your code goes here.

new Vue({
    el: '#mount',
    data: { 
        tempF: '',
        humidity: ''
    },
    
    methods: {
        getWeather: function(city) {
            return fetch(getWeatherByCity(city))
               .then(res => res.json())
               .then(posts => {
                   console.log(posts);
                   this.tempF = (Math.round(10*(posts.main.temp * (9/5) - 459.67))/10) + '°F';
                   this.humidity = posts.main.humidity + '%';
               })
        }
    }
})