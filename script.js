let result =document.getElementById("result");
let searchBtn=document.getElementById("search-button");
let cityRef=document.getElementById("city");

// hava durumu fet apı fonksiyonu
let getWeather=()=>{
    let cityValue=cityRef.value;
    if(cityValue == 0){
        result.innerHTML=`<h3 class="msg">Please enter a city name</h3>`
    }
    else{
       
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
        cityRef.value="";
        fetch(url)
        .then(resp=>resp.json())
        .then(data=>{
            result.innerHTML=`
            <h2>${data.name}</h2>
            <h4 class="desc">${data.weather[0].description}</h4>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">

            <h1>${data.main.temp} &#176;</h1>
            <div class="temp-container">
                <div>
                    <h4 class="title">min</h4>
                    <h4 class="temp">${data.main.temp_min}</h4>
                </div>
                <div>
                    <h4 class="title">max</h4>
                    <h4 class="temp">${data.main.temp_max}</h4>
                </div>
            </div>
            `
        })

        .catch(()=>{
            result.innerHTML=`<h3 class="msg">city not found</h3>`
        })
    }
    
};
searchBtn.addEventListener("click",getWeather);
window.addEventListener("load",getWeather);
