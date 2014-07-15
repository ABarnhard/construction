'use strict';

function Room(name, length, width, height, floor, color){
  this.name = name;
  this.length = parseInt(length);
  this.width = parseInt(width);
  this.height = height;
  this.floor = floor;
  this.color = color;
}

Room.prototype.area = function(){
  return this.length * this.width;
};


Room.prototype.cost = function(){
  var rate, total = 0;

  switch(this.floor){
    case 'carpet':
      rate = 15;
      break;
    case 'tile':
      rate = 12;
      break;
    case 'wood':
      rate = 10;
      break;
  }

  total += rate * this.area();
  total += (this.width * this.height) * 2 * 0.50;
  total += (this.length * this.height) * 2 * 0.50;

  return total;
};

/*
Room.prototype.cost = function(){
  switch(this.floor){
    case 'carpet':
      return (this.area() * 15) + ((((this.width * 2) * this.height) + ((this.length * 2) * this.height)) / 2);
    case 'tile':
      return (this.area() * 12) + ((((this.width * 2) * this.height) + ((this.length * 2) * this.height)) / 2);
    case 'wood':
      return (this.area() * 10) + ((((this.width * 2) * this.height) + ((this.length * 2) * this.height)) / 2);
  }
};
*/

module.exports = Room;
