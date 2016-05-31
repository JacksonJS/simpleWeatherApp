$(document).ready(function(){
    getIP();
});

// get ip info and location API
function getIP() {
  $.getJSON('http://ipinfo.io', function(ip){
    var city = "";
    city += ip.city + "," + ip.country;
    weatherGen(city);
  });
};

//get weather API
function weatherGen(location) {
   var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=3e9afa5dc09c07a394a599812226d9c2";
   $.getJSON(weatherUrl)
     .done(generate)
     .fail(error);
};

// if weather API
function generate(data) {
  $(document).ready(function(){
    $(".units").on("click", changeUnits);
  })
  
  var celsius = (data.main.temp - 273.15).toFixed(2);
  var fahrenheit = (data.main.temp * 9/5 - 459.67).toFixed(2);
  var units = "F";
  
  $(".location").html(data.name + ", " + data.sys.country);
  getIcon(data.weather[0].icon);
  $(".num").html(fahrenheit);
  $(".condition").html(data.weather[0].description);
  
  function changeUnits() { 
   if (units == "F"){
     units = "C";
     $(".num").html(celsius);
     $(".far,.cel").toggleClass('active');
   } else {
     units = "F";
     $(".num").html(fahrenheit);
     $(".far,.cel").toggleClass('active');
    }
  };
};

//if !weather API
function error() {
  alert("Unable to contact openweathermap.org API");
};

//weather icons
function getIcon(i) {
  console.log(i);
  switch(i) {
    case '01d':
      $(".icon").html("<i class='wi wi-day-sunny'></i>");
      break;
    case '02d':
      $(".icon").html("<i class='wi wi-day-cloudy'></i>");
      break;
    case '03d':
      $(".icon").html("<i class='wi wi-cloud'></i>");
      break;
    case '04d':
      $(".icon").html("<i class='wi wi-cloudy'></i>");
      break;
    case '09d':
      $(".icon").html("<i class='wi wi-sprinkle'></i>");
      break;
    case '10d':
      $(".icon").html("<i class='wi wi-day-sprinkle'></i>");
      break;
    case '11d':
      $(".icon").html("<i class='wi wi-thunderstorm'></i>");
      break;
    case '13d':
      $(".icon").html("<i class='wi wi-snow'></i>");
      break;
    case '50d':
      $(".icon").html("<i class='wi wi-strong-wind'></i>");
      break;
    case '01n':
      $(".icon").html("<i class='wi wi-night-clear'></i>");
      break;
    case '02n':
      $(".icon").html("<i class='wi wi-night-alt-cloudy'></i>");
      break;
    case '03n':
      $(".icon").html("<i class='wi wi-cloud'></i>");
      break;
    case '04n':
      $(".icon").html("<i class='wi wi-cloudy'></i>");
      break;
    case '09n':
      $(".icon").html("<i class='wi wi-sprinkle'></i>");
      break;
    case '10n':
      $(".icon").html("<i class='wi wi-night-sprinkle'></i>");
      break;
    case '11n':
      $(".icon").html("<i class='wi wi-thunderstorm'></i>");
      break;
    case '13n':
      $(".icon").html("<i class='wi wi-snow'></i>");
      break;
    case '50n':
      $(".icon").html("<i class='wi wi-strong-wind'></i>");
      break;
    default:
      $(".icon").html("<i class='wi wi-day-cloudy'></i>");
      break;
  }
};