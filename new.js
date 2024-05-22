document.addEventListener("DOMContentLoaded", function() {
    var audio = new Audio();
    audio.src = "audio/you_are_inlove.mp3";

    var isPlaying = false;

    var button = document.createElement("button");
    button.textContent = "▶";
    button.style.backgroundColor = "pink"; // Change background color
    button.style.fontSize = "30px"; // Change font size
    button.style.color = "#FFF0F5"
    button.style.padding = "20px 30px"; // Change padding
    button.style.border = "5px solid white"; // Add border with color
    button.style.borderRadius = "10px"; // Add border radius for smoothness

    button.addEventListener("click", function() {
        
        if (!isPlaying) {
            audio.loop = true;
            audio.play();
            button.textContent = "↻ || ↺ ";
            isPlaying = true;
        } else {
            audio.pause();
            audio.currentTime = 0;
            button.textContent = "▶";
            isPlaying = false;
        }
    });

    document.body.appendChild(button);
});


