function Prism() {
	this.x = 0;
	this.y = 0;
	this.rotation = 0;
	this.outputColor = 0;
	this.inputs = [new PrismInput(), new PrismInput(), new PrismInput()];
};
Prism.prototype.toString = function () {return "Prism"};