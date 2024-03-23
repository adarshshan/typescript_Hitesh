
function detectType(val: string | number) {
    if (typeof val === 'string') return val.toLowerCase();
    return val + 3;
}

// console.log(detectType('SHANU'));
// console.log(detectType(7));

function provideId(id: string | null) {
    if (!id) {
        console.log('please provide the id');
        return;
    }
    console.log(id.toLowerCase());
}

provideId('SHANUSHANU');