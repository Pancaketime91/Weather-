$.get(
    "http://api.openweathermap.org/data/2.5/weather?q=Cornell&units=imperial&APPID=f8aee4716a1124b02fe0c7d7e972314d", 
    function(data){
        
        var icon= "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var temp = Math.floor (data.main.temp);
        var weather = data.weather[0].main;
        var name = data.name;
       
       
        $('.icon').attr('src', icon);
        $('.weather').append(weather);
        $('.temp').append(temp);
        $('.name').append(name);
       console.log(name)
});