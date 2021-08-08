/*
Code adapted from: https://css-tricks.com/snippets/css/typewriter-effect/
*/

function setupTypewriter(t, content, typeSpeed) {
  var timeout;
  var cursorPosition = 0;
  var tempTypeSpeed = 0;
  
  t.innerHTML = "";

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
      timeout = setTimeout(type, tempTypeSpeed);
    }
  }

  var skip = function() {
    clearTimeout(timeout);
    t.innerHTML = content;
    hljs.highlightElement(t);
  }

  var reset = function() {
    clearTimeout(timeout);
    cursorPosition = 0;
    t.innerHTML = "";
    type();
  }

  return {
    type: type,
    skip: skip,
    reset: reset
  }
}