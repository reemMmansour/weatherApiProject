let city = document.querySelector(`.city`);
let cityName = document.querySelector(".city-name");
let countryName = document.querySelector(".country-name");
let tempField = document.querySelector(`.temp-deg`);
let weatherMain = document.querySelector(`.weather-main`);

let windFieldSpeed = document.querySelector(`.wind-speed`);
let humidityField = document.querySelector(`.humidity`);
let visibilityField = document.querySelector(`.visibility`);
let pressureField = document.querySelector(`.pressure`);
let cloudsField = document.querySelector(`.clouds`);
let image_1 = document.querySelector(".img1");
let image_2 = document.querySelector(".img2");
let image_3 = document.querySelector(".img3");
let image_4 = document.querySelector(".img4");
let image_5 = document.querySelector(".img5");
let image_6 = document.querySelector(".img6");
let image_7 = document.querySelector(".img7");

city.addEventListener(`input`, (event) => {
  let cityVlaue = document.querySelector(`#city`).value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityVlaue}&appid=a94c80386a93ab7aeb99e5a8844cdf96&units=metric`
  ).then((result) => {
    console.log(result);
    let data = result.json();
    setTimeout(() => {
      data.then((result) => {
        console.log(result);

        //countryName show
        countryName.innerHTML = `${result.sys.country} , `;

        //cityName show
        cityName.innerHTML = result.name;
        console.log(result.name);

        //temperature show
        tempField.innerHTML = `${parseInt(result.main.temp)} &#176;  `;

        //discription weather status
        weatherMain.innerHTML = result.weather[0].main;

        //image show
        let imageArray = [
          image_1,
          image_2,
          image_3,
          image_4,
          image_5,
          image_6,
          image_7,
        ];
        imageArray.forEach((element) => {
          element.style.display = "none";
        });
        if (result.weather[0].main === "Clear") {
          image_1.style.display = "block";
          document.body.style.background = `url('../images/white-clouds-blue-sky-sunny-day.jpg') no-repeat `;
        } else if (result.weather[0].main === "Sunny") {
          image_1.style.display = "block";
          document.body.style.background = `url('../images/white-clouds-blue-sky-sunny-day.jpg') no-repeat `;
        } else if (result.weather[0].main === "mist") {
          image_2.style.display = "block";
          document.body.style.background = `url('../images/autumn-g41213f104_19202.jpg') no-repeat `;
        } else if (result.weather[0].main === "Clouds") {
          image_3.style.display = "block";
          document.body.style.background = `url('../images/weather-effects-composition.jpg') no-repeat `;
        } else if (result.weather[0].main === "Thunderstorm") {
          image_4.style.display = "block";
          document.body.style.background = `url('../images/flash-gbc6eedfa5_1920.jpg') no-repeat `;
        } else if (result.weather[0].main === "Rain") {
          image_5.style.display = "block";
          document.body.style.background = `url('../images/heavy-rain-g05bc61f36_19201.jpg') no-repeat `;
        } else if (result.weather[0].main === "Snow") {
          image_6.style.display = "block";
          document.body.style.background = `url('../images/wintry-g0c6dbe6a5_19201.jpg') no-repeat `;
        } else if (result.weather[0].main === "Squall") {
          image_7.style.display = "block";
          document.body.style.background = `url('../images/heaven-g6e58abc6c_19202.jpg') no-repeat `;
        }
        //wind speed show
        windFieldSpeed.innerHTML = `${parseInt(result.wind.speed)} Km/h`;
        //humidity information show
        humidityField.innerHTML = `${parseInt(result.main.humidity)} %`;
        //visibility information show
        visibilityField.innerHTML = `${result.visibility} m`;
        //pressure information show
        pressureField.innerHTML = `${parseInt(result.main.pressure)} mb`;
        //clouds information show
        cloudsField.innerHTML = `${result.clouds.all} %`;
      }); //End data.then
    }); //End the first then , End fetch function
  }, 1000);
}); //End cityName.addEventListener
