"use strict";
const greet = (firstName) => {
    console.log('hello ' + firstName);
};
greet("parijat");
let sum = (a, b) => {
    return a + b;
};
const value = sum(3, 5);
console.log(value);
function runAfter1s(hehe) {
    setTimeout(hehe, 1000);
}
runAfter1s(function () {
    console.log("hello");
});
