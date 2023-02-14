function letra() {
    var text = document.getElementById("text");
    var chars = text.innerHTML.split("");
    text.innerHTML = "";
    chars.forEach(function(char, i) {
      setTimeout(function() {
        text.innerHTML += char;
      }, 100 * i);
    });
  }
 letra();
  function casa() {
    var text = document.getElementById("text1");
    var chars = text.innerHTML.split("");
    text.innerHTML = "";
    chars.forEach(function(char, i) {
      setTimeout(function() {
        text.innerHTML += char;
      }, 80 * i);
    });
  }
   casa();