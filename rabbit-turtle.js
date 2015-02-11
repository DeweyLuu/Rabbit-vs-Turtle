var Animal = function(s,f,n) {
	this.speed = s;
	this.focus = f;
	this.name = n;
	this.position = 0;
	this.tries = 0;
	this.report = function() {
		return this.name + " is at " + this.position;
	};
	this.run = function() {
		if (this.focus > (Math.random() * 10)) {
		this.position += this.speed;
		this.tries += 1;
		}
	};
}

var turtle = new Animal(2,9, "harry"),
		rabbit = new Animal(7,3, "larry");

var distance = 100;

if (turtle.position > 70) {
	turtle.focus -= 1;
} else if (rabbit.position > 60) {
	rabbit.focus += 1;
}

while (turtle.position < distance && rabbit.position < distance) {
	turtle.run();
	rabbit.run();
};

console.log(turtle.report());
console.log(rabbit.report());

if (turtle.position > rabbit.position) {
	var first = document.getElementById('winner');
	first.textContent = 'Turtle!!';
} else {
	var first = document.getElementById('winner');
	first.textContent = 'Rabbit!!';
}

var times1 = document.getElementById('turtleFinish');
times1.textContent = "Steps: " + turtle.tries;

var times2 = document.getElementById('rabbitFinish');
times2.textContent = "Steps: " + rabbit.tries;
