let pause = 0;

function startTimer (duration, display) {

    let counter;
    clearInterval(counter);

    let timer = 0;
    let minutes = 0;
    let seconds = 0;

    if (pause == 0) {
        timer = duration*60;
    } 
    else {
        timer = duration, minutes, seconds;
    }

    minutes = Number(pomodoroTime.textContent);
    
    counter = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerText = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(counter);
        }
    }, 1000);

    function pauseTimer() {
        
        pause = 1;

        clearInterval(counter);
        let pausedTime = timer;
        console.log("pausedTime on pause = " + pausedTime)
        display.innerText = minutes + ":" + seconds;

        display.value = timer;

        let resumeButton = document.querySelector("#pauseTimer");
        resumeButton.innerText = "Resume";

        resumeButton.addEventListener('click', () => {
            console.log("pausedTime on click =" + pausedTime);
            startTimer(pausedTime, document.querySelector("#displayCountDown"));
            resumeButton.innerText = "Pause";
            pause = 0;
        });
    }
    
    function resetTimer() {
        clearInterval(counter);
        display.textContent = `${duration}:00`;
    }

    startTimer.pauseTimer = pauseTimer;
    startTimer.resetTimer = resetTimer;
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
    startTimer.resetTimer();
});


let pauseButton = document.querySelector("#pauseTimer");
pauseButton.addEventListener('click', () => {
    startTimer.pauseTimer();
})
