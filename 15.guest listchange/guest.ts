//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. 
//Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Print a second set of invitation messages, one for each person who is still in your list.

let Guest_List : string[] = [ 'Imran khan','Hamid Raza','Ali Haider' ];

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')


}

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

let not_present : string = 'Imran khan' ;
let new_guest : string = 'Kamran Tessori';

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' +Guest_List[i] + ',\n\nIt is our pleasure tO invite you in our party.\n\nThank You!\n\n')

}

console.log('Mr. ${not_present} is not coming to the party.')