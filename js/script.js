const mode = document.querySelector(".mode");
const modeSwitch = document.querySelector(".switch");
const mode_cl = "night";
const dayWebtoonWrap = document.querySelector(".day-webtoon-wrap");
//const dayWebtoon = document.getElementsByClassName(".day-webtoon");
const dayBox = document.querySelector(".day");
const dayWebtoon = document.querySelectorAll(".day-webtoon");
const webtoonWrap = document.querySelectorAll(".webtoon-wrap");

function handleMode() {
    document.querySelector("body").classList.toggle(mode_cl);
}

function handleDay() {
    const date = new Date();
    const day = date.getDay();

		if (day === 0) {
			for (let i = 0; i < 6; i++) {
	      let currentBox = dayWebtoon[i];
	      dayWebtoonWrap.appendChild(currentBox);
    	}
		} else {
			for (let i = 0; i < day - 1; i++) {
	      let currentBox = dayWebtoon[i];
	      dayWebtoonWrap.appendChild(currentBox);
    	}
		}
}

// webtoon img for loop
// 후에 for문 하나 더 만들어서 이중 for 문 만들기(요일)
function webImg() {
	let webLength = 30;
	// const로 webtoon 개수 length 배열 만들어서 가져오기
	for (let j = 0; j <= 7; j++) {
		for(let i = 0; i <= webLength; i++) {
			const webtoon = document.createElement("div");
			webtoon[i].classList.add('webtoon');
			webtoon[i].style.backgroundImage = "url('../src/" + i +".jpg')";
			dayWebtoonWrap[j].appendChild(webtoon[i]);
		}
	}
}

function init() {
    mode.addEventListener("click", handleMode);
    handleDay();
		webImg();
}
init();
