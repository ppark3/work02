var canvas = document.getElementById("slate");
var context = canvas.getContext("2d");
var clear = document.getElementById("clear");
var stop = document.getElementById("stop");
var width = canvas.width;
var height = canvas.height;
var requestID;
context.fillStyle="#00FFFF"

var animate = function(){
    window.cancelAnimationFrame(requestID);
    var x = width / 2;
    var y = height / 2;
    var r = 10;

    var increase = function(){
        clearDrawing();
        context.beginPath();
        context.arc(x, y, r, 0, 2 * Math.PI);
        context.stroke();
        context.fill();
        r++;
	if (r == x){
	    requestID = window.requestAnimationFrame(decrease);
	}
	else {
            requestID = window.requestAnimationFrame(increase);
	}
    }

    var decrease = function(){
	clearDrawing();
	context.beginPath();
	context.arc(x, y, r, 0, 2 * Math.PI);
	context.stroke();
	context.fill();
	r--;
	if (r == 0){
	    requestID = window.requestAnimationFrame(increase);
	}
	else {
	    requestID = window.requestAnimationFrame(decrease);
	}
    }
    increase();
}

var clearDrawing = function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    started = false;
}

var stopIt = function(){
    window.cancelAnimationFrame(requestID);
}

window.requestAnimationFrame(animate);

canvas.addEventListener("click", animate);
clear.addEventListener("click", clearDrawing);
stop.addEventListener("click", stopIt);
