// function signature(a function what parameter it receive's and what it return's)
var userInfo1;
var userInfo2;
var userInfo3;
userInfo1 = function () {
    console.log("farhan is 23 years old");
};
userInfo2 = function (studentId) {
    console.log("That's my studentId ".concat(studentId));
};
userInfo3 = function (address) {
    return "I lived in ".concat(address);
};
userInfo1();
userInfo2(1902001);
console.log(userInfo3("Gazipur"));
