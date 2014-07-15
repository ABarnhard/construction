/* jshint -W069 */
/* global prompt:true */
'use strict';

// creating an object manually

var dogs = [];

var d1 = {};
d1.name = 'fido';
d1.age = 3;

var d2 = {name:'spot', age:5};

var d3 = {};
d3['name'] = 'lassy';
d3['age'] = 9;

var n = 'rex';
var a = 11;
var d4 = {name:n, age:a};

var name = 'name';
var age = 'age';
var d5 = {};
d5[name] = n;
d5[age] = a;

dogs.push(d1, d2, d3, d4, d5);
console.log('Dogs:', dogs);

console.log(d1 instanceof Object);
console.log(d1 instanceof Dog);

// create objects using constructors

function Dog(name, age){
  this.name = name;
  this.age = age;
}

var d6 = new Dog('fido', 3);

console.log(d6);
console.log(d6 instanceof Object);
console.log(d6 instanceof Dog);

// create dogs in loop with constructor

var prompt = require('sync-prompt').prompt;
var option = prompt('(d)og or (q)uit? ');
while(option !== 'q'){
  name = prompt('Dog\'s name? ');
  age = parseInt(prompt('Dog\'s age? '));
  dogs.push(new Dog(name, age));

  option = prompt('(d)og or (q)uit? ');
}

console.log(dogs);

