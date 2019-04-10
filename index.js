var winners = new Array(); // all possible winning combinations
var player1Selections = new Array(); //player1 selections
var player2Selections = new Array(); //player2 selections
var currentPlayer = 0; //index of player currently in play
var points1 = 0; //ongoing games player scores
var points2 = 0;
var size = 3; //board measure in width * height

function drawBoard() {
  var parent = document.getElementById("game");
  var counter = 1;

  for (var i = 0; i < 3; i++) {
    var row = document.createElement("tr");

    for (var x = 0; x < size; x++) {
      var col = document.createElement("td");
      col.innerHTML = counter;

      row.appendChild(col);
    }
    parent.appendChild(row);
  }
}
