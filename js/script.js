const mode = document.querySelector(".mode");
const modeSwitch = document.querySelector(".switch");
const mode_cl = "night";
const dayWebtoonWrap = document.querySelector(".day-webtoon-wrap");
//const dayWebtoon = document.getElementsByClassName(".day-webtoon");
const dayBox = document.querySelector(".day");
const dayWebtoon = document.querySelectorAll(".day-webtoon");
    
function handleMode() {
    document.querySelector("body").classList.toggle(mode_cl);
}

function handleDay() {
    const date = new Date();
    const day = date.getDay();
    
    for (let i = 0; i < day - 1; i++) {
        let currentBox = dayWebtoon[i];
        dayWebtoonWrap.appendChild(currentBox);
    }
}
    
function init() {
    mode.addEventListener("click", handleMode);
    handleDay();
}
init();