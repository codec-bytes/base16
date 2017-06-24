'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jsCodec = require('@aureooms/js-codec');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Base16EncodeError = function (_EncodeError) {
	_inherits(Base16EncodeError, _EncodeError);

	function Base16EncodeError(reason, object, position) {
		_classCallCheck(this, Base16EncodeError);

		return _possibleConstructorReturn(this, (Base16EncodeError.__proto__ || Object.getPrototypeOf(Base16EncodeError)).call(this, 'base16', reason, object, position));
	}

	return Base16EncodeError;
}(_jsCodec.EncodeError);

exports.default = Base16EncodeError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CYXNlMTZFbmNvZGVFcnJvci5qcyJdLCJuYW1lcyI6WyJCYXNlMTZFbmNvZGVFcnJvciIsInJlYXNvbiIsIm9iamVjdCIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7SUFFcUJBLGlCOzs7QUFFcEIsNEJBQWNDLE1BQWQsRUFBdUJDLE1BQXZCLEVBQWdDQyxRQUFoQyxFQUEyQztBQUFBOztBQUFBLCtIQUNuQyxRQURtQyxFQUN4QkYsTUFEd0IsRUFDZkMsTUFEZSxFQUNOQyxRQURNO0FBRTFDOzs7OztrQkFKbUJILGlCIiwiZmlsZSI6IkJhc2UxNkVuY29kZUVycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW5jb2RlRXJyb3IgfSBmcm9tICdAYXVyZW9vbXMvanMtY29kZWMnIDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZTE2RW5jb2RlRXJyb3IgZXh0ZW5kcyBFbmNvZGVFcnJvciB7XG5cblx0Y29uc3RydWN0b3IgKCByZWFzb24gLCBvYmplY3QgLCBwb3NpdGlvbiApIHtcblx0XHRzdXBlciggJ2Jhc2UxNicgLCByZWFzb24gLCBvYmplY3QgLCBwb3NpdGlvbiApIDtcblx0fVxuXG59XG5cbiJdfQ==