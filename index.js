const timesEle = document.querySelectorAll(".times")
const Day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
]

setInterval(() => {
    const date = new Date;
    timesEle[0].innerHTML = Day[date.getDay()];
    timesEle[1].innerHTML = date.getHours();
    timesEle[2].innerHTML = date.getMinutes();
    timesEle[3].innerHTML = date.getSeconds();
}), 1000

const handleChangeBg = document.querySelector(".btnChangeBg")
const BgEle = document.querySelector(".TienClock")
handleChangeBg.addEventListener("click", () => {
    let randomBg = Math.floor((Math.random()*5)+1)
    BgEle.style.backgroundImage = 'url(Tien'+randomBg+'.jpg)'
})