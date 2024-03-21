var users = [];
var user1 = {
    id: 94083,
    name: "luca",
    age: 56
};
var user2 = {
    id: 388348,
    name: "padre",
    age: 53
};
users.push(user1);
users.push(user2);
var printUserInfo = function (user) {
    console.log("userId: ".concat(user.id, ", userName: ").concat(user.name, ", userAge: ").concat(user.age));
};
users.forEach(function (user) { return printUserInfo(user); });
