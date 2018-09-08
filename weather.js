$(document).ready(function(){


	$('#submitWeather').click(function(){

		var city = $("#city").val();

		if (city != ''){

			$.ajax({

				url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" +"&appid=8556733f4f909fc574a30f2f7d3f8557",
				type: "GET",
				dataType: "jsonp",
				success: function(data){
					var widget = show(data);
					$("#show").html(widget);
					$("#city").val('');
					
				}

			});

		}
		else{
			$("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Field cannot be empty</div>");
		}

	});
});
function show(data){
	return 	 "<h3 style='font-size:40px; font-weight: bold;' class='text-center'>Current weather for :"+ data.name + ", " + data.sys.country + "</h3>" +
			 "<h3><strong>Weather</strong>: " + data.weather[0].main + "</h3>" +
			 "<h3><strong>Description</strong>: <img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'>" + data.weather[0].description + "</h3>" +
			 "<h3><strong>Temperature</strong>: " + data.main.temp + "&deg;C</h3>" +
			 "<h3><strong>Pressure</strong>: " + data.main.pressure + "hPa</h3>" +
			 "<h3><strong>Humidity</strong>: " + data.main.humidity + "%</h3>" +
			 "<h3><strong>Maximum Temperature</strong>: " + data.main.temp_max + "&deg;C</h3>" +
			 "<h3><strong>Minimum Temperature</strong>: " + data.main.temp_min + "&deg;C</h3>" +
			 "<h3><strong>Wind speed</strong>: " + data.wind.speed + "m/s</h3>" +
			 "<h3><strong>Wind direction</strong>: " + data.wind.deg + "&deg;</h3>";
}