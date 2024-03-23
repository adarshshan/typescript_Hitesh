let score: number | string = 'shanu';
score = 10;
score = 'shanu';


type User = {
    name: string,
    id: number
}
type Admin = {
    username: string,
    id: number
}

let adarsh: User | Admin = {
    name: 'adarsh',
    id: 23
}
adarsh = { name: 'shanu', id: 8383 };


// function getDbId(id: string | number) {
//     console.log(`the id is ${id}`);
// }
getDbId(23)
getDbId('shanu')
function getDbId(id: string | number) {
    if (typeof id === 'string') console.log(id.toUpperCase())
    // console.log(id);
}

//array

let data: number[] = [3, 54, 67, 867, 2]
let detail: (string | number | true)[] = ['sh', 'an', 'u', 23, true]

let seatAllotment:'aisle'|'middle'|'window';
seatAllotment="middle"
