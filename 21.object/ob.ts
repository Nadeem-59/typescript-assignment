//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

//let person_Name :string  = 'Maha';

//const personName_Array :string[] = ['Person','car','Cold Drink'];

//data type of person object
interface person {
    age:number,
    name:string,
    nationality:string
    student: Boolean

}
// person object
let Person :person = {

    age :28,
    name : 'Maha',
    nationality : 'pakistani',
    student : true

};
// print person
console.log(Person);


//data type of car object
interface car {
    maker : string,
    color : string,
    automatic : boolean

}
// car object
let car = {
    maker : 'toyota',
    color : 'black',
    automatic : true
}

//print car 
console.log(car);

