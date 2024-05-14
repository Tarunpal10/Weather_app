// a4742aac4451c5dc87c730e69807ea6f



// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}

const apikey="a4742aac4451c5dc87c730e69807ea6f"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?untis=matric&q="

const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weathericon= document.querySelector(".weather-icon")


async function checkWeather(city){
    const response = await fetch(apiUrl+city+`&appid=${apikey}`)
    var data= await response.json()
    console.log(data)

    document.querySelector(".city").innerHTML=data.name 
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c" 
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%"
    document.querySelector(".wind").innerHTML=data.wind.speed +"kmph"
    
    if(data.weather[0].main=="Clouds"){
        weathericon.src="./clouds.png"
    } else if(data.weather[0].main=="Clear"){
        weathericon.src="./clear.png"
    } else if(data.weather[0].main=="Rain"){
        weathericon.src="./rain.png"
    } else if(data.weather[0].main=="Drizzle"){
        weathericon.src="./drizzle.png"
    } else if(data.weather[0].main=="Mist"){
        weathericon.src="./mist.png"
    } 
    document.querySelector(".weather").style.display="block"
}
searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value)
})
checkWeather()
