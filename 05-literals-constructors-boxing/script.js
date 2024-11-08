const strLit = 'Hello';
const strObj = new String('Hello');

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

// Boxing
console.log(strLit.toUpperCase());
console.log(strLit[3]);

// Unboxing
console.log(strObj.valueOf(), typeof strObj.valueOf());

console.log(strLit.constructor);
console.log(strObj.constructor);

// The instanceof operator returns true if an object is an instance of a constructor. It returns false if it is a literal.
console.log(strLit instanceof String);
console.log(strObj instanceof String);

// Other types
const numLit = 28;
const numObj = new Number(20);

console.log(numLit, typeof numLit);
console.log(numObj, typeof numObj);

const boolLit = true;
const boolObj = new Boolean(true);

console.log(boolLit, typeof boolLit);
console.log(boolObj, typeof boolObj);

const arrLit = [5, 4, 3, 2, 1];
const arrObj = new Array(5, 4, 3, 2, 1);

console.log(arrLit, typeof arrLit);
console.log(arrObj, typeof arrObj);

const funcLit = function (x) {
  return x * x;
};

console.log(funcLit, typeof funcLit);

console.log(funcLit(5));

const funcObj = new Function('x', 'return x * x');

// We can execute the function created with the Function constructor
console.log(funcObj(3));

const obj1 = {};
// Behind the scenes, JS does this for the previous line as well
const obj2 = new Object();

console.log(obj1, typeof obj1);
console.log(obj2, typeof obj2);
