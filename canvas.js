var c = document.getElementById("sample1");
var ctx = c.getContext("2d");
ctx.moveTo(0,0)
ctx.lineTo(200, 100);
ctx.stroke();

ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

var c = document.getElementById("sample2");
var ctx = c.getContext("2d");
ctx.font = "30px Open Sans"
ctx.fillText("Hello Likhita", 13, 60)

var c = document.getElementById("sample3");
var ctx = c.getContext("2d");
ctx.font = "30px Open Sans"
ctx.strokeText("Hello Likhita", 13, 60)

var c = document.getElementById("sample4");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "blue")
grd.addColorStop(1, "violet")
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);