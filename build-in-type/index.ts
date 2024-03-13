let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;

userId = 1902001;
firstName = 'Farhan ';
lastName = 'Ahmed Emon';
fullName = firstName.concat(lastName);
isActivated = true;

console.log(`${fullName}, \nCapital: ${fullName.toUpperCase()}, \nsmall: ${fullName.toLowerCase()}`);

// example of void: (when a function doesn't return something, then we call it type void)

function display() {
    console.log("Hey! I'm not returning anything.")
}
display();