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
					console.log(data)
				}

			});

		}
		else{
			$("#error").html('field cannot be empty')
		}

	});
});
function show(data){
	return  "<h3><strong>Weather</strong>: " + data.weather[0].main + "</h3>" +
			 "<h3><strong>Weather</strong>: " + data.weather[0].description + "</h3>";
}