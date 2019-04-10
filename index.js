var winners = new Array(); // all possible winning combinations
var player1Selections = new Array(); //player1 selections
var player2Selections = new Array(); //player2 selections
var currentPlayer = 0; //index of player currently in play
var points1 = 0; //ongoing games player scores
var points2 = 0;
var size = 3; //board measure in width * height

//every major step in the game is its own function

function drawBoard() {
  var parent = document.getElementById("game");
  var counter = 1;

  for (var i = 0; i < 3; i++) {
    var row = document.createElement("tr");

    for (var x = 0; x < size; x++) {
      var col = document.createElement("td");
      col.innerHTML = counter;

      row.appendChild(col);
      counter++;
    }
    parent.appendChild(row);
  }
}

//add win cases
function loadAnswers() {
  winners.push([1, 2, 3]);
  winners.push([4, 5, 6]);
  winners.push([7, 8, 9]);
  winners.push([1, 4, 7]);
  winners.push([2, 5, 8]);
  winners.push([3, 6, 9]);
  winners.push([1, 5, 9]);
  winners.push([3, 5, 7]);
}
