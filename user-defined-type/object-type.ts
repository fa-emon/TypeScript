// let user1: {userName: string , userId: number}
// user1 = {userName: 'farhan', userId: 1902001}
// console.log(user1);

// let user1: object;
// user1 = {userName: 'farhan', userId: 1902001}
// console.log(user1);

let users: object[];
users = [];
let user1: {userName: string, userId: number}
let user2: {userName: string, userId: number}
user1 = {userName: 'farhan', userId: 1902001}
user2 = {userName: 'ahmed', userId: 1902000}
users.push(user1);
users.push(user2);
console.log(users);