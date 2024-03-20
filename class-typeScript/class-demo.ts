class User{
    //propertise, methods/function, constructors
    // 1. propertise ke declare kora
    userName: string
    age: number

    // 2. constructors er maddhome initialize kora 
    constructor(userName:string, age:number){
        this.userName = userName
        this.age = age
    }

    // 3. this.userName and this.age er value ke print korar jonne function ba methods bebohar korbo
    display(): void{
        console.log(`userName: ${this.userName}, age: ${this.age}`);
    }
}

// class object toiri kora.
let user1 = new User("Farhan", 23);
    user1.display();
let user2 = new User("Ahmed", 24);
    user2.display();

