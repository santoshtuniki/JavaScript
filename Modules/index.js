// named exports
const sum = (x, y) => x + y;
const difference = (x, y) => x - y;
const product = (x, y) => x * y;

class ComplexNumber {
	constructor( real, imaginary ){
		this.real = real;
		this.imaginary = imaginary;
	}

	toString(){
		return `${this.real} + i${this.imaginary}`;
	}
}


export {
	sum, difference, product, ComplexNumber
}