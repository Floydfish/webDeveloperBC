// var myCircle1 = new Path.Circle(new Point(100, 70), 10);
// myCircle1.fillColor = 'black';

// var myCircle2 = new Path.Circle(new Point(50, 50), 300);
// myCircle2.fillColor = 'purple';

// var circle = new Path.Circle({
//   center: [0, 0],
//   radius: 10,
//   fillColor: 'purple'
// });

// for (var i = 0; i < 1001; i += 100) {
//   for (var j = 0; j < 1001; j += 100) {
//     var copy = circle.clone();
//     copy.position.x = i;
//     copy.position.y = j;
//   }
// }

// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j < 10; j++) {
//     var copy = circle.clone();
//     copy.position.x += i * 100
//     copy.position.y += j * 100
//   }
// }

// for (var x = 0; x < 1000; x += 100) {
//   for (var y = 0; y < 1000; y += 100) {
//     new Path.Circle(new Point(x, y), 10).fillColor = "purple";
//   }
// }

var circles = [];

function onKeyDown(event) {
  // if key is "a"
  if (event.key === "a") {
    //play sound1
    sound1.play();
  }
  // if key is "s"
    if (event.key === "b") {
      //play sound2  
      sound2.play();
    }
  var maxPoint = new Point(view.size.width, view.size.height);
  var randomPoint = Point.random();
  var point = maxPoint * randomPoint;
  var newCircle = new Path.Circle(point, 500);
  
  newCircle.fillColor = "orange";

  circles.push(newCircle);
}

function onFrame(event) {
  for (var i = 0; i< circles.length; i++) {
    circles[i].fillColor.hue += 1;
    circles[i].scale(.9);
  }
}

//Adding sounds
var sound1 = new Howl({
  src: ['./sounds/bubbles.mp3']
});

var sound2 = new Howl({
  src: ['./sounds/clay.mp3']
});