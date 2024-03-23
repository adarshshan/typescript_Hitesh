
function createUser({ name: string, isPaid: boolean = false }) { }
createUser({ name: 'shanu', isPaid: true });


function createCource(): { name: string, price: number } {
    return { name: 'react', price: 333 }
}

type user = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    creditCard?: number
}


let myUser: user = {
    _id: '3434',
    email: 'adarshshanu3@gmail.com',
    name: 'Adarsh C',
    isActive: false
}
myUser.email = 'shanu@gmail.com';
// myUser._id = '83838';



type cardNumber = {
    cardNumber: number
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}





export { }