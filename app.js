const url = "https://api.openweathermap.org/data/2.5/";
const key = "dabe752653933cbb20161ca08a4a5b0c";

const searchBar = document.querySelector("#searchBar");
searchBar.addEventListener("keypress", setQuery);

function setQuery(e){
    if(e.keyCode == "13"){
        getResult(searchBar.value)
    }
}

function getResult(cityName){
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=az`
    
    fetch(query)
    .then(weather =>{
        return weather.json();
    })
    .then(displayResult)
}


const displayResult = (result) => {
    let city = document.querySelector(".city");
    city.textContent = `${result.name}, ${result.sys.country}`;

    let temp = document.querySelector(".temp");
    temp.textContent = `${Math.round(result.main.temp)} °C`;

    let desc = document.querySelector(".desc");
    desc.textContent = (result.weather[0].description);

    let minmax = document.querySelector(".minmax");
    minmax.textContent = `${Math.round(result.main.temp_min)} °C / ${Math.round(result.main.temp_max)} °C`
}