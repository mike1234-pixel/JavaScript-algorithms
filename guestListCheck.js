// checks whether user is on the guest list.

var guestList = ["Angela", "Mike", "Jack", "John", "Stanley", "Louise", "Carol"];

var input = prompt("Enter your name to find out whether you are on the guestlist");

function checkList(name) {
    if (guestList.includes(name)) {
    alert("you ARE on the guestlist. Please enter.")
} else {
    alert("you are not on the guestlist. Kindly remove yourself from the premises")
}
}

checkList(input);
