var User = /** @class */ (function () {
    // 2. constructors er maddhome initialize kora 
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    // 3. this.userName and this.age er value ke print korar jonne function ba methods bebohar korbo
    User.prototype.display = function () {
        console.log("userName: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
// class object toiri kora.
var user1 = new User("Farhan", 23);
user1.display();
var user2 = new User("Ahmed", 24);
user2.display();
