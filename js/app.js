var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

var favorite = []

var byId = function( id ) { return document.getElementById( id ); };

byId("create").onclick = function() {clickCreate()};
byId("save").onclick = function() {clickSave()};
byId("print").onclick = function() {clickPrint()};


function createStartup () {
	console.log(Math.random())	
}

function clickCreate() {
	var random1 = Math.floor((Math.random() * startupX.length));
	var random2 = Math.floor((Math.random() * startupY.length));

	startUpIdea = ( 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
	console.log(random1)
	byId("xForY").innerHTML = startUpIdea;
    console.log(startUpIdea)
    return
}

function clickSave(){

	favorite.push("<li>" + startUpIdea + "</li>");
	console.log(favorite);
}

function clickPrint(){

	for (var i = favorite.length - 1; i >= 0; i--) {
					byId("favorites").innerHTML += favorite[i]
				}			

}