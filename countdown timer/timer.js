let countdown;
let timeRemaining;

document.getElementById("startButton").addEventListener("click", function() {
    const minutes = parseInt(document.getElementById("minutes").value);
    timeRemaining = minutes * 60;

    if (timeRemaining > 0) {
        startTimer();
    }
});

document.getElementById("stopButton").addEventListener("click", function() {
    clearInterval(countdown);
});

document.getElementById("resetButton").addEventListener("click", function() {
    clearInterval(countdown);
    timeRemaining = 0;
    updateDisplay();
});
 
function startTimer() {
    clearInterval(countdown);
    countdown = setInterval(function() {
        if (timeRemaining <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
        } else {
            timeRemaining--;
            updateDisplay();
        }
    }, 1000);
}

function updateDisplay() {
    const hours = String(Math.floor(timeRemaining / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((timeRemaining % 3600) / 60)).padStart(2, '0');
    const seconds = String(timeRemaining % 60).padStart(2, '0');
    document.getElementById("timer").textContent =`${hours}:${minutes}:${seconds}`;
}