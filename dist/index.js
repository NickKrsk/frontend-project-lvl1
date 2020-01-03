"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hello = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const hello = title => {
  console.log("Welcome to the Brain Games!!");

  if (title) {
    console.log(title);
  }

  const name = _readlineSync.default.question("May I have your name?");

  console.log(`Hello, ${name}!`);
  return name;
};

exports.hello = hello;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJoZWxsbyIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRU8sTUFBTUEsS0FBSyxHQUFJQyxLQUFELElBQVc7QUFDL0JDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaOztBQUNBLE1BQUdGLEtBQUgsRUFBVTtBQUNUQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBOztBQUNELFFBQU1HLElBQUksR0FBR0Msc0JBQWFDLFFBQWIsQ0FBc0IsdUJBQXRCLENBQWI7O0FBQ0FKLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLFVBQVNDLElBQUssR0FBM0I7QUFDQSxTQUFPQSxJQUFQO0FBQ0EsQ0FSTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFkbGluZVN5bmMgZnJvbSAncmVhZGxpbmUtc3luYyc7XG5cbmV4cG9ydCBjb25zdCBoZWxsbyA9ICh0aXRsZSkgPT4ge1xuXHRjb25zb2xlLmxvZyhcIldlbGNvbWUgdG8gdGhlIEJyYWluIEdhbWVzISFcIik7XG5cdGlmKHRpdGxlKSB7XG5cdFx0Y29uc29sZS5sb2codGl0bGUpO1xuXHR9XG5cdGNvbnN0IG5hbWUgPSByZWFkbGluZVN5bmMucXVlc3Rpb24oXCJNYXkgSSBoYXZlIHlvdXIgbmFtZT9cIik7XG5cdGNvbnNvbGUubG9nKGBIZWxsbywgJHtuYW1lfSFgKTtcblx0cmV0dXJuIG5hbWU7XG59XG5cbiJdfQ==