
// ### Goal: Use NASA's API to return all of their facility locations (~400). Display the name of the facility, its location, and the weather at the facility currently. 

// loop - ul - append child


// function createNasaItem() {
//   let li = document.createElement('li');
//   // li.textContent = ;
//   return li;
// }

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
    // li.innerText=data[i].


    let lat = data[i].location.latitude
    let long = data[i].location.longitude
    console.log(data[i].facility)
    
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1b8d291de17835c9292b5eb0ff61b21d&units=imperial`
    
    fetch(weatherUrl)
    .then(res => res.json())
    .then(data => {
      li.innerText += `Temperature: ${data.main.temp} f ˚, Feels like: ${data.main.feels_like} f˚, Weather: ${data.weather[0].description}`       
    })
    
  }
})
.catch(err => {
  console.log(`error ${err}`)
});
// document.querySelector('h3').innerText = data.location.latitude
// document.querySelector('h3').innerText = data.location.longitude

// document.querySelector('h2').innerText = data.state
// document.querySelector('h2').innerText = data.zipcode