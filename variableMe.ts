let greeting: string = 'Adarsh';
greeting.toLowerCase()
console.log(greeting);

//number
let userId: number = 343455.3323

console.log(userId.toFixed(2))
userId = 'shanu'

//boolean

let isLoggedIn: boolean = true;

//any

let hero;

function getHero() {
    return 'hello';
}

hero = getHero();


function addTwo(num: number) {
    return num + 2;
}
let num: number = addTwo(8);
console.log(num);


export {}