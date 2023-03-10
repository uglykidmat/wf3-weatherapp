//_________________________DATE
/*
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;
console.log(currentDate); // "17-6-2022"

const htmldate = document.getElementById("weather-current-date");
htmldate.innerText = currentDate;
*/
//_________________________LOCATION SEARCH

function getQuery() {
    const reqValue = document.querySelector('input').value;
    console.log(reqValue);
    const reqURL = "http://api.weatherapi.com/v1/current.json?key=29de906459f141788a4134000230903&q="+reqValue+"&aqi=no";
    console.log(reqURL);

    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.addEventListener("load", responseParser);
    req.addEventListener("load", pageUpdater);
    req.addEventListener("progress", updateProgress);
    req.open("GET", reqURL);
    req.send();

}

function reqListener() {
    console.log(this.responseText);
}

function responseParser(){
    reqResponse = JSON.parse(this.responseText);
    console.log(reqResponse);
}

function pageUpdater(){

    document.getElementById("weather-city-title").innerHTML=reqResponse.location.name;
    document.getElementById("weather-current-date").innerHTML=reqResponse.location.localtime;
    document.getElementById("weather-temperature-celsius").innerHTML=reqResponse.current.temp_c;
    document.getElementById("weather-temperature-fahrenheit").innerHTML=reqResponse.current.temp_f;
    document.getElementById("weather-mood").innerHTML=reqResponse.current.condition.text;
    document.getElementById("weather-details-humidity").innerHTML=reqResponse.current.humidity;
    document.getElementById("weather-details-precipitation").innerHTML=reqResponse.current.precip_mm;
    document.getElementById("weather-details-windspeed").innerHTML=reqResponse.current.wind_kph;
   //TODO picto qui change
   //TODO alignement infos mood+details


}

function updateProgress(event) {
    if (event.lengthComputable) {
      const percentComplete = (event.loaded / event.total) * 100;
      console.log(percentComplete +"% complete...")
    } else {
        console.log("Unable to compute progress information since the total size is unknown");
    }
  }

  /*
  {
    "location":
    {
        "name":"Grenoble",
        "region":"Rhone-Alpes",
        "country":"France",
        "lat":45.17,
        "lon":5.72,
        "tz_id":"Europe/Paris",
        "localtime_epoch":1678380232,
        "localtime":"2023-03-09 17:43"
    },
    "current":
    {
        "temp_c":17.0,
        "temp_f":62.6,
        "is_day":1,
        "condition":
        {
            "text":"Partly cloudy",
            "icon":"//cdn.weatherapi.com/weather/64x64/day/116.png",
            "code":1003
        },
        "wind_kph":3.6,
        "pressure_in":29.68,
        "precip_mm":0.0,
        "humidity":48,
        "cloud":75,
        "uv":5.0
    }
}
  */ 