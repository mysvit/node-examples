'use strict'

// #array #sum
exports.aVeryBigSum = (ar) => {
    return ar.reduce((a, b) => {
        return a + b
    }, 0)
}

// #loop #array #math
exports.diagonalDifference = (arr) => {
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

// #array #sort #sum
exports.miniMaxSum = (arr) => {
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

exports.changeMoney = (cash) => {
    let two = 0;
    let five = 0;
    let ten = Math.floor(cash / 10);
    if (cash === 1) {
        return null
    }
    // ten
    if (cash % 10 === 0 || (cash % 10 > 0 && (cash % 10 % 5 === 0 || cash % 10 % 2 === 0))) {
        cash = cash - ten * 10
    } else {
        ten = ten - 1
        if ((cash % ten * 10) % 5 === 0 || (cash % ten * 10) % 2 === 0) {
            cash = cash - ten * 10
        } else {
            ten = 0
        }
    }
    // five
    if (cash !== 0) {
        five = Math.floor(cash / 5);
        if (cash % 5 === 0 || (cash % 5 > 0 && cash % 5 % 2 === 0)) {
            cash = cash - five * 5
            two = Math.floor(cash / 2)
        } else {
            five = five - 1
        }
    }
    // two
    if (cash !== 0) {
        if ((cash - five * 5) % 2 === 0) {
            cash = cash - five * 5
        } else {
            five = 0
        }
        two = Math.floor(cash / 2)
    }
    return {
        two: two,
        five: five,
        ten: ten
    }
}

// #array
exports.plusMinus = (arr) => {
    console.log(arr.filter(f => f > 0).length / arr.length)
    console.log(arr.filter(f => f < 0).length / arr.length)
    console.log(arr.filter(f => f === 0).length / arr.length)
}

// #string repeat
exports.staircase = (n) => {
    for (let i = 1; i < n; i++) {
        console.log(' '.repeat(n - i - 1), '#'.repeat(i))
    }
    console.log('#'.repeat(n))
}

// #array #sort #filter
exports.birthdayCakeCandles = (candles) => {
    candles.sort((a, b) => a - b)
    return candles.filter(f => f === candles[candles.length - 1]).length
}

// #time #conversion
exports.timeConversion = (s) => {
    let timeStr
    if (s.indexOf('PM') >= 0) {
        timeStr = s.replace('PM', '').split(':')
        if (parseInt(timeStr[0]) !== 12) {
            timeStr[0] = (parseInt(timeStr[0]) + 12).toString()
        }
    } else {
        timeStr = s.replace('AM', '').split(':')
        if (parseInt(timeStr[0]) === 12) {
            timeStr[0] = '00'
        }
    }
    return timeStr.join(':')
}

exports.factorial = (n) => {
    let f = 1
    for (let i = 1; i <= n; i++) {
        f = f * i
    }
    return f
}

exports.PI = (r) => {
    r = parseFloat(r)
    // Print the area of the circle:
    // Print the perimeter of the circle:
    return [Math.PI * r * r, 2 * Math.PI * r]

}

exports.floatToLog = () => {
    const d = 4.0
    return (d).toFixed(1)
}


