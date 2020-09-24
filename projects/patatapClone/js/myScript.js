var circles = [];

var keyData = {
  a: {
    color: "purple",
    sound: new Howl({
      src: ['./sounds/bubbles.mp3']
    })
  },
  b: {
    color: "green",
    sound: new Howl({
      src: ['./sounds/clay.mp3']
    })
  },
  c: {
    color: "brown",
    sound: new Howl({
      src: ['./sounds/confetti.mp3']
    })
  },
};

function onKeyDown(event) {
  var maxPoint = new Point(view.size.width, view.size.height);
  var randomPoint = Point.random();
  var point = maxPoint * randomPoint;
  var newCircle = new Path.Circle(point, 500);
  newCircle.fillColor = keyData[event.key].color

  circles.push(newCircle);
}

function onFrame(event) {
  for (var i = 0; i< circles.length; i++) {
    circles[i].fillColor.hue += 1;
    circles[i].scale(.9);
  }
}

//Adding sounds


var sound2 = new Howl({
  src: ['./sounds/clay.mp3']
});