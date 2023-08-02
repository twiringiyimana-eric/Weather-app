const api_key = "5d9840e44a8ae22baed51974ec1bb853";
      const api_url ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

      const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");
      async function checkWeather(city) {
        const api = await fetch(api_url + city + `&appid=${api_key}`);
        var data = await api.json();
        // console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.main.speed + " km/h";
        
      }


      searchBtn.addEventListener("click", () => {
        document.querySelector(".weather").style.display="block";
        checkWeather(searchBox.value);
      });
      checkWeather();