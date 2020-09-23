// Create a Paper.js Path to draw a line into it:
var path = new Path();
// Give the stroke a color
path.strokeColor = 'black';
var start = new Point(100, 100);
// Move to start and draw a line from there
path.moveTo(start);
// Note the plus operator on Point objects.
// PaperScript does that for us, and much more!
path.lineTo(start + [ 100, -50 ]);

var myCircle1 = new Path.Circle(new Point(100, 70), 10);
myCircle1.fillColor = 'black';

var myCircle2 = new Path.Circle(new Point(50, 50), 300);
myCircle2.fillColor = 'purple';