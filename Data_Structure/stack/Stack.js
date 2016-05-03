'use strict';

class Stack {
  constructor() {
    this.dataStore = [];
    this.top = 0;
  }
  
  push(element) {
    this.dataStore[this.top] = element;
    this.top++;
  }
  
  peek() {
    return this.dataStore[this.top-1];
  }
  
  pop() {
    this.top--;
    return this.dataStore[this.top];
  }
  
  clear() {
    this.top = 0;
    this.dataStore = [];
  }
  
  length() {
    return this.top;
  }
}

module.exports = Stack;