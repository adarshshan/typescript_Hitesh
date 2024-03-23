var score = 'shanu';
score = 10;
score = 'shanu';
var adarsh = {
    name: 'adarsh',
    id: 23
};
adarsh = { name: 'shanu', id: 8383 };
// function getDbId(id: string | number) {
//     console.log(`the id is ${id}`);
// }
getDbId(23);
getDbId('shanu');
function getDbId(id) {
    if (typeof id === 'string')
        console.log(id.toUpperCase());
    console.log(id);
}
