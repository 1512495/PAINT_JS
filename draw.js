this.draw = function() {
	this.canvas = null;
	this.context = null;
	this.width = 700;
	this.height = 500;
	this.x = 0;
	this.y = 0;
	this.drawing = false;
	this.lineWidth = 3;
	this.color = "red";
	this.redColorSelect = null;

	var self = this;
	
	this.init = function() {
		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d');
		this.canvas.width = this.width;
		this.canvas.height = this.height;

		document.body.appendChild(this.canvas);
		this.drawBackGround();

		//bắt các sự kiện chuột
		this.canvas.addEventListener('mousedown', function(event) {
			self.processMouseDown(event);
		});

		this.canvas.addEventListener('mouseup', function(event) {
			self.processMouseUp(event);
		});

		this.canvas.addEventListener('mousemove', function(event) {
			self.processMouseMove(event);
		});

		var redColorSelect = new colorSelect(this, "red");
		redColorSelect.show();
	}

	this.processMouseDown = function(event) {
		var position = this.getMousePosition(event);
		this.x = position.x;
		this.y = position.y;
		this.drawing = true;
		this.redColorSelect.onMouseClick(position);	
	}

	this.processMouseUp = function(event) {
		this.drawing = false;
	}

	this.processMouseMove = function(event) {
		if(this.drawing) {
			var newMousePos = this.getMousePosition(event);
			this.drawLine(this.x, this.y, newMousePos.x, newMousePos.y);
			this.x = newMousePos.x;
			this.y = newMousePos.y;
		}
		
	}

	this.drawBackGround = function() {
		this.context.fillStyle = "#ffffff";
		this.context.fillRect(0,0,this.width, this.height);
	}
	 
	this.getMousePosition = function(event) {
		var rect = this.canvas.getBoundingClientRect();
		return {
			x: event.clientX - rect.left,
			y: event.clientY - rect.top
		}
	}

	this.drawLine = function(startX, startY, endX, endY) {
		this.context.beginPath();
		this.context.moveTo(startX, startY);
		this.context.lineTo(endX, endY);
		this.context.lineWidth = this.lineWidth;
		this.context.strokeStyle = this.color;
		this.context.stroke();
	}
}
var veTrenWeb = new draw();
veTrenWeb.init();