'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _decode;

var _byte2pair = require('./byte2pair');

var _byte2pair2 = _interopRequireDefault(_byte2pair);

var _Base16DecodeError = require('./Base16DecodeError');

var _Base16DecodeError2 = _interopRequireDefault(_Base16DecodeError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [_decode].map(regeneratorRuntime.mark);

function _decode(bytes) {
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	var start, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, b, reason, position;

	return regeneratorRuntime.wrap(function _decode$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					start = 0;
					_iteratorNormalCompletion = true;
					_didIteratorError = false;
					_iteratorError = undefined;
					_context.prev = 4;
					_iterator = bytes[Symbol.iterator]();

				case 6:
					if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
						_context.next = 18;
						break;
					}

					b = _step.value;

					if (!(b < 0x00 || b > 0xFF)) {
						_context.next = 12;
						break;
					}

					reason = 'byte out of range 0x00 <= ' + b + ' <= 0xFF';
					position = { start: start, end: start + 1 };
					throw new _Base16DecodeError2.default(reason, bytes, position);

				case 12:
					_context.next = 14;
					return _byte2pair2.default[b];

				case 14:

					++start;

				case 15:
					_iteratorNormalCompletion = true;
					_context.next = 6;
					break;

				case 18:
					_context.next = 24;
					break;

				case 20:
					_context.prev = 20;
					_context.t0 = _context['catch'](4);
					_didIteratorError = true;
					_iteratorError = _context.t0;

				case 24:
					_context.prev = 24;
					_context.prev = 25;

					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}

				case 27:
					_context.prev = 27;

					if (!_didIteratorError) {
						_context.next = 30;
						break;
					}

					throw _iteratorError;

				case 30:
					return _context.finish(27);

				case 31:
					return _context.finish(24);

				case 32:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this, [[4, 20, 24, 32], [25,, 27, 31]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fZGVjb2RlLmpzIl0sIm5hbWVzIjpbIl9kZWNvZGUiLCJieXRlcyIsIm9wdGlvbnMiLCJzdGFydCIsImIiLCJyZWFzb24iLCJwb3NpdGlvbiIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBR3lCQSxPOztBQUh6Qjs7OztBQUNBOzs7Ozs7ZUFFeUJBLE87O0FBQVYsU0FBVUEsT0FBVixDQUFvQkMsS0FBcEI7QUFBQSxLQUE0QkMsT0FBNUIsdUVBQXNDLElBQXRDOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVZDLFVBRlUsR0FFRixDQUZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFJR0YsS0FKSDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlGRyxNQUpFOztBQUFBLFdBTVJBLElBQUksSUFBSixJQUFZQSxJQUFJLElBTlI7QUFBQTtBQUFBO0FBQUE7O0FBT05DLFdBUE0sa0NBT2dDRCxDQVBoQztBQVFORSxhQVJNLEdBUUssRUFBRUgsT0FBUUEsS0FBVixFQUFrQkksS0FBTUosUUFBUSxDQUFoQyxFQVJMO0FBQUEsV0FTTixnQ0FBdUJFLE1BQXZCLEVBQWdDSixLQUFoQyxFQUF3Q0ssUUFBeEMsQ0FUTTs7QUFBQTtBQUFBO0FBQUEsWUFZUCxvQkFBVUYsQ0FBVixDQVpPOztBQUFBOztBQWNiLE9BQUVELEtBQUY7O0FBZGE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJfZGVjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ5dGUycGFpciBmcm9tICcuL2J5dGUycGFpcicgO1xuaW1wb3J0IEJhc2UxNkRlY29kZUVycm9yIGZyb20gJy4vQmFzZTE2RGVjb2RlRXJyb3InIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIF9kZWNvZGUgKCBieXRlcyAsIG9wdGlvbnMgPSBudWxsICkge1xuXG5cdGxldCBzdGFydCA9IDAgO1xuXG5cdGZvciAoIGNvbnN0IGIgb2YgYnl0ZXMgKSB7XG5cblx0XHRpZiAoIGIgPCAweDAwIHx8IGIgPiAweEZGICkge1xuXHRcdFx0Y29uc3QgcmVhc29uID0gYGJ5dGUgb3V0IG9mIHJhbmdlIDB4MDAgPD0gJHtifSA8PSAweEZGYCA7XG5cdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCAsIGVuZCA6IHN0YXJ0ICsgMSB9IDtcblx0XHRcdHRocm93IG5ldyBCYXNlMTZEZWNvZGVFcnJvciggcmVhc29uICwgYnl0ZXMgLCBwb3NpdGlvbiApIDtcblx0XHR9XG5cblx0XHR5aWVsZCBieXRlMnBhaXJbYl0gO1xuXG5cdFx0KytzdGFydCA7XG5cblx0fVxuXG59XG4iXX0=