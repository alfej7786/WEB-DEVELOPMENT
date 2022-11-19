var guestList = ["Alfej", "Amir", "Arbaz", "Mohit", "Darein"];
// console.log(guestList);
// guestList[0];
// console.log(guestList[0]);
var guestName = prompt("What is your name");
if (guestList.includes(guestName)) {
    alert("Welcome")
}
else{
    alert ("Next time!")
}
