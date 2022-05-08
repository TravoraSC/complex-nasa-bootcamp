//too many requests for the weather
let nasaURL = `https://data.nasa.gov/resource/gvk9-iz74.json`
fetch(nasaURL)
.then(res => res.json()) // parse response as JSON
.then(data => {
  const facilityAndWeather = document.querySelector('.facilityAndWeather');
  console.log(data)
  for(i=0 ; i < data.length ; i++) {
      let li = document.createElement('li');
      li.innerText= data[i].facility
    facilityAndWeather.appendChild(li);
    li.style.listStyle = 'none'

    let lat = data[i].location.latitude
    let long = data[i].location.longitude
    console.log(data[i].facility)
    
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1b8d291de17835c9292b5eb0ff61b21d&units=imperial`
    
    fetch(weatherUrl)
    .then(res => res.json())
    .then(data => {
      li.innerText += ` Temperature: ${data.main.temp} f ˚, Feels like: ${data.main.feels_like} f˚, Weather: ${data.weather[0].description}`   
      li.style.listStyle = 'none'
    
    })
    
  }
})
.catch(err => {
  console.log(`error ${err}`)
});
