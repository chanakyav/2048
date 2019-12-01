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

function setTile(pos, val) {
    let tile = document.querySelector(pos);
    tile.innerText = val.num;
    tile.style.backgroundColor = val.background
    tile.style.color = val.text
}

const colors = {
    0: {
        text: '',
        background: '#CDC0B4',
        num: ''
    },
    2: {
        text: '#776D65',
        background: '#EEE3DA',
        num: 2
    },
    4: {
        text: '#776D65',
        background: '#EDE0C7',
        num: 4
    },
    8: {
        text: '#F9F6F2',
        background: '#F2B179',
        num: 8
    },
    16: {
        text: '#F9F6F2',
        background: '#F59764',
        num: 16
    },
    32: {
        text: '#F9F6F2',
        background: '#F57C5F',
        num: 32
    },
    64: {
        text: '#F9F6F2',
        background: '#F55E3B',
        num: 64
    },
    128: {
        text: '#F9F6F2',
        background: '#EDCF71',
        num: 128
    },
    256: {
        text: '#F9F6F2',
        background: '#EDCC61',
        num: 256
    },
    512: {
        text: '#F9F6F2',
        background: '#EDC850',
        num: 512
    }
}

document.addEventListener("DOMContentLoaded", () => {
    header();
    document.querySelector('.ten').innerText = '8';
    document.querySelector('.five').innerText = '4';
    document.querySelector('.eight').innerText = '16';
    setTile('.five', colors[512])
    setTimeout(() => {
        setTile('.five', colors[0])
    }, 2000)

});