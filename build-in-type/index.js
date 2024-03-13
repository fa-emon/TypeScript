var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 1902001;
firstName = 'Farhan ';
lastName = 'Ahmed Emon';
fullName = firstName.concat(lastName);
isActivated = true;
console.log("".concat(fullName, ", \nCapital: ").concat(fullName.toUpperCase(), ", \nsmall: ").concat(fullName.toLowerCase()));
// example of void: (when a function doesn't return something, then we call it type void)
function display() {
    console.log("Hi, I'm not returning anything.");
}
display();
