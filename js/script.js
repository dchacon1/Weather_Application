// const getWeatherByCity = function(city) {
//     return "http://api.openweathermap.org/data/2.5/weather?appid=dc884d8347e8b27fc4bbbc265f2e9d3c&q=" + city;
// }

// =================================================== //

// Your code goes here.

new Vue({
    el: '#weather-form',
    data: { 
        cityName: '',
        stateName: '',
        tempF: '',
        humidity: ''
    },
    
    methods: {
        getWeather: function() {
            const apiKey = "dc884d8347e8b27fc4bbbc265f2e9d3c";
            var url = "https://api.openweathermap.org/data/2.5/weather?appid=" + apiKey;


            if(this.cityName.length > 0){
                url += "&q=" + this.cityName;

                if(this.stateName.length > 0){
                    url += "," + this.stateName;
                }
            }



            return fetch(url).then(res => res.json())
            .then(posts => {
                console.log(posts);
                this.tempF = (Math.round(10*(posts.main.temp * (9/5) - 459.67))/10) + '°F';
                this.humidity = posts.main.humidity + '%';
            })





            // return fetc
            
        }
    }
})