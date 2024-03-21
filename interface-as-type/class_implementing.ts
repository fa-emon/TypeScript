//ekta interface toiri korlam,ebong er moddhe ekta function signature diye dilam. nijeder moto ekta interface toiri koralam arki. 

interface IUser{
    formateUser: () => string;
}

class User implements IUser{
    constructor(private fullName: string, private age: number){}

    formateUser = () => {
        return `name: ${this.fullName}, age: ${this.age}`
    };
}

let user = new User('forguson', 28);
console.log(user.formateUser());