// will create program that will listen to user input
window.addEventListener("keydown", keyPlay);
window.addEventListener("keyup", keyStop);
function keyPlay(e) {
  var key = whichKey(e);
  console.log(key);
  var x = document.getElementById(key);
  x.play();
}
function keyStop(e) {
  var key = whichKey(e);
  var x = document.getElementById(key);
  x.pause();
}
function whichKey(a) {
  switch (a.keyCode) {
    //a
    case 97:
      return "c";
      break;
    //s
    case 115:
      return "d";
      break;
    //d
    case 100:
      return "e";
      break;
    //f
    case 102:
      return "f";
      break;
    //g
    case 103:
      return "g";
      break;
    //h
    case 105:
      return "a";
      break;
    //j
    case 106:
      return "b";
      break;
    //w
    case 119:
      return "c#";
      break;
    //e
    case 102:
      return "d#";
      break;
    //t
    case 121:
      return "f#";
      break;
    //y
    case 122:
      return "g#";
      break;
    //u
    case 117:
      return "a#";
      break;
    default:
      break;
  }
}
