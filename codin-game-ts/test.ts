class Catch {
    constructor(public req, public res) {
    }

    try(fn) {
        try {
            fn()
        } catch (error) {
            console.debug('==ERROR==', error)
        }

    }
}

class GetUsers extends Catch {

    try() {
        super.try(() => {
            const a = undefined
            console.debug('class', this.req, this.res, a.ddd)
        })
    }
}

new GetUsers('11', '222').try()
