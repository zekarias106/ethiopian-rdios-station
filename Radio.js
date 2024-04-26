function playAudio(url, stationName) {
    var audio = document.getElementById('radioPlayer');
    audio.src = url;
    audio.play();

    var radioName = document.getElementById('radioName');
    radioName.textContent = stationName;
}