let userId: (string | number | boolean)

userId = '10'
userId = 10
userId = true

function displayInfo(userId: string | number){
    console.log(userId);
}
displayInfo(101)
displayInfo('1010')
