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

function onKeyDown(event) {
  var maxPoint = new Point(view.size.width, view.size.height);
  var randomPoint = Point.random();
  var point = maxPoint * randomPoint;
  
  new Path.Circle(new Point(point), 10).fillColor = "yellow";
}