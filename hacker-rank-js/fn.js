const asyncCatch = (fn) =>
    async (req, res) => {
        try {
            await fn(req, res)
                .then(data => console.debug(data))
                .catch((error) => console.debug('==PROM ERROR==', error))
        } catch (error) {
            console.debug('==ERROR==', error)
        }
    }

const getUsers = asyncCatch(async (req, res) => {
    const a = undefined
    console.debug('=>', req, res, a.aa)
    return Promise.all([1, 2, 3])
})

getUsers('req1', 'res1').finally(() => console.debug('DONE'))

//
// function fnCatch(fn) {
//     return function (req, res) {
//         try {
//             fn(req, res)
//         } catch (error) {
//             console.debug('==ERROR==', error)
//         }
//     }
// }
//
// const fnGetUsers = fnCatch(function (req, res) {
//     // const a = undefined
//     console.debug('func', req, res)
// })
//
// fnGetUsers('req1', 'res1')