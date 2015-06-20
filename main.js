var canvas = document.getElementById('canvas');

var ctx = canvas.getContext('2d'), radians = 0.0174532925;

function clock() {
	//Clear canvas
	canvas.width = canvas.width;

	//Draw clock arc
	//Bigger one
	ctx.beginPath();
	ctx.strokeStyle = '#5D440E';
	ctx.fillStyle = '#FFF1D3';
	ctx.lineWidth = 20;
	ctx.arc(250, 250, 240, 0, Math.PI*2);
	ctx.stroke();
	ctx.fill();

	//Smaller one
	ctx.beginPath();
	ctx.fillStyle = '#FFF';
	ctx.lineWidth = 1;
	ctx.moveTo(350, 250);
	ctx.arc(250, 250, 100, 0, Math.PI*2);
	ctx.stroke();
	ctx.fill();

	//Brand
	ctx.beginPath()
	ctx.fillStyle = '#2A251A';
	ctx.font = '14px Arial';
	ctx.fillText('Ali Movahedi, A Developer', 165, 220);

	//Draw bigger dots
	ctx.beginPath();
	ctx.fillStyle = '#5D440E';
	for(var i = 0; i < 12; i++) {
		var x = 250 + Math.cos(radians * i * 30) * 225;
		var y = 250 + Math.sin(radians * i * 30) * 225;
		ctx.moveTo(x, y);
		ctx.arc(x, y, 4, 0, Math.PI*2);
	}
	ctx.fill();

	//Draw smaller dots
	ctx.beginPath();
	ctx.fillStyle = '#5D440E';
	for(var i = 0; i < 60; i++) {
		var x = 250 + Math.cos(radians * i * 6) * 225;
		var y = 250 + Math.sin(radians * i * 6) * 225;
		ctx.moveTo(x, y);
		ctx.arc(x, y, 2, 0, Math.PI*2);
	}
	ctx.fill();

	//Draw clock hands
	var date = new Date(), minute = date.getMinutes(), hour = date.getHours(), second = date.getSeconds();
	//Draw hour hand
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.lineJoin = 'round';
	ctx.moveTo(250, 250);
	ctx.lineTo(250 + Math.cos(radians * 30 * (hour - 3)) * (250 - 100),
					250 + Math.sin(radians * 30 * (hour - 3)) * (250 - 100));
	ctx.stroke();
	//Draw minute hand
	ctx.beginPath();
	ctx.lineWidth = 3;
	ctx.lineJoin = 'round';
	ctx.moveTo(250, 250);
	ctx.lineTo(250 + Math.cos(radians * 6 * (minute - 15)) * (250 - 70),
					250 + Math.sin(radians * 6 * (minute - 15)) * (250 - 70));
	ctx.stroke();
	//Draw second hand
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.lineJoin = 'round';
	ctx.moveTo(250, 250);
	ctx.lineTo(250 + Math.cos(radians * 6 * (second - 15)) * (250 - 40),
					250 + Math.sin(radians * 6 * (second - 15)) * (250 - 40));
	ctx.stroke();

	//Animation request
	window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);