//More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//.Test 1 for equality  with strings 
console.log("Equality test with strings: ", "Apple" === "Apple");
//.Test 2 for Inequality with strings 
console.log("Inequality test with strings: ", "Apple" != "Orange");
//• Test 3 using the lower case function
console.log("lower Case function test: ", "HELLO".toLowerCase() === "hello");
//• Test 4 Numerical tests involving equality 
console.log("Equality test with numbers: ", 26 === 26);
//.Test 5 Numerical tests involving Inequality
console.log("Inequality test with numbers: ", 26 != 35);
// .Test 6 Greater than
console.log("Greater than test: ", 10 > 5);
// .Test 7 less than
console.log("less than test: ", 5 < 10);
//.Test 8  greater than or equal to 
console.log("Greater than and equal t test: ", 10 >= 10);
//.Test 9  less than or equal to
console.log("less than or equal to test:", 5 <= 10);
//• Tests 10 using "and" operator
console.log("And operator test: ", 5 === 5 && 10 > 5);
//.Test 11 using "or" operator
console.log("or operator test: ", 5 === 5 || false);
//.Test 12 Whether an item is in a array
var fruits = ['peach', 'cherry', 'banana'];
console.log('Test "peach" in the array: ', fruits.includes("peach"));
//.Test 13 Whether an item is not in a array 
console.log('Testing "banana" is not in array:', !fruits.includes('cherry'));
