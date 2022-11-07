const asyncCatch = (fn) =>
    async (req, res) => {
        try {
            await fn(req, res)
                .then(data => console.debug(data))
                .catch((error) => console.debug('==PROM ERROR==', error))
        } catch (error) {
            console.debug('==CATCH ERROR==', error)
        }
    }

const getUsers = asyncCatch(async (req, res) => {
    const a = undefined
    console.debug('=>', req, res, a.aa)
    return Promise.all([1, 2, 3])
})

// getUsers('req1', 'res1').finally(() => console.debug('DONE'))

function fnCatch(fn) {
    return function (conn) {
        try {
            fn(conn)
        } catch (error) {
            console.debug('==ERROR fnCatch==', error)
        }
    }
}

// const fnDbUsers = fnCatch(function (conn) {
//     const a = {}
//     const b = a.b.c
//     console.debug('func Conn do something', conn)
// })
//
// fnDbUsers('conn')

const conn = 'COOONNN'
fnCatch((conn) => {
    const a = {}
    const b = a.b.c
    console.debug('func Conn do something', conn)
})
