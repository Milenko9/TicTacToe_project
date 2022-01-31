var vsCpuBtn = document.querySelector('#vsCpu');
var vsPlayerBtn = document.querySelector('#vsPlayer');
var introDiv = document.querySelector('.intro');
var gameSecConDiv = document.querySelector('.game-section-container');
var gameSectionDiv = document.querySelector('.game-section');

vsCpuBtn.addEventListener('click', playVsCpu);
vsPlayerBtn.addEventListener('click', playVsPlayer);

function playVsCpu() {
  introDiv.style.display = 'none';
  gameSecConDiv.style.display = 'block';
}

function playVsPlayer() {
  introDiv.style.display = 'none';
  gameSecConDiv.style.display = 'block';
}

createTable();


function createTable() {
  var text = '';
  for (var i = 0; i < 9; i++) {
    text += '<div class="xo"></div>';
  }
  gameSectionDiv.innerHTML = text;
}








// --------------------------------------------------------------------------------------
// var vsCpuBtn = document.querySelector('#vsCpu');
// var introDiv = document.querySelector('.intro');
// var gameSecConDiv = document.querySelector('.game-section-container');
// var gameSectionDiv = document.querySelector('.game-section');
//
// vsCpuBtn.addEventListener('click', function () {
//   introDiv.style.display = 'none';
//   gameSecConDiv.style.display = 'block';
// })
//
// createTable();
//
// var boxes = document.querySelectorAll('.xo');
// var symbol = "O";
// var lines = [
//   [boxes[0],boxes[1],boxes[2]],
//   [boxes[3],boxes[4],boxes[5]],
//   [boxes[6],boxes[7],boxes[8]],
//   [boxes[0],boxes[3],boxes[6]],
//   [boxes[1],boxes[4],boxes[7]],
//   [boxes[2],boxes[5],boxes[8]],
//   [boxes[0],boxes[4],boxes[8]],
//   [boxes[2],boxes[4],boxes[6]]
// ];
//
// for (var i = 0; i < boxes.length; i++) {
//   boxes[i].addEventListener('click',insertSymbol)
// }
//
// function createTable() {
//   var text = '';
//   for (var i = 0; i < 9; i++) {
//     text += '<div class="xo"></div>';
//   }
//   gameSectionDiv.innerHTML = text;
// }
//
// function insertSymbol() {
//   (symbol == "O")? symbol = "X" : symbol = "O";
//   this.innerHTML = symbol;
//   checkLines();
// }
//
// function checkLines() {
//   for (var i = 0; i < lines.length; i++) {
//     var line = lines[i];
//     if (line[0].innerHTML == line[2].innerHTML && line[0].innerHTML == line[1].innerHTML && line[0].innerHTML !== "") {
//       for (var k = 0; k < line.length; k++) {
//         line[k].style.background = "tomato";
//       }
//     }
//   }
// }
