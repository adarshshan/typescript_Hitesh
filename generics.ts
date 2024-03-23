const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val;
}

function identityFour<T>(val: T): T {
    return val;
}

interface Bottle {
    brand: string,
    type: number
}

// console.log(identityFour<Bottle>({ brand: 'nike', type: 1 }));

function getSearchProduct<T>(products: T[]): T {
    //do some database operations
    const myIndex = 3;
    return products[myIndex];
}

const getMoreProduct = <T>(products: T[]): T => {
    //do some data base operation
    const myIndex = 5;
    return products[myIndex];
}

interface DataBase {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends DataBase>(valOne: T, valTwo: U): any {
    return {
        valOne,
        valTwo
    }
}


interface Quiz {
    name: string,
    type: string
}
interface Cource {
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = [];

    addToCart(product: T) {
        this.cart.push(product);
    }
}