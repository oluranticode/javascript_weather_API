const api = {
    key : "0ffa5cb1f1bdbde704c88b6337840dc4",
    baseUrl: "https://api.openweathermap.org/data/2.5/"
}

    // get the DOMs
    const searchbox = document.querySelector('.search-box');
    searchbox.addEventListener('keypress', setQuery);

    function setQuery(evt){
        if(evt.keyCode == 13) {
            getResults(searchbox.value);
            console.log(searchbox.value);
        }
    }

    function getResults(query){
        fetch(`${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        })
        .then(displayResults);
    }

    function displayResults (result) {
        console.log(result);

        let city = document.querySelector(".city");        
        city.innerText = `${result.name}, ${result.sys.country}`;

        let temp = document.querySelector(".temp");
        // temp.innerText = `${Math.random(result.main.temp).toFixed(0)}C`;
        temp.innerText = `${result.main.temp}C`;

        let weather = document.querySelector(".weather");
        weather.innerText = `${result.weather[0].main}`;


        let hillow = document.querySelector(".hi-low");
        hillow.innerText = `${result.main.temp_min}C / ${result.main.temp_max}C`;

        // date
        // let now = new Date();
        let date = document.querySelector(".location .date");
        // date.innerText = getDate(now);
        date.innerText = getDate();
    }

    function getDate(){
        let d = new Date();
        let months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
'Friday', 'Saturday'];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
    }