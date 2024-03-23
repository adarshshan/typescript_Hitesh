// class User {
//     public email: string
//     private name: string
//     readonly city: string = 'jaipur'
//     constructor(name: string, email: string) {
//         this.name = name
//         this.email = email
//     }
// }
class User {
    readonly city: string = 'jaipur'
    protected _courceCount = 1;
    constructor(
        public name: string,
        public email: string,
        private userId: string
    ) { }

    private deleteToken() {
        console.log(`token deleted`);
    }

    get getAppleEmail(): string {
        return `apple${this.email}`;
    }

    get courceCount(): number {
        return this._courceCount;
    }

    set courceCount(courceNum) {
        if (courceNum <= 1) throw new Error('Cource number should be more than 1');
        this._courceCount = courceNum;
    }
}
class SubUser extends User {
    isFamily: boolean = true;
    changeCourceCount() {
        this._courceCount = 4;
    }
}

const adarsh = new User('adarsh', 'adarshshanu3@gmail.com', 'shanu1234@#sha');

// adarsh.name = 'shanu';
console.log(adarsh.name);


export { }