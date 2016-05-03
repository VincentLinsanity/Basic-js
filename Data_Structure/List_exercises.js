'use strict';

// 1. Write a function that inserts an element into a list only if the element to be inserted
// is larger than any of the elements currently in the list. Larger can mean either greater
// than when working with numeric values, or further down in the alphabet, when
// working with textual values.

// implement ES5 version

function LargerList() {
  this.store = [];
  this.insert = insert;
  this.valid = valid;
  
  function insert(obj) {
    this.store.push(obj);
  }
  
  function valid(value) {
    for (var i in this.store) {
      if (value <= this.store[i]) {
        console.log(value + ' <= ' + this.store[i]);
        return false;
      }
    }
    console.log('add ' + value + ' to ' + this.store);
    return true; 
  }
}

function Test1() {
  var largerList = new LargerList();
  
  var count = 10;
  while(count > 0) {
    var randomValue = Math.random() * 10000;
    randomValue = Math.floor(randomValue);
    if (largerList.valid(randomValue))
    largerList.insert(randomValue);
    count--;
  }
  console.log(largerList);
}

//Test1();

// 2. Write a function that inserts an element into a list only if the element to be inserted
// is smaller than any of the elements currently in the list.

// implement ES6 version

class SmallerList {
  constructor() {
    this.store = [];
  }
  
  insert(value) {
    if (this.isSmallerThan(value)) {
      this.store.push(value);
    }
  }
  
  isSmallerThan(value) {
    for (var i in this.store) {
      if (value > this.store[i])
      return false;
    }
    return true;
  }
}

function test2() {
  let smallerList = new SmallerList();

  var count = 10;
  while(count > 0) {
    var randomValue = Math.random() * 10000;
    randomValue = Math.floor(randomValue);
    smallerList.insert(randomValue);
    count--;
  }
  
  console.log(smallerList);
}

test2();



// 3. Create a Person class that stores a person’s name and their gender. Create a list of
// at least 10 Person objects. Write a function that displays all the people in the list of
// the same gender.

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class GenderList {
  constructor(list) {
    this.store = list;
    this.tmpStore = [];
  }
  
  showTheSameGender(gender) {
    for (var i in this.store) {
      if (this.store[i].gender === gender) {
        this.tmpStore.push(this.store[i]);
      }
    }
    console.log(this.tmpStore);
    this.tmpStore = [];
  }
}

function initialTestData() {
  var store = [];
  store.push(new Person('alex', 'male'))
  store.push(new Person('ken', 'male'))
  store.push(new Person('alice', 'female'))
  store.push(new Person('joy', 'female'))
  store.push(new Person('vincent', 'male'))
  store.push(new Person('catherine', 'female'))
  store.push(new Person('anson', 'male'))
  store.push(new Person('anna', 'female'))
  store.push(new Person('curtis', 'male'))
  store.push(new Person('joe', 'male'))
  return store;
}

function test3() {
  var personList = initialTestData();
  console.log(personList);
  var genderList = new GenderList(personList);
  genderList.showTheSameGender('male');
  genderList.showTheSameGender('female');
}

test3();

