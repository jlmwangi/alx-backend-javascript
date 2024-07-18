export default function createInt8TypedArray(length, position, value) {
	const buffer = new ArrayBuffer(length); // specify length of buffer
	const dataView = new DataView(buffer);
	const int8Array = new Int8Array(buffer); // create an int8 arraayview on buffer
	
	if (position >= 0 && position < length) {
		int8Array[position] = value;
	} else {
		console.error('Position outside range');
	}

	return dataView;
}
