/*
Code adapted from: https://css-tricks.com/snippets/css/typewriter-effect/
*/

function setupTypewriter(t, content, typeSpeed) {
  t.innerHTML = "";

  var cursorPosition = 0,
      tempTypeSpeed = 0;

  var type = function() {

    if (content[cursorPosition] === " ") {
      tempTypeSpeed = 0;
    }
    else {
      tempTypeSpeed = (Math.random() * typeSpeed) + 50;
    }
    
    t.innerHTML += content[cursorPosition];

    hljs.highlightElement(t);

    cursorPosition += 1;
    if (cursorPosition < content.length) {
      setTimeout(type, tempTypeSpeed);
    }
  }

  return {
    type: type
  }
}