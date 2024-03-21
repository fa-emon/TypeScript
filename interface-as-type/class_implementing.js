//ekta interface toiri korlam,ebong er moddhe ekta function signature diye dilam. nijeder moto ekta interface toiri koralam arki. 
var User = /** @class */ (function () {
    function User(fullName, age) {
        var _this = this;
        this.fullName = fullName;
        this.age = age;
        this.formateUser = function () {
            return "name: ".concat(_this.fullName, ", age: ").concat(_this.age);
        };
    }
    return User;
}());
var user = new User('forguson', 28);
console.log(user.formateUser());
