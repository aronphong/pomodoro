let pause = 0;
let pausedTime = 0;
let counter;
let breakStatus = false;

function startTimer (duration, display) {

    let timer = 0;
    let minutes = 0;
    let seconds = 0;
    // let breakStatus = false;

    // check pause status
    if (pause == 0) {
        timer = duration*60;
    } 
    else {
        duration = pausedTime;
        timer = duration;
        counter = undefined;
    }

    if (breakStatus == true) {
        console.log("yes");
        timer = duration*60;
        counter = undefined;
    }

    // start focus time
    if (counter == undefined) {

        counter = setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.innerText = minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(counter);
                breakStatus = true;
                console.log(breakStatus);
                startTimer(breakTime.textContent,display);
                return breakStatus
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

const pomodoroTime = document.querySelector("#focusTime");
const breakTime = document.querySelector("#breakTime");
const displayCountDown = document.querySelector("#displayCountDown");


// event listeners for controls
const startButton = document.querySelector("#startTimer");
startButton.addEventListener('click', () => {
    startTimer(pomodoroTime.textContent, displayCountDown);
})

const resetButton = document.querySelector("#resetTimer");
resetButton.addEventListener('click', resetTimer);

const pauseButton = document.querySelector("#pauseTimer");
pauseButton.addEventListener('click', pauseTimer);


// Variables and functions to reduce and increase focus time
const increaseTime = document.querySelector("#increase");
increaseTime.addEventListener('click', () => {
    pomodoroTime.textContent = Number(pomodoroTime.textContent) + 1;
});

const decreaseTime = document.querySelector("#decrease");
decreaseTime.addEventListener('click', () => {
    pomodoroTime.textContent = Number(pomodoroTime.textContent) - 1;
});

// Variables and functions to reduce and increase break time
const increaseBreak = document.querySelector("#increaseBreak");
increaseBreak.addEventListener('click', () => {
    breakTime.textContent = Number(breakTime.textContent) + 1;
});

const decreaseBreak = document.querySelector("#decreaseBreak");
decreaseBreak.addEventListener('click', () => {
    breakTime.textContent = Number(breakTime.textContent) - 1;
});
