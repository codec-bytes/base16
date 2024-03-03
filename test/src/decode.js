import test from 'ava';

import {range} from '@iterable-iterator/range';

import {CodecError} from './_fixtures.js';

import {decode, Base16DecodeError, byte2pair} from '#module';

function success(t, bytes, options, expected) {
	const string = decode(bytes, options);

	t.deepEqual(string, expected);
}

success.title = (title, bytes, options, expected) =>
	title ??
	`decode(${JSON.stringify(bytes)}, ${JSON.stringify(
		options,
	)})' == ${JSON.stringify(expected)}`;

function failure(t, bytes, options, ExpectedError, position) {
	const error = t.throws(() => decode(bytes, options));
	t.true(error instanceof CodecError);
	t.true(error instanceof ExpectedError);
	t.is(error.encoding, 'base16');
	t.is(error.object, bytes);
	t.is(error.position.start, position.start);
	t.is(error.position.end, position.end);
}

failure.title = (title, bytes, options, expected) =>
	title ??
	`decode(${JSON.stringify(bytes)}, ${JSON.stringify(options)})' fails with ${
		expected.name
	}`;

test(success, [0x41], null, '41');
test(success, [0x61], null, '61');

test(success, [...range(0xff + 1)], null, byte2pair.join(''));

test(failure, [-1], null, Base16DecodeError, {start: 0, end: 1});
test(failure, [0xff + 1], null, Base16DecodeError, {start: 0, end: 1});
test(failure, [...range(0xff + 2)], null, Base16DecodeError, {
	start: 256,
	end: 257,
});
