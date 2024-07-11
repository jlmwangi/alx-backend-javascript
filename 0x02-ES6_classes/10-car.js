export default class Car {
	constructor(brand, motor, color) {
		if (typeof brand && typeof motor && typeof color !== 'string') {
			throw new TypeError('values must be strings');
		}
		this._brand = brand;
		this._motor = motor;
		this._color = color;
	}

	cloneCar() {
		//return a new object of the class
		return new this.constructor(this._brand, this._motor, this._color);
	}
}
