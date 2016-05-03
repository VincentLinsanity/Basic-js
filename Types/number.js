'use strict';

if (!Number.EPSILON) {
    Number.EPSILON = Math.pow(2, -52);
}

function compareNumber(n1, n2) {
    return Math.abs(n1 - n2) < Number.EPSILON;
}

var a = 0.1 + 0.2;
var b = 0.3;

compareNumber(a, b); // true
a === b // false

if (!Number.isInteger) {
    Number.isInteger = function(num) {
        return typeof num == "number" && num % 1 == 0;
    }
}