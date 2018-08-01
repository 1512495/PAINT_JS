var colorSelect = function(draw, color) {
	this.draw = draw;
	this.color = color;
	this.x = 0;
	this.y = 0;
	this.width = 30;
	this.height = 30;

	this.show = function() {
		this.draw.context.fillStyle = this.color;
		this.draw.context.fillRect(this.x, this.y, this.x + this.width, this.y + this.height);
	}

	this.onMouseClick = function(mousePosition) {
		if(
			(mousePosition.x > this.x) &&
			(mousePosition.x < this.x + this.width) &&
			(mousePosition.y > this.y) &&
			(mousePosition.y < this.y + this.height)
		) {
			this.draw.color = this.color;
		}
	}

}