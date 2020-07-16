'use strict';

class RangeValidator {
	constructor(from, to) {
		this._from = from;
		this._to = to;
	}

	set from(v) {
		if (typeof v !== 'number') {
			throw new TypeError('Value from is not a number.');
		}
		this._from = v;
	}

	get from() {
		return this._from;
	}

	set to(v) {
		if (typeof v !== 'number') {
			throw new TypeError('Value to is not a number.');
		}
		return this._to = v;
	}

	get to() {
		return this._to;
	}

	get range() {
		return [this.from, this.to];
	}

	validate(number) {
		return (number >= this.from && number <= this.to);
	}
}

const rangeVal = new RangeValidator(50, 100);

console.log(rangeVal.range);
console.log(rangeVal.validate(100));
console.log(rangeVal.validate(55));
console.log(rangeVal.validate(-7));