const garo = document.querySelectorAll("nav:first-child a");
const sero = document.querySelectorAll("nav:nth-child(2) a");
const garoUnder = document.querySelector(".garo_underbar");
const seroUnder = document.querySelector(".sero_underbar");

function garoUnderbar(e) {
	garoUnder.style.left = e.offsetLeft + "px";
	garoUnder.style.width = e.offsetWidth + "px";
	garoUnder.style.top = e.offsetTop + e.offsetHeight + "px";
}
function seroUnderbar(e) {
	seroUnder.style.left = e.offsetLeft + "px";
	seroUnder.style.width = e.offsetWidth + "px";
	seroUnder.style.top = e.offsetTop + e.offsetHeight + "px";
}

garo.forEach((bar) =>
	bar.addEventListener("click", (e) => garoUnderbar(e.currentTarget))
);

sero.forEach((bar) =>
	bar.addEventListener("click", (e) => seroUnderbar(e.currentTarget))
);
