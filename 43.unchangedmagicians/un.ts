//Ques no 43: Unchanged Magicians: Start with your work from Exercise 40.
 //Call the function make_great() with a copy of the array of magicians’ names.
//Because the original array will be unchanged, return the new array .
//store it in a separate array.Call show_magicians() with each array to show 
//that you have one array of the original names and one array with the Great 
//added to each magician’s name.

let magician : string[] = ['Harry potter','Roman','Ronaldo','Messi'];

function copyArray (arr:string[]){
    return [...arr]
}

function make_great (magicianArray:string[]){

   for(let i=0; i<magicianArray.length;i++){
       
       magician[i]   = ' the Great ' + magicianArray[i]
   }

}

function show_magicians(magician: string[]){

   magician.forEach(element => {
       console.log(element);
   });
}

 const copyMagicianArray =copyArray(magician)

make_great(copyMagicianArray);

console.log(`this is my original array:`);
show_magicians(magician);

console.log(`this is my modified copy of the array:`);
show_magicians(copyMagicianArray);
