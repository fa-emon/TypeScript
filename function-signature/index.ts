// function signature(a function what parameter it receive's and what it return's)

let userInfo1: () => void;
let userInfo2: (studentId: number) => void;
let userInfo3: (address: string) => string;

 userInfo1 = () => {
    console.log("farhan is 23 years old");
}

userInfo2 = (studentId: number) => {
    console.log(`That's my studentId ${studentId}`);
}

userInfo3 = (address: string) => {
    return `I lived in ${address}`;
}

userInfo1();
userInfo2(1902001);
console.log(userInfo3("Gazipur"))