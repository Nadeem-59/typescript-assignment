//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// write the three version of this program,making sure each message is printed for the appropriate color alien.
var alienColors = "green";
//.Version 1 of the program.
//• If the alien is green, print a message that the player earned 5 points.
if (alienColors === "green") {
    console.log("player earned 5 points.");
}
else if (alienColors === "yellow") {
    console.log("player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("please select right color");
}
//.Version 2 of the program.
//• If the alien is yellow, print a message that the player earned 10 points.
alienColors = "yellow";
if (alienColors === "green") {
    console.log("player earned 10 points.");
}
else if (alienColors === "yellow") {
    console.log("player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("please select right color");
}
//.Version 3 of the program.
//• If the alien is red, print a message that the player earned 15 points.
alienColors = "red";
if (alienColors === "green") {
    console.log("player earned 10 points.");
}
else if (alienColors === "yellow") {
    console.log("player earned 10 points.");
}
else if (alienColors === "red") {
    console.log("player earned 15 points.");
}
else {
    console.log("please select right color");
}
