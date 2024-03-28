 //ques:3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

 // lower case
 let personName: string ="miss  Maha"
 console.log(personName.toLowerCase());

 //upper case
  console.log(personName.toUpperCase());

 //Title case
 console.log(personName.charAt(0).toUpperCase()+personName.slice(8));