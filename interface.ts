interface User {
    readonly dbId: number,
    userId: number,
    email: string
    googleId?: string,
    startTrail(): string,
    getCoupon(couponName: string, value: number): number
}
interface User {//reopening interface
    gitHubId?: string
}

interface Admin extends User {
    role: 'admin' | 'ta' | 'learner'
}

const hitesh: Admin = {
    email: 'adarshshanu3@gmail.com',
    userId: 2323245,
    dbId: 23,
    role: "admin",
    gitHubId: 'shfsldf',
    startTrail: () => 'trial started',
    getCoupon: (name: 'shanu', off: 10) => {
        return 10
    }
}

console.log(hitesh.startTrail());


export { }