// 1. Create a grades object that stores a set of student grades in an object. Provide a
// function for adding a grade and a function for displaying the student’s grade average.

function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}

function Grade() {
  this.studentData = [];
  this.add = function (student) {
    this.studentData.push(student);
  }
  this.getAverage = function () {
    var average = 0;
    for (var i = 0; i < this.studentData.length; i++) {
      average += this.studentData[i].grade;
    }
    average = average / this.studentData.length;
    return average;
  }
  this.show = function () {
    console.log(this.studentData);
  }
  this.showAverage = function () {
    console.log("Average of grade: " + this.getAverage());
  }
}

var grades = new Grade();

var student1 = new Student('Vincent', 101);
var student2 = new Student('Catherine', 100);

grades.add(student1);
grades.add(student2);
grades.show();
grades.showAverage();


// 2. Store a set of words in an array and display the contents both forward and backward.

var words = [];

words.push('I love you');
words.push('Thank you');

console.log(words);
console.log(words.reverse());

// 3. Pracetice two-dimensional array

function MouthTemps() {
  this.dataStore = [];
  this.add = add;
  this.average = average;

  function add(mouthData) {
    this.dataStore.push(mouthData);
  }

  function average() {
    var total = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
      total += this.dataStore[i][1];
    }
    return total / this.dataStore.length;
  }
}

var mouthTemps = new MouthTemps();

var mouth = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12
}

function testQuestion3() {
  for (var i in mouth) {
    console.log("add " + i + ":" + mouth[i] + " to Array");
    var tmpMouthData = [i, mouth[i]];
    mouthTemps.add(tmpMouthData);
  }

  console.log(mouthTemps);
  console.log("Average value: " + mouthTemps.average());
}

testQuestion3();

// 4. Create an object that stores individual letters in an array and has a function for
// displaying the letters as a single word.

function Letters() {
  this.dataStore = [];
  this.add = add;
  this.display = display;
  
  function add(letterData) {
    this.dataStore.push(letterData);
  }
  function display() {
    var word = "";
    for (var i in this.dataStore) {
      word += this.dataStore[i];
    }
    
    console.log(this.dataStore);
    console.log(word);
  }
}

function testQuestion4() {
  var letters = new Letters();
  letters.add("J");
  letters.add("A");
  letters.add("V");
  letters.add("A");
  
  letters.display();
}

testQuestion4();