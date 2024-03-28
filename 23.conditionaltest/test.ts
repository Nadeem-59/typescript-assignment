//ques 23:Conditional Tests: Write a series of conditional tests.
 //Print a statement describing each test and your prediction for the results of each test.
 // Your code should look something like this:
// = hum kisi value k set kr rahe hain.
//console.log(car == 'subaaru')
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.
//• Create at least 10 tests. Have at least 5 tests evaluate toTrue and another 5 tests evalute to False.


// == hum kisi value ko check kr rahe hain.

// === hum kisi value  ko uskay data type kay sath check kr rahe hain.

//  != not equal means

//creating car age and fruit  variables
let car : string = 'subaru';
let age :number = 25;
let fruit : string = 'apple';

//Test no:1
console.log("Is car === 'subaru'? I predict True.");
console.log(car ==='subaru');

//Test no:2
console.log("Is age >20 == ? I predict True.");
console.log(age>20);

//Test no:3
console.log("Is fruit !='Honda'? I predict false.");
console.log(fruit !='Honda');

//Test no:4
console.log("Is fruit !=== apple'? I predict True.");
console.log(fruit !=='apple');

//Test no:5
console.log("Is car.Upper case == 'SUBARU'? I predict true.");
console.log(car.toUpperCase() == 'SUBARU');




//Test no:6
console.log("Is car.Lower case == 'SUBARU'? I predict false.");
console.log(car.toLowerCase() == 'sUBARU');

//Test no:7
console.log("Is car === Ford'? I predict False.");
console.log(car === 'Ford');

//Test no:8
console.log("Is car ==='Train'?I predict false.");
console.log(car === 'Train');

//Test no:9
console.log("Is car ==='Bus'?I predict false.");
console.log(car === 'Bus');

//Test no:10
console.log("Is car ==='Cycle'?I predict false.");
console.log(car === 'Cycle');











