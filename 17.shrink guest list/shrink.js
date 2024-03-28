//ques 17:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var Guest_List = ['Imran khan', 'Hamid Raza', 'Ali Haider'];
// for(let i=0; i<Guest_List.length; i++){
//console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
// }
var absent_guest = 'Imran khan';
var new_guest = 'Kamran Tessori';
Guest_List[0] = new_guest;
// for(let i=0; i<Guest_List.length; i++){
//console.log('Dear Mr. ' +Guest_List[i] + ',\n\nIt is our pleasure tO invite you in our party.\n\nThank You!\n\n')
// }
console.log('Mr.${absent_guest} is not coming to the party.');
console.log('Good News!We find big table soo we are inviting  3 more Guests.');
Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2, 0, 'Sir Daniyal Nagori');
Guest_List.push('Khalid Maqbool');
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure tO invite you in our party.\n\nThank You!\n\n');
}
console.log('\nSorry we can not arrange big table,Only two persons will be invited.');
while (Guest_List.length > 2) {
    var remove_Guest = Guest_List.pop();
    console.log('Sorry Mr. ${remove_Guest},You are not invited for Dinner.');
}
for (var i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n');
}
Guest_List.splice(0, 2);
console.log(Guest_List);
