function changeColorScheme(colorScheme) {
    if (colorScheme === 'random') {
      var randomColor = getRandomColor();
      document.body.className = '';
      document.body.style.backgroundColor = randomColor;
    } else {
      document.body.style.backgroundColor = '';
      document.body.className = colorScheme;
    }
  }

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeFontSize(action) {
  var elementsToChange = document.querySelectorAll(".text");

  elementsToChange.forEach(function(element) {
    var fontSize = parseInt(getComputedStyle(element).fontSize);
  
    if (action === 'increase' && fontSize < 25) {
      fontSize += 1;
    } else if (action === 'decrease' && fontSize > 12) {
      fontSize -= 1;
    }
  
   element.style.fontSize = fontSize + 'px';
  });
}
