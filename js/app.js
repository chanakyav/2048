function header() {
    score(0);
    bestScore(0);
}

function score(val) {
    document.querySelector(".score-value").innerText = val.toString()
}

function bestScore(val) {
    document.querySelector(".best-value").innerText = val.toString()
}



document.addEventListener("DOMContentLoaded", () => {
    header();
});