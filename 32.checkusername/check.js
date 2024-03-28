var current_users = ['MaHa', 'TuBa', 'Yusra', 'Maheen', 'HaReem'];
var new_users = ['MaHa', 'TaLha', 'Yahya', 'Maheen', 'HalEem'];
new_users.forEach(function (newUsername) {
    var lowerCase = newUsername.toLowerCase();
    if (current_users.map(function (c_user) { return c_user.toLowerCase(); }).includes(lowerCase)) {
        console.log("The username ".concat(newUsername, " is not available.Please write a different username"));
    }
    else {
        console.log("The username ".concat(newUsername, " is available."));
    }
});
