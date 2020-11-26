let chessPiece = undefined;

chessPiece = "PawN"

switch (chessPiece.toLowerCase()) {
  case "king":
    return console.log('Horizontal, vertical, diagonal');
  case "queen":
    return console.log('Horizontal, vertical, diagonal');
  case "bishop":
    return console.log('Diagonal');
  case "horse":
    return console.log('L-shaped movement');
  case "tower":
    return console.log('Horizontal and vertical');
  case "pawn":
    return console.log('Moves forward only');
  default:
    return console.log('Error! Try again.')
}