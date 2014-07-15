'use strict';

var Room = require('./room');
var House = require('./house');

var r1 = new Room('living', 10, 12, 10, 'carpet', 'aqua');
var r2 = new Room('dining', 8, 10, 10, 'tile', 'green');
var r3 = new Room('bedroom', 9, 11, 10, 'wood', 'orange');

var h1 = new House('M-4', 'brick', 1993);
//var h2 = new House('M-6', 'stone', 1785);
//var h3 = new House('M-22', 'straw', 1893);

h1.rooms.push(r1, r2, r3);
//console.log(h1, h2, h3);

console.log('The area of room 1', r1.area());
console.log('The cost of room 1', r1.cost());
console.log('The cost of room 2', r2.cost());
console.log('The cost of room 3', r3.cost());
console.log('The area of house 1', h1.area());
console.log('The cost of house 1', h1.cost());


