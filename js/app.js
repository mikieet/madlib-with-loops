$(document).on('ready', function() {
	var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
	var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

	var random1 = Math.floor((Math.random() * startupX.length));
	var random2 = Math.floor((Math.random() * startupY.length));

	var favorite = [];

	$("#create").on("click", function() {
		var random1 = Math.floor((Math.random() * startupX.length));
		var random2 = Math.floor((Math.random() * startupY.length));

		startUpIdea = ( 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
		$("#xForY").text(startUpIdea);
	});

	$("#save").on("click", function() {
		favorite.push("<li>" + startUpIdea + "</li>");
	});

	$("#print").on("click", function() {
		$("#favorites").empty();
		for (var i = 0; i < favorite.length; i++) {
			$("#favorites").append(favorite[i]);
		}
	});
});
