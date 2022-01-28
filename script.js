let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalID = 0;

const secTime = document.getElementById("seconds");
const minTime = document.getElementById("minutes");
const hourTime = document.getElementById("hours");

const cursor = (id, value) => {
    id.style.cursor = value;
}

const disableButton = (id, value) => {
    id.disabled = value;
}

const startTime = document.getElementById('startButton');
startTime.onclick = () => {
    intervalID = window.setInterval(stopwatch, 1000);
    
    disableButton(startTime, true);
    disableButton(stopTime, false);
    disableButton(resetTime, false);

    cursor(stopTime, "pointer");
    cursor(resetTime, "pointer");
}

const stopwatch = () => {
    seconds++;
    
    if(seconds < 10)
        secTime.innerText = `0${seconds}`;
    else
        secTime.innerText = seconds;

    if(seconds === 60){
        minutes++;
        
        if(minutes < 10)
            minTime.innerText = `0${minutes}`;
        else
            minTime.innerText = minutes;
        
        seconds = 0;
        secTime.innerText = `0${seconds}`;
    }

    if(minutes === 60) {
        hours++;

        if(hours < 10)
            hourTime.innerText = `0${hours}`;
        else
            hourTime.innerText = hours;

        minutes = 0;
        seconds = 0;
        minTime.innerText = `0${minutes}`;
        secTime.innerText = `0${seconds}`;
    }
    
}

const stopTime = document.getElementById('stopButton');
stopTime.onclick = () => {
    window.clearInterval(intervalID);
    disableButton(startTime, false);
}

const resetTime = document.getElementById('resetButton');
resetTime.onclick = () => {
    stopTime.onclick();
    
    seconds = 0;
    hourTime.innerText = '00';
    minTime.innerText = '00';
    secTime.innerText = '00';
}