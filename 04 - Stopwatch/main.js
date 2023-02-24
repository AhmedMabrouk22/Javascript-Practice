let btnStart = document.querySelector("button.play");
let btnReset = document.querySelector("button.reset");
let btnLog = document.querySelector("button.log");
let btnDelete = document.querySelector("button.delete");
let logList = document.querySelector(".container .log-items");
let msSpan = document.querySelector(".container .timer-section .timer .time .ms");
let sSpan = document.querySelector(".container .timer-section .timer .time .s");
let mSpan = document.querySelector(".container .timer-section .timer .time .m");
let hSpan = document.querySelector(".container .timer-section .timer .time .h");
let timeCountr = null;
let ms = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function stopWatch() {

    ++ms;
    msSpan.classList.remove("zero");
    if (ms > 0 && ms % 100 === 0) {
        ms = 0;
        ++seconds; 
        sSpan.classList.remove("zero");
    }

    if (seconds > 0 && seconds % 60 === 0) {
        seconds = 0;
        ++minutes;
        mSpan.classList.remove("zero");
    }

    if (minutes > 0 && minutes % 60 === 0) {
        minutes = 0;
        ++hours;
        hSpan.classList.remove("zero");
    }

    msSpan.textContent = (ms < 10 ? `0${ms}` : ms);
    sSpan.textContent = (seconds < 10 ? `0${seconds}` : seconds);
    mSpan.textContent = (minutes < 10 ? `0${minutes}` : minutes);
    hSpan.textContent = (hours < 10 ? `0${hours}` : hours);

}

function startClick()
{
    if (btnStart.classList.contains("play")) {
        timeCountr = window.setInterval(stopWatch,10);
        btnStart.classList.replace("play","stop");
        btnStart.innerHTML = `<i class="fa-solid fa-stop"></i> Stop`;
        btnReset.classList.remove("disabled");
        btnReset.removeAttribute("disabled");
        btnLog.classList.remove("disabled");
        btnLog.removeAttribute("disabled");
    }
    else {
        window.clearInterval(timeCountr);
        btnStart.classList.replace("stop","play");
        btnStart.innerHTML = `<i class="fa-solid fa-play"></i> Start`;
    }
}

function resetClick() {

    //window.clearInterval(timeCountr);
    
    ms = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    msSpan.classList.add("zero");
    sSpan.classList.add("zero");
    mSpan.classList.add("zero");
    hSpan.classList.add("zero");
    msSpan.textContent = (ms < 10 ? `0${ms}` : ms);
    sSpan.textContent = (seconds < 10 ? `0${seconds}` : seconds);
    mSpan.textContent = (minutes < 10 ? `0${minutes}` : minutes);
    hSpan.textContent = (hours < 10 ? `0${hours}` : hours);

    if (btnStart.classList.contains("play")) {
        btnReset.classList.add("disabled");
        btnReset.setAttribute("disabled","");
        btnLog.classList.add("disabled");
        btnLog.setAttribute("disabled","");
    }

}

function logClick() {
    let logItem = document.createElement("li");
    logItem.classList.add("item");
    logItem.textContent = `${hSpan.textContent}:${mSpan.textContent}:${sSpan.textContent}`;
    logList.appendChild(logItem);
    btnDelete.classList.add("active");
}

function deleteClick() {
    logList.innerHTML = "";
    btnDelete.classList.remove("active");
}

btnStart.addEventListener("click",startClick);

btnReset.addEventListener("click",resetClick);

btnLog.addEventListener("click",logClick);

btnDelete.addEventListener("click",deleteClick);
