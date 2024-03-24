


function detectType(val: string | number) {
    if (typeof val === 'string') return val.toLowerCase();
    return val + 3;
}
// console.log(detectType('SHANU'));
// console.log(detectType(7));


//null
function provideId(id: string | null) {
    if (!id) {
        console.log('please provide the id');
        return;
    }
    console.log(id.toLowerCase());
}
// provideId('SHANUSHANU');


//typeof
function printAll(str: string | string[] | null) {
    if (str) {
        if (typeof str === 'string') console.log(str);
        else if (typeof str === 'object') {
            for (let s of str) {
                console.log(s);
            }
        }
    }
}
// printAll(null);


//Instanceof
function logValue(x: string | Date) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}
// logValue(new Date());
// logValue('shanu');



//predicates

type Fish = { swim: () => void }
type Bird = { fly: () => void }

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}
function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return 'fish food';
    } else {
        pet
        return 'bird Food';
    }
}


interface Circle {
    kind: 'circle',
    radius: number
}
interface Square {
    kind: 'square',
    side: number
}
interface Rectangle {
    kind: 'rectangle',
    length: number,
    width: number
}
type Shape = Circle | Square | Rectangle;


function getTrueShape(shape: Shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    if (shape.kind === 'rectangle') {
        return shape.length * shape.width;
    }
    return shape.side * shape.side;
}
// console.log(getTrueShape({ kind: 'circle', radius: 3 }));




function getArea(shape: Shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.side * shape.side;
        case 'rectangle':
            return shape.length * shape.width;
        default:
            const _defaultforshape: never = shape
            return _defaultforshape;
    }
}
// console.log(getArea({ kind: 'circle', radius: 5 }));






export { }




