let pause = 0;
let pausedTime = 0;
let counter;

function startTimer (duration, display) {

    let timer = 0;
    let minutes = 0;
    let seconds = 0;

    if (pause == 0) {
        timer = duration*60;
    } 
    else {
        duration = pausedTime;
        timer = duration;
        counter = undefined;
    }

    if (counter == undefined) {

        counter = setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.innerText = minutes + ":" + seconds;
            console.log(seconds);
            if (--timer < 0) {
                clearInterval(counter);
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(counter);
    pause = 1;
    pausedTime = displayCountDown.innerText.split(":");
    let minutes = Number(pausedTime[0]);
    let seconds = Number(pausedTime[1]);
    pausedTime = (minutes*60) + seconds;
    return pause, pausedTime;
}

function resetTimer() {
    clearInterval(counter);
    counter = undefined;
    pause = 0;
    pausedTime = 0;
    displayCountDown.textContent = `${pomodoroTime.textContent}:00`;
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


let resetButton = document.querySelector("#resetTimer");
resetButton.addEventListener('click', () => {
    resetTimer();
});


let pauseButton = document.querySelector("#pauseTimer");
pauseButton.addEventListener('click', () => {
    pauseTimer();
})
