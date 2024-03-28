//Ques no 37:Large Shirts: Modify the make_shirt() function.
//so that shirts are large by default with a message that reads I love TypeScript. 
//Make a large shirt and a medium shirt with the default message,

function make_shirt(size:string = 'large',text:string = `I love Typescript.`){

    console.log (`creating a ${size} shirt with the messsage: ${text}`);
}

make_shirt();

make_shirt('meduim');

//A shirt of any size with a different message.
make_shirt('small', 'Ilove python');