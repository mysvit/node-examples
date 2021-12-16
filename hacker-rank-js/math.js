// #math #div #loop
function divisionPossibility(n) {
    for (let i = 1; i <= n; i++) {
        let res = ''
        for (let j = 1; j <= n; j++) {
            if (!(i % j)) {
                res += ' ' + j.toString()
            }
        }
        console.log(res.trim())
    }
}
// divisionPossibility(6)


// #math #int to float #float
function weightedMean(X, W) {
    let ss = 0.0
    let sw = 0.0
    for (let i = 0; i < X.length; i++) {
        ss += X[i] * W[i]
        sw += W[i]
    }
    return (ss / sw).toFixed(1)
}

// const w = weightedMean([10, 40, 30, 50, 20], [1, 2, 3, 4, 5])
// console.log('weightedMean', w, w === 32.0)

// #mean #media #mode
function meanMediaMode(input) {
    // mean
    let mean = input.reduce((p, v) => p + v) / input.length
    // median
    input.sort((p, v) => p - v)
    let x1 = input.length / 2 - 1
    let x2 = input.length / 2
    let median = (input[x1] + input[x2]) / 2
    // mode
    let mode = []
    input.forEach(item => {
            if (mode[item] === undefined) {
                mode[item] = 1
            } else {
                mode[item] = mode[item] + 1
            }
        }
    )
    let minNum = mode.length
    let maxCnt = 0
    mode.forEach((v, i) => {
        minNum = maxCnt === v && i < minNum ? i : minNum
        if (maxCnt < v) {
            // biggest 1st
            maxCnt = v
            // smallest 2nd
            minNum = i
        }
    })
    return {
        mean: mean,
        median: median,
        mode: minNum
    }
}

// const mmm = meanMediaMode([64630, 11735, 14216, 99233, 14470, 4978, 73429, 38120, 51135, 67060])
// console.log('mean', mmm.mean, mmm.mean === 43900.6, '', mmm.median, mmm.median === 44627.5, '', mmm.mode, mmm.mode === 4978)

// #math #min #abs #if #loop
function closestToZero(numbers) {
    let min = 2147483647
    if (numbers === null || numbers.length === 0) {
        return 0
    }
    numbers.forEach(n => {
        if (min > Math.abs(n)) {
            min = Math.abs(n)
        }
    })
    return min
}

// console.log(closestToZero([null, 1]))

// #math #min #if #loop
function arrayMin(arr) {
    return arr.reduce(function (p, v) {
        return (p < v ? p : v);
    });
}

// #math #max #if #loop
function arrayMax(arr) {
    return arr.reduce(function (p, v) {
        return (p > v ? p : v);
    });
}

// console.log(arrayMin([,1,5,34,677,34,2,12]))

// #math #mod #if #loop
function sumOfEventOdd(n) {
    let odd = 0
    let even = 0
    while (n > 0) {
        if (n % 2) {
            odd += n
        } else {
            even += n
        }
        n--
    }
    return {odd: odd, even: even}
}

const s = sumOfEventOdd(16)
// console.log(s, s.odd === 64, s.even === 72 )

//#math #mod #if
function powerOfTwo(N) {
    let cnt = 0
    while (N > 1) {
        N = N % 2 ? 3 * N + 1 : N / 2
        cnt++
    }
    return cnt
}

// console.log(powerOfTwo(16), powerOfTwo(16) === 4 )


//#math #gcd greatest common divisor
function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

// console.log(75 / gcd(75, 100), 100 / gcd(75, 100))

//#math #div #trunc
function gradingStudents(grades) {
    const res = []
    grades.forEach(n => {
        const f = (Math.trunc(n / 10) * 10 + 5)
        const d = (Math.trunc(n / 10) * 10 + 10)
        if (n < 38) {
            res.push(n)
        } else if (f - n > 0 && f - n < 3) {
            res.push(f)
        } else if (d - n > 0 && d - n < 3) {
            res.push(d)
        } else {
            res.push(n)
        }
    })
    return res
}

// console.log(gradingStudents([73, 67, 38, 33]))
