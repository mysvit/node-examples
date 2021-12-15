// #loop #array #filter
countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    apples.forEach((item, i) => apples[i] += a)
    oranges.forEach((item, i) => oranges[i] += b)
    const arr = []
    arr.push(apples.filter(f => f >= s && f <= t).length)
    arr.push(oranges.filter(f => f >= s && f <= t).length)
    return arr
}
const arr = countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])
console.log(arr, arr[0] === 1, arr[1] === 1)


// #throw
function isPositive(a) {
    if (a === 0) {
        throw {message: 'Zero Error'}
    }
    if (a < 0) {
        throw {message: 'Negative Error'}
    }
    return 'YES'
}

// try {
//     console.log(isPositive(0));
// } catch (e) {
//     console.log(e.message);
// }