//              DOM Elements
let play = document.querySelector(".fa-play");
let surahName = document.querySelector(".surah-name");
let previous = document.querySelector(".fa-backward");
let next = document.querySelector(".fa-forward");
let playPauseContainer = document.querySelector(".special");
let loop = document.querySelector(".fa-infinity");

//              LOGIC VAIRABLES
let currentSurahIndexCounter = 0;
let looping = false;
let playing = false;
let surahs = [{
        "name": "Surah Fatiha",
        "Audio": new Audio("sound/fatiha.mp3")
    },
    {
        "name": "Surah Ikhlas",
        "Audio": new Audio("sound/ikhlas.mp3")
    },
    {
        "name": "Surah Falaq",
        "Audio": new Audio("sound/falaq.mp3")
    },
    {
        "name": "Surah Nas",
        "Audio": new Audio("sound/nas.mp3")
    }
];


//              EVENT LISTENERS AND GENERAL FUNCTIONALITY OF THE PLAYER 
function playPauseIcon() {
    if (playing == true) {
        //play.classList.replace("fa-forward", "fa-pause");
        playPauseContainer.innerHTML = '<i class="fas fa-pause"></i>';
    } else if (playing == false) {
        playPauseContainer.innerHTML = '<i class="fas fa-play"></i>';
    }
}



previous.addEventListener("click", function () {
    if (currentSurahIndexCounter >= surahs.length - 1) {
        surahs[currentSurahIndexCounter].Audio.currentTime = 0;
        surahs[currentSurahIndexCounter].Audio.pause();
        looping = false;
        currentSurahIndexCounter = 0;
        playing = true;
        surahName.innerHTML = surahs[currentSurahIndexCounter].name;
        surahs[currentSurahIndexCounter].Audio.play();
    } else if (currentSurahIndexCounter >= 0 && currentSurahIndexCounter < surahs.length) {
        //last surah general settings
        surahs[currentSurahIndexCounter].Audio.currentTime = 0;
        surahs[currentSurahIndexCounter].Audio.pause();
        looping = false;
        //this surah general setting
        currentSurahIndexCounter++;
        playing = true;
        surahName.innerHTML = surahs[currentSurahIndexCounter].name;
        surahs[currentSurahIndexCounter].Audio.play();
    }
});



next.addEventListener("click", function () {
    if (currentSurahIndexCounter <= 0) {
        surahs[currentSurahIndexCounter].Audio.currentTime = 0;
        surahs[currentSurahIndexCounter].Audio.pause();
        looping = false;
        currentSurahIndexCounter = surahs.length - 1;
        playing = true;
        surahName.innerHTML = surahs[currentSurahIndexCounter].name;
        surahs[currentSurahIndexCounter].Audio.play();
    } else if (currentSurahIndexCounter >= 0 && currentSurahIndexCounter < surahs.length) {
        //last surah general settings
        surahs[currentSurahIndexCounter].Audio.currentTime = 0;
        surahs[currentSurahIndexCounter].Audio.pause();
        looping = false;
        //this surah general settings
        currentSurahIndexCounter--;
        playing = true;
        surahName.innerHTML = surahs[currentSurahIndexCounter].name;
        surahs[currentSurahIndexCounter].Audio.play();
    }
});


loop.addEventListener("click", function () {
    if (looping == false) {
        looping = true;
        surahs[currentSurahIndexCounter].Audio.loop = true;
        this.style.color = "rgba(0, 0, 0, 0.356)";
        console.log("looping is enabled");
    } else if (looping == true) {
        looping = false;
        surahs[currentSurahIndexCounter].Audio.loop = false;
        this.style.color = "black";
        console.log("looping is disabled");
    }
});



play.addEventListener("click", function () {
    if (playing == false) {
        playing = true;
        surahs[currentSurahIndexCounter].Audio.play();
        this.style.color = "rgba(0, 0, 0, 0.356)";
    } else if (playing == true) {
        playing = false;
        surahs[currentSurahIndexCounter].Audio.pause();
        looping = false;
        this.style.color = "black";
    }
});