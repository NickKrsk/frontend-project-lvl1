"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => {
  console.log("Welcome to the Brain Games!!");

  const name = _readlineSync.default.question("May I have your name?");

  console.log(`Hello, ${name}!`);
  return name;
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwibmFtZSIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7ZUFFZSxNQUFNO0FBQ3BCQSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWjs7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLHNCQUFhQyxRQUFiLENBQXNCLHVCQUF0QixDQUFiOztBQUNBSixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxVQUFTQyxJQUFLLEdBQTNCO0FBQ0EsU0FBT0EsSUFBUDtBQUNBLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnNvbGUubG9nKFwiV2VsY29tZSB0byB0aGUgQnJhaW4gR2FtZXMhIVwiKTtcblx0Y29uc3QgbmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbihcIk1heSBJIGhhdmUgeW91ciBuYW1lP1wiKTtcblx0Y29uc29sZS5sb2coYEhlbGxvLCAke25hbWV9IWApO1xuXHRyZXR1cm4gbmFtZTtcbn1cblxuIl19