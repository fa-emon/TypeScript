type User = {userName: string, userId: number}

let users: User[];
users = [];

let user1: User;
let user2: User;
let user3: User;

user1 = {userName: 'farhan', userId: 1902001}
user2 = {userName: 'ahmed', userId: 1902000}
user3 = {userName: 'emon', userId: 1902008}

users.push(user1);
users.push(user2);
users.push(user3);

// console.log(users);

type RequestType = "GET" | "POST";
let getRequest : RequestType;
getRequest = "GET"

function requestHandler(requestType: RequestType){
    console.log(requestType);
}
requestHandler("GET");