function handleAnimations() {
    let animations = [
        ["bounce", "bounce"],
        ["flash", "flash"],
        ["pulse", "pulse"],
        ["shake", "shake"],
        ["headShake", "headShake"],
        ["swing", "swing"],
        ["tada", "tada"],
        ["wobble", "wobble"],
        ["jello", "jello"],
        ["heartBeat", "heartBeat"],
        ["bounceIn", "bounceIn"],
        ["bounceInDown", "bounceInUp"],
        ["bounceInLeft", "bounceInRight"],
        ["fadeIn", "fadeIn"],
        ["fadeInDown", "fadeInUp"],
        ["fadeInLeft", "fadeInRight"],
        ["flip", "flip"],
        ["flipInX", "flipInX"],
        ["flipInY", "flipInY"],
        ["rotateIn", "rotateIn"],
        ["rotateInDownLeft", "rotateInDownRight"],
        ["slideInDown", "slideInUp"],
        ["slideInLeft", "slideInRight"],
        ["zoomIn", "zoomIn"],
        ["zoomInDown", "zoomInUp"],
        ["zoomInLeft", "zoomInRight"],
        ["jackInTheBox", "jackInTheBox"],
    ];

    var num = getRandomInt(animations.length);

    animateCSS('[name="top"]', animations[num][0], animationOver);
    animateCSS('[name="bottom"]', animations[num][1], animationOver);
    console.log("top: " + animations[num][0]);
    console.log("bottom: " + animations[num][1]);
}


function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)
    node.classList.add('delay-2s')

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

function toggleMute() {
    var myAudio = document.getElementById('music');
    myAudio.muted = !myAudio.muted;
}

var vid = document.getElementById("myVideo");
var beforebg = document.getElementById("beforebg");

function addStuff() {
    beforebg.remove();
    vid.play();
    at("main").innerHTML =
        `<h1 name="top" id = "status_text" class="header animated"><img src="logo.png"></h1>
        <p name="bottom" id = "text2" class="textiboi animated"><b>Mr. BURNS-BOT</b></p>`;

    handleAnimations();
}



function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var at = document.getElementById.bind(document);
window.addEventListener("DOMContentLoaded", () => {
    at("status_text").innerHTML = "loading";

});

window.addEventListener("load", () => {
    setTimeout(() => {
        if (!window.music.paused) {
            addStuff();
            console.log("music already started");
            return;
        }
        at("status_text").innerHTML = "click to proceed";
        at("status_text").classList.add("begin");

    }, 100);
});