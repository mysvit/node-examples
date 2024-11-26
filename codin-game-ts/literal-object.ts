class User {

    _: string = '/user'

    constructor(parent: string) {
        this._ = parent + this._
    }

    get signup() {
        return this._ + '/signup'
    }
}

class Api {
    user = new User(this._)

    constructor(private _ = '/api') {
    }
}

const api = new Api()

console.debug(api.user.signup)

const start = new Date().getTime()
for (let i = 0; i < 10000000; i++) {
    const path = api.user.signup
}
const ended = new Date().getTime()
console.debug('time: ', ended - start)
