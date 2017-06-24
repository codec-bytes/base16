'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

var pair2byte = [];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = digits[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var first = _step.value;
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = digits[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var second = _step2.value;

				pair2byte.push(first + second);
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

exports.default = pair2byte;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ieXRlMnBhaXIuanMiXSwibmFtZXMiOlsiZGlnaXRzIiwicGFpcjJieXRlIiwiZmlyc3QiLCJzZWNvbmQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLFNBQVMsQ0FDZCxHQURjLEVBRWQsR0FGYyxFQUdkLEdBSGMsRUFJZCxHQUpjLEVBS2QsR0FMYyxFQU1kLEdBTmMsRUFPZCxHQVBjLEVBUWQsR0FSYyxFQVNkLEdBVGMsRUFVZCxHQVZjLEVBV2QsR0FYYyxFQVlkLEdBWmMsRUFhZCxHQWJjLEVBY2QsR0FkYyxFQWVkLEdBZmMsRUFnQmQsR0FoQmMsQ0FBZjs7QUFtQkEsSUFBTUMsWUFBWSxFQUFsQjs7Ozs7OztBQUVBLHNCQUFxQkQsTUFBckIsOEhBQThCO0FBQUEsTUFBbEJFLEtBQWtCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQzdCLHlCQUFzQkYsTUFBdEIsbUlBQStCO0FBQUEsUUFBbkJHLE1BQW1COztBQUM5QkYsY0FBVUcsSUFBVixDQUFnQkYsUUFBUUMsTUFBeEI7QUFDQTtBQUg0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSTdCOzs7Ozs7Ozs7Ozs7Ozs7O2tCQUVjRixTIiwiZmlsZSI6ImJ5dGUycGFpci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRpZ2l0cyA9IFtcblx0JzAnLFxuXHQnMScsXG5cdCcyJyxcblx0JzMnLFxuXHQnNCcsXG5cdCc1Jyxcblx0JzYnLFxuXHQnNycsXG5cdCc4Jyxcblx0JzknLFxuXHQnQScsXG5cdCdCJyxcblx0J0MnLFxuXHQnRCcsXG5cdCdFJyxcblx0J0YnLFxuXSA7XG5cbmNvbnN0IHBhaXIyYnl0ZSA9IFsgXSA7XG5cbmZvciAoIGNvbnN0IGZpcnN0IG9mIGRpZ2l0cyApIHtcblx0Zm9yICggY29uc3Qgc2Vjb25kIG9mIGRpZ2l0cyApIHtcblx0XHRwYWlyMmJ5dGUucHVzaCggZmlyc3QgKyBzZWNvbmQgKSA7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFpcjJieXRlIDtcbiJdfQ==