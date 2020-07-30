// will create program that will listen to user input
window.addEventListener("keydown", keyPlay);
window.addEventListener("keyup", keyStop);
function keyPlay(e) {
  var key = whichKey(e);
  var x = document.getElementById(key);
  x.play();
}
function keyStop(e) {
  var key = whichKey(e);
  var x = document.getElementById(key);
  x.load();
}
function whichKey(a) {
  console.log(a);
  switch (a.keyCode) {
    //a
    case 65:
      return "c";
      break;
    //s
    case 83:
      return "d";
      break;
    //d
    case 68:
      return "e";
      break;
    //f
    case 70:
      return "f";
      break;
    //g
    case 71:
      return "g";
      break;
    //h
    case 72:
      return "a";
      break;
    //j
    case 74:
      return "b";
      break;
    //w
    case 87:
      return "c#";
      break;
    //e
    case 69:
      return "d#";
      break;
    //t
    case 84:
      return "f#";
      break;
    //y
    case 89:
      return "g#";
      break;
    //u
    case 85:
      return "a#";
      break;
    default:
      break;
  }
}
