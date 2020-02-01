function getTargetTime () {

    // 25 minutes
    let targetTime = 25000;
    return targetTime
}

let minutes = 25;
let seconds = 0;

// try to reuse for break time
function startTimer (duration, display) {

    let timer = duration*60, minutes, seconds;

    minutes = Number(pomodoroTime.textContent);
    
    let counter = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(counter);
        }
    }, 1000);

}

let pomodoroTime = document.querySelector("#focusTime");
let displayCountDown = document.querySelector("#displayCountDown");

let startButton = document.querySelector("#start");
startButton.addEventListener('click', () => {
    startTimer(pomodoroTime.textContent, displayCountDown);
})



let increaseTime = document.querySelector("#increase");
increaseTime.addEventListener('click', () => {
    pomodoroTime.textContent = Number(pomodoroTime.textContent) + 1;
});

let decreaseTime = document.querySelector("#decrease");
decreaseTime.addEventListener('click', () => {
    pomodoroTime.textContent = Number(pomodoroTime.textContent) - 1;
});

// stop timer and reset to 25 minutes
let resetButton = document.querySelector("#resetTimer");
resetButton.addEventListener('click', resetTimer);


function resetTimer () {
    minutes = 25;
    seconds = 0;
    clearInterval(counter);
    console.log(counter);
}
