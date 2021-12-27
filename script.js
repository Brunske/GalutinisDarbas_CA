//
// About section tab navigation
//

const tabNavigationElements = document.querySelectorAll(".about .tab-navigation li");
const tabContentElements = document.querySelectorAll(".about .tab-content");

function removeActiveClassesFromElements(elements) {
    for (let element of elements) {
        element.classList.remove("active");
    }
}

for (let tabElement of tabNavigationElements) {
    tabElement.addEventListener("click", function() {
        const target = this.dataset.target; // "register" / "apply" / "receive"

        removeActiveClassesFromElements(tabNavigationElements);
        this.classList.add("active");

        removeActiveClassesFromElements(tabContentElements);
        document.querySelector('.tab-content[data-tab="'+target+'"]').classList.add('active');
    });
}

//
// Reviews section swiper gallery
//

const swiper = new Swiper('.reviews-swiper', {
    speed: 900,
    slidesPerView: 1,
    spaceBetween: 50,
    autoHeight: true,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        1000: {
          slidesPerView: 3,
          spaceBetween: 60
        },
        600: {
            slidesPerView:2,
            spaceBetween: 60
        }
      }
});

//
// Get weather data from openweather API
//

const url = "https://api.openweathermap.org/data/2.5/weather?q=Zarasai&units=metric&appid=ae6f4d4b5d3ef4209d9e27805c7d0dcc";
const weatherElement = document.getElementById("weather-in-celsius");
const weatherLocation = document.getElementById("city-weather");

function getCurrentWeatherInCelsius() {
    const http = new XMLHttpRequest();
    http.open("GET", url);
    http.addEventListener('load', function() {
        const response = JSON.parse(http.response);
        const temperature = Math.round(response.main.temp);

        if (temperature > 0) {
            weatherElement.innerText = "+" + temperature;
        } else {
            weatherElement.innerText = temperature;
        }
    })
    http.send();
}

function getCurrentWeatherLocation(){
    const http = new XMLHttpRequest();
    http.open("GET", url);
    http.addEventListener('load', function(){
        const response = JSON.parse(http.response);
        const location = response.name;
        const country = response.sys.country;
        weatherLocation.innerHTML = location + ", " + country;
    })
    http.send();
}

window.addEventListener('load', getCurrentWeatherInCelsius);
window.addEventListener('load', getCurrentWeatherLocation);



//Get weather data from PoenWeather
//API key below
//ae6f4d4b5d3ef4209d9e27805c7d0dcc



//
//Mobile menu
//
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

//
// form validation
//

function validateForm() {
    let x = document.forms["hero-form"]["fname"].value;
    if (x == "") {
      alert("First name must be filled out");
      return false;
    }
    let y = document.forms["hero-form"]["lname"].value;
    if (y == "") {
        alert("Last name must be filled out");
        return false;
    }
    let z = document.forms["hero-form"]["pnumb"].value;
    if (z == "") {
        alert("Phone number must be filled out");
        return false;
    }
    let xx = document.forms["hero-form"]["subscription"].value;
    if (xx == "") {
        alert("Subscription must be selected");
        return false;
    }
  }

  function validateWeatherForm() {
    let x = document.forms["weather-form"]["fname"].value;
    if (x == "") {
      alert("First name must be filled out");
      return false;
    }
    let y = document.forms["weather-form"]["lname"].value;
    if (y == "") {
        alert("Last name must be filled out");
        return false;
    }
    let z = document.forms["weather-form"]["pnumb"].value;
    if (z == "") {
        alert("Phone number must be filled out");
        return false;
    }
    let xx = document.forms["weather-form"]["subscription"].value;
    if (xx == "") {
        alert("Subscription must be selected");
        return false;
    }
  }