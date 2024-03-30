function trackTransportation() {
    var mode = document.getElementById("mode").value;
    var distance = document.getElementById("distance").value;

    if (mode && distance) {
        document.getElementById("output").innerHTML = `You traveled ${distance} miles by ${mode}.`;
    } else {
        document.getElementById("output").innerHTML = "Please select mode of transportation and enter distance.";
    }
}
