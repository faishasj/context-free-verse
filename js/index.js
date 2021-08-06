/*
Code adapted from: https://css-tricks.com/snippets/css/typewriter-effect/
*/

const typeSpeed = 100;

function setupTypewriter(t, HTML) {
  t.innerHTML = "";

  var cursorPosition = 0,
      tempTypeSpeed = 0;

  var type = function() {

    if (HTML[cursorPosition] === " ") {
      tempTypeSpeed = 0;
    }
    else {
      tempTypeSpeed = (Math.random() * typeSpeed) + 50;
    }
    
    t.innerHTML += HTML[cursorPosition];

    hljs.highlightElement(t);

    cursorPosition += 1;
    if (cursorPosition < HTML.length) {
      setTimeout(type, tempTypeSpeed);
    }
  }

  return {
    type: type
  }
}