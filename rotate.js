"use strict";
var expected = ['x','o','','','','','',''];
console.log(expected.length);

var pTest = ['','','x','o','','','',''];

pTest.push(pTest.shift());
pTest.push(pTest.shift());

console.log(pTest, pTest.length, pTest.toString() == expected.toString());
console.log(expected, expected.length, pTest == expected);

var rotate90 = function(a){
  return rotate(a);
}
var rotate180 = function(a){
  return rotate(rotate(a));
}
var rotate270 = function(a){
  return rotate(rotate(rotate(a)));
}
var rotate = function(a){
  var a1.from(a);
  a1.push(a1.shift());
  a1.push(a1.shift());
  return a1;
}
