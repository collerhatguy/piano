var body = document.getElementsByTagName(body);

// will create program that will listen to user input
window.addEventListener("keypress", keyPlay);
function keyPlay(e) {
  const key = whichKey(e);
  console.log(key);
}
function keyStop(e) {
  const key = whichKey(e);
}
function whichKey(a) {
  switch (a.keyCode) {
    //a
    case 65:
      console.log("a");
      return 65;
      break;
    //s
    case 83:
      return 85;
      break;
    //d
    case 68:
      return 68;
      break;
    //f
    case 70:
      return 70;
      break;
    //g
    case 71:
      return 71;
      break;
    //h
    case 72:
      return 72;
      break;
    //j
    case 74:
      return 74;
      break;
    //w
    case 87:
      return 87;
      break;
    //e
    case 84:
      return 84;
      break;
    //t
    case 89:
      return 89;
      break;
    //y
    case 90:
      return 90;
      break;
    //u
    case 85:
      return 85;
      break;
    default:
      break;
  }
}
