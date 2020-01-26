// Make a lst constructor
//
/*jshint esversion: 6 */

function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.clear = clear;
  this.find = find;
  //  this.toString = toString;
  //this.insert = insert;
  this.append = append;
  // this.remove = remove;
  // this.front = front;
  // this.end = end;
  // this.prev = prev;
  //this.next = next;
  //this.length = length;
  //this.currPos = currPos;
  //this.moveTo = moveTo;
  //this.getElement = getElement;
  //this.length = length;
  //this.contains = contains;
}

function append(element) {
  this.dataStore[this.listSize++] = element;
}

function find(element) {
  for (i = 0; i < this.listSize; i++) {
    if (this.dataStore[i] == element) {
      return element;
    }
  }
  return -1;
}

function remove(element) {
  let index = this.dataStore.indexOf(element);
  this.dataStore.splice(index, 1);
  this.length--;
}

function clear() {
  this.dataStore = [];
}
let data = new List();
data.append('asfa');
data.append('aafa');
data.append('uhfa');
data.append('jjfa');
data.append('v2fa');
data.append('5fa');
console.log(data.find('5fd'));
