// Ques 16:Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing
// people that you found a bigger dinner table.

//• Add o//ques:16 More Guests: You just found a bigger dinner table, so now more space is available.
// ne new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
 //• Print a new set of invitation messages, one for each person in your list.


    //Arrays method can be used in this project and these methods are : (UNSHIFT,SPLICES,PUSH)

let Guest_List : string[] = ['Imran khan','Hamid Raza','Ali Haider' ];

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')


}
//• Add one new guest to the beginning of your array.

let absent_guest : string = 'Imran khan' ;

let new_guest : string = 'Kamran Tessori';

Guest_List[0] = new_guest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' +Guest_List[i] + ',\n\nIt is our pleasure tO invite you in our party.\n\nThank You!\n\n')
}

console.log( 'Mr.${absent_guest} is not coming to the party.');

console.log('Good News!We find big table soo we are inviting  3 more Guests.' )

Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2 ,0 , 'Sir Daniyal Nagori');
Guest_List.push('Khalid Maqbool');

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' +Guest_List[i] + ',\n\nIt is our pleasure tO invite you in our party.\n\nThank You!\n\n')

}