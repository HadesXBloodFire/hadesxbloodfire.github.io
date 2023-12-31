

const pageTitle = "Hewi Metal";
const newTitle = "Niech Metal będzie z Tobą";

function handleVisibilityChange() {
    if (document.hidden) {
        document.title = newTitle;
    } else {
        document.title = pageTitle;
    }
}

document.addEventListener("visibilitychange", handleVisibilityChange);

function menu(name){
    var main =document.getElementsByClassName("main");
    for(let m of main){
        m.style.display="none";
    }
    var ele = document.getElementById(name)
    ele.style.display = "flex";
}

menu("ja")

var bt1 = document.getElementById("dom");
bt1.addEventListener("click", ()=>{menu("ja")})
var bt2 = document.getElementById("Avantasia");
bt2.addEventListener("click", ()=>{menu("AvantasiaT")})
var bt3 = document.getElementById("NK");
bt3.addEventListener("click", ()=>{menu("NKT")})
var bt4 = document.getElementById("BOM");
bt4.addEventListener("click", ()=>{menu("BOMT")})
var bt5 = document.getElementById("btkontakt");
bt5.addEventListener("click", ()=>{menu("kontakt")})


function filmy(name){

    var ele = document.getElementById(name)
    ele.style.display = "block";

}

function hid(){
    var main =document.getElementsByClassName("yt");
    for(let m of main){
        m.style.display="none";
    }

}
hid()
var play1 = document.getElementById("play1");
play1.addEventListener("click", () => {
    filmy("power");
    play1.style.display = "none";
});
var play2 = document.getElementById("play2");
play2.addEventListener("click", () => {
    filmy("scarecrow");
    play2.style.display = "none";
});
var play3 = document.getElementById("play3");
play3.addEventListener("click", () => {
    filmy("kon");
    play3.style.display = "none";
});
var play4 = document.getElementById("play4");
play4.addEventListener("click", () => {
    filmy("kaunaz");
    play4.style.display = "none";
});


function startVideo(videoElement, playButton) {
    videoElement.play();
    console.log('Video is playing');
    playButton.style.display = "none";
}


function stopVideo(videoElement, playButton) {
    videoElement.pause();
    console.log('Video is stopped');
}


function setupVideoControls(videoId, playButtonId, stopButtons) {
    var video = document.getElementById(videoId);
    var playButton = document.getElementById(playButtonId);

    playButton.addEventListener("click", function () {
        startVideo(video, playButton);
    });

    for (var stopButton of stopButtons) {
        var button = document.getElementById(stopButton);
        button.addEventListener("click", function () {
            stopVideo(video, playButton);
        });
    }

    video.addEventListener('pause', function () {
        console.log('Video is paused');
    });

    video.addEventListener('ended', function () {
        console.log('Video has ended');
    });
}


setupVideoControls('power', 'play1', ['Avantasia', 'NK', 'BOM','btkontakt']);
setupVideoControls('scarecrow', 'play2', ['dom', 'NK', 'BOM','btkontakt']);
setupVideoControls('kon', 'play3', ['dom', 'Avantasia', 'BOM','btkontakt']);
setupVideoControls('kaunaz', 'play4', ['dom', 'Avantasia', 'NK','btkontakt']);



