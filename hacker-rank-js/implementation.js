// #loop #array #filter
exports.countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    apples.forEach((item, i) => apples[i] += a)
    oranges.forEach((item, i) => oranges[i] += b)
    const arr = []
    arr.push(apples.filter(f => f >= s && f <= t).length)
    arr.push(oranges.filter(f => f >= s && f <= t).length)
    return arr
}
