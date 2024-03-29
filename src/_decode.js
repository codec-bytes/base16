import Base16DecodeError from './Base16DecodeError.js';
import byte2pair from './byte2pair.js';

export default function* _decode(bytes, _options = null) {
	let start = 0;

	for (const b of bytes) {
		if (b < 0x00 || b > 0xff) {
			const reason = `byte out of range 0x00 <= ${b} <= 0xFF`;
			const position = {start, end: start + 1};
			throw new Base16DecodeError(reason, bytes, position);
		}

		yield byte2pair[b];

		++start;
	}
}
