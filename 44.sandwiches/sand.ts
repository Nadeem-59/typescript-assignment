//Ques no 44:Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//The function should have one parameter that collects as many items as the function call provides,
//and it should print a summary of the sandwich that is being ordered.
//Call the function three times, using a different number of arguments each time.

function makeSandwich (items: string[]) {
    console.log(`\nMaking your sandwich with:`);

    items.forEach(element => console.log("- " + element));

    console.log(`Enjoy your sandwich !\n`);
}
  
makeSandwich(['Ham','Cheese','Lettuce']);

makeSandwich(['Turkey','Bacon']);

makeSandwich(['peanutbutter','jelly']);
