"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// class User {
//     public email: string
//     private name: string
//     readonly city: string = 'jaipur'
//     constructor(name: string, email: string) {
//         this.name = name
//         this.email = email
//     }
// }
var User = /** @class */ (function () {
    function User(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
        this.city = 'jaipur';
    }
    return User;
}());
var adarsh = new User('adarsh', 'adarshshanu3@gmail.com', 'shanu1234@#sha');
// adarsh.name = 'shanu';
console.log(adarsh.name);
