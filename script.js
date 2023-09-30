const inputBox=document.querySelector(".input-box");
const searchBtn=document.getElementById("searchBtn");
const weather_img=document.querySelector(".weather-img");
const temperature=document.querySelector(".temperature");
const description=document.querySelector(".description");
const humidity=document.getElementById("humidity");
const wind_speed=document.getElementById("wind-speed");
const location_not_found=document.querySelector(".location-not-found")

const weather_body=document.querySelector(".weather-body")

async function checkWeather(city){
   const api_key="452441a43c5e5b76bd1b6c67a330d03d";
   const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

   const weather_data= await fetch(`${url}`).then(response=> response.json());
   
   console.log(weather_data);

   if(weather_data.cod=== "404"){
    location_not_found.style.display="flex";
    weather_body.style.display="none";
    return;
   }
   location_not_found.style.display="none";
   weather_body.style.display="flex";


   temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
   description.innerHTML=`${weather_data.weather[0].description}`;
   humidity.innerHTML=`${weather_data.main.humidity}%`;
   wind_speed.innerHTML=`${weather_data.wind.speed}Km/H`;

   switch(weather_data.weather[0].main){
    case "clouds":
        weather_img.src="/Weather Icons/cloud.svg";
        break;
    case "clear":
        weather_img.src="/Weather Icons/clear.svg";
        break;
    case "Rain":
        weather_img.src="/Weather Icons/rain.svg";
        break;
    case "Snow":
        weather_img.src="/Weather Icons/snow.svg";
        break;
    case "Haze":
        weather_img.src="/Weather Icons/haze.svg";
        break;
    case "Storm":
        weather_img.src="/Weather Icons/storm.svg";
        break;
    
   }

   

}

searchBtn.addEventListener("click",()=>{
    checkWeather(inputBox.value);
})