













let current_users:string[] = ['MaHa','TuBa','Yusra','Maheen','HaReem'];

let new_users:string[] = ['MaHa','TaLha','Yahya','Maheen','HalEem'];

new_users.forEach(newUsername => {
    let lowerCase: string = newUsername.toLowerCase();

    if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
        console.log(`The username ${newUsername} is not available.Please write a different username`);
    }
    else{
        console.log(`The username ${newUsername} is available.`);
    }
})





