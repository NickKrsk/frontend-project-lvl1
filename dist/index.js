"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => {
  const name = _readlineSync.default.question("May I have your name?");

  console.log(`Hello, ${name}!`); //console.log("Hello!");
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJuYW1lIiwicmVhZGxpbmVTeW5jIiwicXVlc3Rpb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7ZUFFZSxNQUFNO0FBQ3BCLFFBQU1BLElBQUksR0FBR0Msc0JBQWFDLFFBQWIsQ0FBc0IsdUJBQXRCLENBQWI7O0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLFVBQVNKLElBQUssR0FBM0IsRUFGb0IsQ0FHcEI7QUFDQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCBuYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKFwiTWF5IEkgaGF2ZSB5b3VyIG5hbWU/XCIpO1xuXHRjb25zb2xlLmxvZyhgSGVsbG8sICR7bmFtZX0hYCk7XG5cdC8vY29uc29sZS5sb2coXCJIZWxsbyFcIik7XG59XG5cbiJdfQ==