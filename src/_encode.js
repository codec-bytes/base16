import {next, StopIteration} from '@iterable-iterator/next';
import {iter} from '@iterable-iterator/iter';

import pair2byte from './pair2byte.js';
import Base16EncodeError from './Base16EncodeError.js';

export default function* _encode(string, _options = null) {
	let start = 0;

	const it = iter(string);

	while (true) {
		let first;
		let second;

		try {
			first = next(it);
		} catch (error) {
			if (error instanceof StopIteration) break;
			else throw error;
		}

		try {
			second = next(it);
		} catch (error) {
			if (error instanceof StopIteration) {
				const reason = `incomplete pair starting with ${first}`;
				const position = {start, end: start + 1};
				throw new Base16EncodeError(reason, string, position);
			} else throw error;
		}

		const pair = first + second;

		if (!Object.prototype.hasOwnProperty.call(pair2byte, pair)) {
			const reason = `cannot find pair ${pair}`;
			const position = {start, end: start + 2};
			throw new Base16EncodeError(reason, string, position);
		}

		yield pair2byte[pair];

		start += 2;
	}
}
