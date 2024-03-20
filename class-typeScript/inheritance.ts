class User{
    userName: string
    age: number

    constructor(userName:string, age:number){
        this.userName = userName
        this.age = age
    }

    display(): void{
        console.log(`userName: ${this.userName}, age: ${this.age}`);
    }
}

class Student extends User{
    studentId: number;

    constructor(userName: string, age: number, studentId: number){
        super(userName, age);
        this.studentId = studentId;
    }

    display(): void {
        console.log(`userName: ${this.userName}, age: ${this.age}, studentId: ${this.studentId}`)
    }
}

let student1 = new Student("coco", 23, 857494);
    student1.display();

// let user1 = new User("Farhan", 23);
//     user1.display();


