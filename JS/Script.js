//Materailize CSS Slider
let elems = document.querySelectorAll(".slider");
let instances = M.Slider.init(elems, {
  overlayActive: true,
  indicators: false,
  height: 500,
});
//Materailize CSS modal
let elem = document.querySelectorAll(".modal");
let instan = M.Modal.init(elem, {
  opacity: 0.4,
});

const u_location = document.getElementById("user-location");
const u_temp = document.getElementById("user-temp");
const u_icon = document.getElementById("icon-sec");
const u_condition = document.getElementById("user-condition");
const u_city = document.getElementById("u-city");
const u_hum = document.getElementById("u-hum");
const u_des = document.getElementById("u-des");
navigator.geolocation.getCurrentPosition(gotLocation, accessDenied);
function gotLocation(position) {
  // console.log(position);
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  // console.log(lat,long);
  gettingdata(lat, long);
}
function accessDenied(error) {
  // console.log(error.code);

  if (error.code == 1) {
    u_location.innerHTML = "Access Denied";
  }
}

function gettingdata(lat, long) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=6d3b1c1ece7d3b33c4cec5d87cfe493d`
  )
    .then((data) => {
      //   console.log(data);
      return data.json();
    })
    .then((weather) => {
      //    console.log(weather);
      u_location.innerHTML = u_city.innerHTML = weather.name;
      u_temp.innerHTML = `${weather.main.temp} C`;
      let icon = weather.weather[0].icon;
      // console.log(icon);
      u_icon.src = `http://openweathermap.org/img/wn/${icon}.png`;
      u_condition.innerHTML = weather.weather[0].main;
      u_hum.innerHTML = "Humidity: " + weather.main.humidity;
      u_des.innerHTML = weather.weather[0].description;
    });
}

let cities = ["Mumbai", "Kolkata", "Tokyo", "Toronto", "London"];
let city1 = document.getElementById("city1");
let city2 = document.getElementById("city2");
let city3 = document.getElementById("city3");
let temp1 = document.getElementById("temp1");
let temp2 = document.getElementById("temp2");
let temp3 = document.getElementById("temp3");
let condi1 = document.getElementById("cond1");
let condi2 = document.getElementById("cond2");
let condi3 = document.getElementById("cond3");
let city_ID = [city1, city2, city3];
let temp_ID = [temp1, temp2, temp3];
let condi_ID = [condi1, condi2, condi3];

function weatherDetails(city, i) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6d3b1c1ece7d3b33c4cec5d87cfe493d`
  )
    .then((data) => {
      return data.json();
    })
    .then((wData) => {
      //  console.log(wData);
      city_ID[i].innerHTML = wData.name;
      temp_ID[i].innerHTML = `${wData.main.temp} C`;
      condi_ID[i].innerHTML = wData.weather[0].description;
    });
}
weatherDetails(cities[0], 0);
weatherDetails(cities[1], 1);
weatherDetails(cities[2], 2);

function weather_info(city, i) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6d3b1c1ece7d3b33c4cec5d87cfe493d`
  )
    .then((data) => {
      return data.json();
    })
    .then((w_info) => {
      //  console.log(w_info);

      /*This Approach is not at all efficient but i'm using this approach 
    rather than using a foreach loop because the frontend part was finished 
    a while ago  But i get to do the coding part after my exam...
*/
      let row1 = getid("row1");
      let city1 = row1.getElementsByClassName("city")[0];
      let temp1 = row1.getElementsByClassName("temp")[0];
      let row2 = getid("row2");
      let city2 = row2.getElementsByClassName("city")[0];
      let temp2 = row2.getElementsByClassName("temp")[0];
      let row3 = getid("row3");
      let city3 = row3.getElementsByClassName("city")[0];
      let temp3 = row3.getElementsByClassName("temp")[0];
      let row4 = getid("row4");
      let city4 = row4.getElementsByClassName("city")[0];
      let temp4 = row4.getElementsByClassName("temp")[0];
      let row5 = getid("row5");
      let city5 = row5.getElementsByClassName("city")[0];
      let temp5 = row5.getElementsByClassName("temp")[0];
      cityList = [city1, city2, city3, city4, city5];
      tempList = [temp1, temp2, temp3, temp4, temp5];
      cityList[i].innerHTML = w_info.name;
      tempList[i].innerHTML = `${w_info.main.temp} C`;
    });
}
weather_info(cities[0], 0);
weather_info(cities[1], 1);
weather_info(cities[2], 2);
weather_info(cities[3], 3);
weather_info(cities[4], 4);

function getid(ID) {
  return document.getElementById(ID);
}
