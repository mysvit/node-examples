// #array #find
exports.iceCreamParlor = (m, arr) => {
    let first = 0
    let second = 0
    for (first = 0; first < arr.length; first++) {
        second = arr.findIndex((f, i) => i > first && f === m - arr[first])
        if (second > 0) {
            break
        }
    }
    return [first + 1, second + 1]
}

// #array
plusMinus = (arr) => {
    console.log(arr.filter(f => f > 0).length / arr.length)
    console.log(arr.filter(f => f < 0).length / arr.length)
    console.log(arr.filter(f => f === 0).length / arr.length)
}
// plusMinus([-4, 3, -9, 0, 4, 1])
// plusMinus([1, 2, 3, -1, -2, -3, 0, 0])


// #loop #array #filter
countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    apples.forEach((item, i) => apples[i] += a)
    oranges.forEach((item, i) => oranges[i] += b)
    const arr = []
    arr.push(apples.filter(f => f >= s && f <= t).length)
    arr.push(oranges.filter(f => f >= s && f <= t).length)
    return arr
}
// const arr = countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])
// console.log(arr, arr[0] === 1, arr[1] === 1)

// #loop #reverse
function reverseString(str) {
    try {
        str = str.split('')
    } catch (e) {
        console.log('s.split is not a function')
        return str
    }
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        const tmp = str[i]
        str[i] = str[j]
        str[j] = tmp
        i++
        j--
    }
    return str.join('')
}
// console.log(reverseString('abcdefg'))
// console.log(reverseString(Number(1234)))


//#array #math #max
function getSecondLargest(nums) {
    let max = 0
    let min = 0
    nums.forEach(n => {
        if (max < n) {
            min = max
            max = n
        }
        if (n < max && min < n) {
            min = n
        }
    })
    return min
}

// console.log(getSecondLargest([2, 3, 6, 6, 5]))
// console.log(getSecondLargest([2,3]))
// console.log(getSecondLargest([2, 2, 0]))


// #array #sort #sum
miniMaxSum = (arr) => {
    const res = []
    arr.sort((a, b) => {
        return a - b
    })
    // min
    res.push(arr.slice(0, 4).reduce((a, b) => {
        return a + b
    }, 0))
    // max
    res.push(arr.slice(-4).reduce((a, b) => {
        return a + b
    }, 0))
    return res
}
// console.log('miniMaxSum', miniMaxSum([1, 2, 3, 4, 5]))


// #loop #array #math
diagonalDifference = (arr) => {
    let jl = 0
    let jr = arr[0].length - 1
    let l = 0
    let r = 0
    for (let i = 0; i < arr.length; i++) {
        l += arr[i][jl]
        r += arr[i][jr]
        jl++
        jr--
    }
    return Math.abs(l - r)
}
// console.log('diagonalDifference', diagonalDifference([[1, 2, 15], [4, 5, 6], [7, 8, 9]]))


// #array #sort #filter
birthdayCakeCandles = (candles) => {
    candles.sort((a, b) => a - b)
    return candles.filter(f => f === candles[candles.length - 1]).length
}
// console.log(birthdayCakeCandles([3, 2, 1, 3]))
