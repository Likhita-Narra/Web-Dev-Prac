document.getElementById("sample").style.fontSize = "50px";
function hideText() {
    document.getElementById("hide").style.display = "none";
}

function revealText() {
    document.getElementById("reveal").style.display = "block";
}

function createMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        centre = new google.maps.LatLng(51.5, -0.2),
        zoom = 10
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
}

