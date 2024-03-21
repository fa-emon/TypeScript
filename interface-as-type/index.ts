//interface as type
interface IUser {
    id: number,
    name: string,
    age: number
}

let users: IUser[] = []

let user1: IUser = {
    id: 94083,
    name: "luca",
    age: 56
}

let user2: IUser = {
    id: 388348,
    name: "padre",
    age: 53
}

users.push(user1);
users.push(user2);

const printUserInfo = (user: IUser) => {
    console.log(`userId: ${user.id}, userName: ${user.name}, userAge: ${user.age}`)
}

users.forEach(user => printUserInfo(user));