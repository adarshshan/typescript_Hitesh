function detectType(val) {
    if (typeof val === 'string')
        return val.toLowerCase();
    return val + 3;
}
// console.log(detectType('SHANU'));
// console.log(detectType(7));
//null
function provideId(id) {
    if (!id) {
        console.log('please provide the id');
        return;
    }
    console.log(id.toLowerCase());
}
// provideId('SHANUSHANU');
//typeof
function printAll(str) {
    if (str) {
        if (typeof str === 'string')
            console.log(str);
        else if (typeof str === 'object') {
            for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
                var s = str_1[_i];
                console.log(s);
            }
        }
    }
}
// printAll(null);
//Instanceof
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return 'fish food';
    }
    else {
        pet;
        return 'bird Food';
    }
}
function getTrueShape(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    return shape.side * shape.side;
}
console.log(getTrueShape({ kind: 'circle', radius: 3 }));
