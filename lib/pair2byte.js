'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _byte2pair = require('./byte2pair');

var _byte2pair2 = _interopRequireDefault(_byte2pair);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pair2byte = {};
for (var b = 0x00; b <= 0xFF; ++b) {
  pair2byte[_byte2pair2.default[b]] = b;
}exports.default = pair2byte;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYWlyMmJ5dGUuanMiXSwibmFtZXMiOlsicGFpcjJieXRlIiwiYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVksRUFBbEI7QUFDQSxLQUFNLElBQUlDLElBQUksSUFBZCxFQUFxQkEsS0FBSyxJQUExQixFQUFpQyxFQUFFQSxDQUFuQztBQUF1Q0QsWUFBVSxvQkFBVUMsQ0FBVixDQUFWLElBQTBCQSxDQUExQjtBQUF2QyxDLGtCQUVlRCxTIiwiZmlsZSI6InBhaXIyYnl0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBieXRlMnBhaXIgZnJvbSAnLi9ieXRlMnBhaXInIDtcblxuY29uc3QgcGFpcjJieXRlID0geyB9IDtcbmZvciAoIGxldCBiID0gMHgwMCA7IGIgPD0gMHhGRiA7ICsrYiApIHBhaXIyYnl0ZVtieXRlMnBhaXJbYl1dID0gYiA7XG5cbmV4cG9ydCBkZWZhdWx0IHBhaXIyYnl0ZSA7XG4iXX0=