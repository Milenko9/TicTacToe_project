let vsCpuBtn = document.querySelector('#vsCpu');
let vsPlayerBtn = document.querySelector('#vsPlayer');
let introDiv = document.querySelector('.intro');
let gameSecConDiv = document.querySelector('.game-section-container');
let gameSectionDiv = document.querySelector('.game-section');
let restartBtn = document.querySelector('.restart-button');
let chooseO = document.querySelector('.chooseO');
let chooseX = document.querySelector('.chooseX');
let result1Div = document.querySelector('.result1');
let resultTieDiv = document.querySelector('.resultTie');
let result2Div = document.querySelector('.result2');
let chooseXODiv = document.querySelector('.choose-x-o');
let turnInfoDiv = document.querySelector('.turn-info-css');
let pl1;
let pl2;
let resX = 0;
let resO = 0;
let resTie = 0;


chooseX.addEventListener('click', pl1X);
chooseO.addEventListener('click', pl1O);
restartBtn.addEventListener('click', () => { document.location.reload(); });


function pl1X() {
  chooseX.classList.add('active');
  chooseO.classList.remove('active');
  pl1 = 'x';
  pl2 = 'o';
}

function pl1O() {
  chooseO.classList.add('active');
  chooseX.classList.remove('active');
  pl1 = 'o';
  pl2 = 'x';
}

startingGame();
createTable();

function startingGame() {
  vsCpuBtn.addEventListener('click', playVsCpu);
  vsPlayerBtn.addEventListener('click', playVsPlayer);

  function playVsCpu() {
    introDiv.style.display = 'none';
    gameSecConDiv.style.display = 'block';
    if (pl1 === undefined || pl2 === undefined) {
      introDiv.style.display = 'block';
      gameSecConDiv.style.display = 'none';
      alert("Morate izabrati X ili O");
    } else if (pl1 === 'x') {
      result1Div.innerHTML = '<p>'+pl1+' (you)<br><span>'+resX+'</span></p>';
      result2Div.innerHTML = '<p>'+pl2+' (cpu)<br><span>'+resO+'</span></p>';
    } else if (pl2 === 'x') {
      result1Div.innerHTML = '<p>'+pl2+' (cpu)<br><span>'+resX+'</span></p>';
      result2Div.innerHTML = '<p>'+pl1+' (you)<br><span>'+resO+'</span></p>';
    }
    resultTieDiv.innerHTML = '<p>ties<br><span>'+resTie+'</span></p>';
  }

  function playVsPlayer() {
    introDiv.style.display = 'none';
    gameSecConDiv.style.display = 'block';
    if (pl1 === undefined || pl2 === undefined) {
      introDiv.style.display = 'block';
      gameSecConDiv.style.display = 'none';
      alert("Morate izabrati X ili O");
    } else if (pl1 === 'x') {
      result1Div.innerHTML = '<p>'+pl1+' (player 1)<br><span>'+resX+'</span></p>';
      result2Div.innerHTML = '<p>'+pl2+' (player 2)<br><span>'+resO+'</span></p>';
    } else if (pl2 === 'x') {
      result1Div.innerHTML = '<p>'+pl2+' (player 1)<br><span>'+resX+'</span></p>';
      result2Div.innerHTML = '<p>'+pl1+' (player 2)<br><span>'+resO+'</span></p>';
    }
  }
}




var boxes = document.querySelectorAll('.xo');
var symbol = "";
var lines = [
  [boxes[0],boxes[1],boxes[2]],
  [boxes[3],boxes[4],boxes[5]],
  [boxes[6],boxes[7],boxes[8]],
  [boxes[0],boxes[3],boxes[6]],
  [boxes[1],boxes[4],boxes[7]],
  [boxes[2],boxes[5],boxes[8]],
  [boxes[0],boxes[4],boxes[8]],
  [boxes[2],boxes[4],boxes[6]]
];


for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click',insertSymbol)
}


function createTable() {
  var text = '';
  for (var i = 0; i < 9; i++) {
    text += '<div class="xo"></div>';
  }
  gameSectionDiv.innerHTML = text;
}


function insertSymbol() {
  (symbol == "O")? symbol = "X" : symbol = "O";
  
  this.innerHTML = symbol;
  checkLines();
}


function checkLines() {
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (line[0].innerHTML == line[2].innerHTML && line[0].innerHTML == line[1].innerHTML && line[0].innerHTML !== "") {
      for (let k = 0; k < line.length; k++) {
        line[k].style.background = "tomato";
      }
    }
  }
}
