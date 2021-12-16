// #math #min #abs #if #loop
function closestToZero(numbers) {
    let min = 2147483647
    if (numbers === null || numbers.length === 0 ){
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

// #math #max #if #loop
function findLargest(numbers) {
    let max = 0
    numbers.forEach(n => {
        if (max < n) {
            max = n
        }
    })
    return max
}

// #math #mod #if #loop
function sumOfEventOdd(n){
    let odd=0
    let even=0
    while (n > 0){
        if (n%2){
            odd+=n
        } else {
            even+=n
        }
        n--
    }
    return {odd:odd, even:even}
}
const s=sumOfEventOdd(16)
console.log(s, s.odd === 64, s.even === 72 )

//#math #mod #if
function powerOfTwo(N){
    let cnt=0
    while (N > 1){
        N = N % 2 ?  3 * N + 1 : N / 2
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
