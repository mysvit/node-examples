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
