// given two integer arrays generate intersection array with includes all numbers
// presented in both array including duplicates if any

exports.interArray = () => {
    const a1 = [1, 2, 3, 4, 5, 1, 2, 3]
    const a2 = [1, 1, 2, 4, 4, 4, 5, 5, 5]
    const result = [1, 1, 2, 4, 5]

    const o1 = objFromArray(a1)
    const o2 = objFromArray(a2)
    let res = []

    for (let key in o1) {
        if (o2[key] !== undefined) {
            if (o1[key] <= o2[key]) {
                res = res.concat(Array(o1[key]).fill(parseInt(key)))
            } else {
                res = res.concat(Array(o2[key]).fill(parseInt(key)))
            }
        }
    }
    console.log(res)
}

objFromArray = (arr) => {
    const result = {}
    for (let i = 0; i < arr.length; i++) {
        if (result[arr[i]] === undefined) {
            result[arr[i]] = 1
        } else {
            result[arr[i]] = result[arr[i]] + 1
        }
    }
    return result
}
