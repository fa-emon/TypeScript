var users;
users = [];
var user1;
var user2;
var user3;
user1 = { userName: 'farhan', userId: 1902001 };
user2 = { userName: 'ahmed', userId: 1902000 };
user3 = { userName: 'emon', userId: 1902008 };
users.push(user1);
users.push(user2);
users.push(user3);
var getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
