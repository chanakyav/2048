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

const tileMap = new Map();
tileMap.set('0,0', '.one')
tileMap.set('0,1', '.two')
tileMap.set('0,2', '.three')
tileMap.set('0,3', '.four')
tileMap.set('1,0', '.five')
tileMap.set('1,1', '.six')
tileMap.set('1,2', '.seven')
tileMap.set('1,3', '.eight')
tileMap.set('2,0', '.nine')
tileMap.set('2,1', '.ten')
tileMap.set('2,2', '.eleven')
tileMap.set('2,3', '.twelve')
tileMap.set('3,0', '.thirteen')
tileMap.set('3,1', '.fourteen')
tileMap.set('3,2', '.fifteen')
tileMap.set('3,3', '.sixteen')

function setTile(pos, val) {
    val = colors[val]
    let tile = document.querySelector(pos);
    tile.innerText = val.num;
    tile.style.backgroundColor = val.background
    tile.style.color = val.text
}

function clearTiles() {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            let pos = tileMap.get(`${[i, j]}`)
            setTile(pos, 0)
        }
    }
}

function createGrid() {
    let grid = new Array(4);
    for (let i = 0; i < 4; i++) grid[i] = new Array('', '', '', '');
    return grid;
}

function randomPosition() {
    return [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)]
}

function setRandomTile() {
    let x, y;
    [x, y] = randomPosition();
    if (grid[x][y]) {
        setRandomTile();
    } else {
        grid[x][y] = 2
    }
}

function moveRight() {
    for (let i = 0; i < grid.length; i++) {
        let prevState = grid[i];
        let items = grid[i].filter((item) => item !== '');
        let n = 4 - items.length;
        while (n > 0) {
            items.unshift('');
            n--;
        }
        grid[i] = items;
        if (!arrayMatch(grid[i], prevState)) {
            moved = true;
        }
    }
}

function stackRight() {
    for (let i = 0; i < grid.length; i++) {
        let j = grid.length - 1
        while (j >= 0) {
            if (grid[i][j] !== '' && grid[i][j] === grid[i][j-1]) {
                grid[i][j] *= 2;
                grid[i][j-1] = '';
                j -= 2;
            } else {
                j--;
            }
        }
    }
}

function getColumn(col) {
    let column = [];
    for (let i = 0; i < grid.length; i++) {
        column.push(grid[i][col])
    }
    return column;
}

function setColumn(array, col) {
    for (let i = 0; i < grid.length; i++) {
        grid[i][col] = array[i]
    }
}

function moveUp() {
    for (let i = 0; i < grid.length; i++) {
        let prevColumn = getColumn(i);
        let items = prevColumn.filter((item) => item !== '');
        let n = 4 - items.length;
        while (n > 0) {
            items.push('');
            n--;
        }
        setColumn(items, i)
        if (!arrayMatch(getColumn(i), prevColumn)) {
            moved = true;
        }
    }
}

function arrayMatch(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
};

function printGrid() {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            let pos = tileMap.get(`${[i, j]}`)
            if (grid[i][j] !== '') 
                setTile(pos, grid[i][j])
        }
    }
}

function rearrange() {
    clearTiles();
    setRandomTile();
    printGrid();
    moved = false;
}

let grid = createGrid();
let moved = false;

document.addEventListener("DOMContentLoaded", () => {
    header();
    setRandomTile();
    printGrid();

});

document.addEventListener("keydown", event => {
    if (event.keyCode === 37) {
        console.log('left'); 
    } else if (event.keyCode === 38) {
        moveUp();
        if (moved) rearrange();
    } else if (event.keyCode === 39) {
        moveRight();
        stackRight();
        moveRight();
        if (moved) rearrange();
    } else if (event.keyCode === 40) {
        console.log('down');
    }
});