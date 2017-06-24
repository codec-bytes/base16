'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _encode;

var _jsItertools = require('@aureooms/js-itertools');

var _pair2byte = require('./pair2byte');

var _pair2byte2 = _interopRequireDefault(_pair2byte);

var _Base16EncodeError = require('./Base16EncodeError');

var _Base16EncodeError2 = _interopRequireDefault(_Base16EncodeError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [_encode].map(regeneratorRuntime.mark);

function _encode(string) {
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	var start, it, first, second, reason, position, pair, _reason, _position;

	return regeneratorRuntime.wrap(function _encode$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					start = 0;
					it = (0, _jsItertools.iter)(string);

				case 2:
					if (!true) {
						_context.next = 38;
						break;
					}

					first = void 0, second = void 0;
					_context.prev = 4;

					first = (0, _jsItertools.next)(it);
					_context.next = 15;
					break;

				case 8:
					_context.prev = 8;
					_context.t0 = _context['catch'](4);

					if (!(_context.t0 instanceof _jsItertools.StopIteration)) {
						_context.next = 14;
						break;
					}

					return _context.abrupt('break', 38);

				case 14:
					throw _context.t0;

				case 15:
					_context.prev = 15;

					second = (0, _jsItertools.next)(it);
					_context.next = 28;
					break;

				case 19:
					_context.prev = 19;
					_context.t1 = _context['catch'](15);

					if (!(_context.t1 instanceof _jsItertools.StopIteration)) {
						_context.next = 27;
						break;
					}

					reason = 'incomplete pair starting with ' + first;
					position = { start: start, end: start + 1 };
					throw new _Base16EncodeError2.default(reason, string, position);

				case 27:
					throw _context.t1;

				case 28:
					pair = first + second;

					if (_pair2byte2.default.hasOwnProperty(pair)) {
						_context.next = 33;
						break;
					}

					_reason = 'cannot find pair ' + pair;
					_position = { start: start, end: start + 2 };
					throw new _Base16EncodeError2.default(_reason, string, _position);

				case 33:
					_context.next = 35;
					return _pair2byte2.default[pair];

				case 35:

					start += 2;

					_context.next = 2;
					break;

				case 38:
				case 'end':
					return _context.stop();
			}
		}
	}, _marked[0], this, [[4, 8], [15, 19]]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fZW5jb2RlLmpzIl0sIm5hbWVzIjpbIl9lbmNvZGUiLCJzdHJpbmciLCJvcHRpb25zIiwic3RhcnQiLCJpdCIsImZpcnN0Iiwic2Vjb25kIiwicmVhc29uIiwicG9zaXRpb24iLCJlbmQiLCJwYWlyIiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUt5QkEsTzs7QUFMekI7O0FBRUE7Ozs7QUFDQTs7Ozs7O2VBRXlCQSxPOztBQUFWLFNBQVVBLE9BQVYsQ0FBb0JDLE1BQXBCO0FBQUEsS0FBNkJDLE9BQTdCLHVFQUF1QyxJQUF2Qzs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVWQyxVQUZVLEdBRUYsQ0FGRTtBQUlSQyxPQUpRLEdBSUgsdUJBQUtILE1BQUwsQ0FKRzs7QUFBQTtBQUFBLFVBTU4sSUFOTTtBQUFBO0FBQUE7QUFBQTs7QUFRVEksVUFSUyxXQVFGQyxNQVJFO0FBQUE7O0FBV1pELGFBQVEsdUJBQU1ELEVBQU4sQ0FBUjtBQVhZO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBLFdBY1AsaURBZE87QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQW1CWkUsY0FBUyx1QkFBTUYsRUFBTixDQUFUO0FBbkJZO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBLFdBc0JQLGlEQXRCTztBQUFBO0FBQUE7QUFBQTs7QUF1QkxHLFdBdkJLLHNDQXVCcUNGLEtBdkJyQztBQXdCTEcsYUF4QkssR0F3Qk0sRUFBRUwsT0FBUUEsS0FBVixFQUFrQk0sS0FBTU4sUUFBUSxDQUFoQyxFQXhCTjtBQUFBLFdBeUJMLGdDQUF1QkksTUFBdkIsRUFBZ0NOLE1BQWhDLEVBQXlDTyxRQUF6QyxDQXpCSzs7QUFBQTtBQUFBOztBQUFBO0FBOEJQRSxTQTlCTyxHQThCQUwsUUFBUUMsTUE5QlI7O0FBQUEsU0FnQ1Asb0JBQVVLLGNBQVYsQ0FBeUJELElBQXpCLENBaENPO0FBQUE7QUFBQTtBQUFBOztBQWlDTkgsWUFqQ00seUJBaUN1QkcsSUFqQ3ZCO0FBa0NORixjQWxDTSxHQWtDSyxFQUFFTCxPQUFRQSxLQUFWLEVBQWtCTSxLQUFNTixRQUFRLENBQWhDLEVBbENMO0FBQUEsV0FtQ0wsZ0NBQXVCSSxPQUF2QixFQUFnQ04sTUFBaEMsRUFBeUNPLFNBQXpDLENBbkNLOztBQUFBO0FBQUE7QUFBQSxZQXNDUCxvQkFBVUUsSUFBVixDQXRDTzs7QUFBQTs7QUF3Q2JQLGNBQVMsQ0FBVDs7QUF4Q2E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJfZW5jb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXRlciAsIG5leHQgLCBTdG9wSXRlcmF0aW9uIH0gZnJvbSAnQGF1cmVvb21zL2pzLWl0ZXJ0b29scycgO1xuXG5pbXBvcnQgcGFpcjJieXRlIGZyb20gJy4vcGFpcjJieXRlJyA7XG5pbXBvcnQgQmFzZTE2RW5jb2RlRXJyb3IgZnJvbSAnLi9CYXNlMTZFbmNvZGVFcnJvcicgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogX2VuY29kZSAoIHN0cmluZyAsIG9wdGlvbnMgPSBudWxsICkge1xuXG5cdGxldCBzdGFydCA9IDAgO1xuXG5cdGNvbnN0IGl0ID0gaXRlcihzdHJpbmcpIDtcblxuXHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRsZXQgZmlyc3QsIHNlY29uZDtcblxuXHRcdHRyeSB7XG5cdFx0XHRmaXJzdCA9IG5leHQoIGl0ICkgO1xuXHRcdH1cblx0XHRjYXRjaCAoIGUgKSB7XG5cdFx0XHRpZiAoIGUgaW5zdGFuY2VvZiBTdG9wSXRlcmF0aW9uICkgYnJlYWsgO1xuXHRcdFx0ZWxzZSB0aHJvdyBlIDtcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0c2Vjb25kID0gbmV4dCggaXQgKSA7XG5cdFx0fVxuXHRcdGNhdGNoICggZSApIHtcblx0XHRcdGlmICggZSBpbnN0YW5jZW9mIFN0b3BJdGVyYXRpb24gKSB7XG5cdFx0XHRcdGNvbnN0IHJlYXNvbiA9IGBpbmNvbXBsZXRlIHBhaXIgc3RhcnRpbmcgd2l0aCAke2ZpcnN0fWAgO1xuXHRcdFx0XHRjb25zdCBwb3NpdGlvbiA9IHsgc3RhcnQgOiBzdGFydCAsIGVuZCA6IHN0YXJ0ICsgMSB9IDtcblx0XHRcdFx0dGhyb3cgbmV3IEJhc2UxNkVuY29kZUVycm9yKCByZWFzb24gLCBzdHJpbmcgLCBwb3NpdGlvbiApIDtcblx0XHRcdH1cblx0XHRcdGVsc2UgdGhyb3cgZSA7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcGFpciA9IGZpcnN0ICsgc2Vjb25kIDtcblxuXHRcdGlmICggIXBhaXIyYnl0ZS5oYXNPd25Qcm9wZXJ0eShwYWlyKSApIHtcblx0XHRcdGNvbnN0IHJlYXNvbiA9IGBjYW5ub3QgZmluZCBwYWlyICR7cGFpcn1gIDtcblx0XHRcdGNvbnN0IHBvc2l0aW9uID0geyBzdGFydCA6IHN0YXJ0ICwgZW5kIDogc3RhcnQgKyAyIH0gO1xuIFx0XHRcdHRocm93IG5ldyBCYXNlMTZFbmNvZGVFcnJvciggcmVhc29uICwgc3RyaW5nICwgcG9zaXRpb24gKSA7XG5cdFx0fVxuXG5cdFx0eWllbGQgcGFpcjJieXRlW3BhaXJdIDtcblxuXHRcdHN0YXJ0ICs9IDIgO1xuXG5cdH1cblxufVxuIl19