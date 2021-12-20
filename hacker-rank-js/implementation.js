changeMoney = (cash) => {
    let two = 0;
    let five = 0;
    let ten = 0;

    ten = Math.floor(cash / 10)
    if (ten !==0 && cash % 10 % 5 % 2 && cash % 10 % 5 && cash % 10 % 2)
    {
        ten = ten - 1
    }
    cash = cash - ten * 10
    five = Math.floor(cash / 5);
    if (five !==0 && cash % 5 % 2) {
        five = five - 1
    }
    cash = cash - five * 5
    two = Math.floor(cash / 2)
    if (two !==0 && cash % 2) {
        two = two - 1
    }

    // not possible exchange (1,3) - return 0, 0, 0
    return {
        two: two,
        five: five,
        ten: ten
    }
}
let c
c = changeMoney(1)
console.log('1:', c, c.two === 0, c.five === 0, c.ten === 0)
c = changeMoney(2)
console.log('2:', c, c.two === 1, c.five === 0, c.ten === 0)
c = changeMoney(3)
console.log('3:', c, c.two === 0, c.five === 0, c.ten === 0)
c = changeMoney(4)
console.log('4:', c, c.two === 2, c.five === 0, c.ten === 0)
c = changeMoney(5)
console.log('5:', c, c.two === 0, c.five === 1, c.ten === 0)
c = changeMoney(6)
console.log('6:', c, c.two === 3, c.five === 0, c.ten === 0)
c = changeMoney(7)
console.log('7:', c, c.two === 1, c.five === 1, c.ten === 0)
c = changeMoney(8)
console.log('8:', c, c.two === 4, c.five === 0, c.ten === 0)
c = changeMoney(9)
console.log('9:', c, c.two === 2, c.five === 1, c.ten === 0)
c = changeMoney(10)
console.log('10:', c, c.two === 0, c.five === 0, c.ten === 1)
c = changeMoney(11)
console.log('11:', c, c.two === 3, c.five === 1, c.ten === 0)
c = changeMoney(12)
console.log('12:', c, c.two === 1, c.five === 0, c.ten === 1)
c = changeMoney(13)
console.log('13:', c, c.two === 4, c.five === 1, c.ten === 0)
c = changeMoney(14)
console.log('14:', c, c.two === 2, c.five === 0, c.ten === 1)
c = changeMoney(15)
console.log('15:', c, c.two === 0, c.five === 1, c.ten === 1)
c = changeMoney(16)
console.log('16:', c, c.two === 3, c.five === 0, c.ten === 1)
c = changeMoney(17)
console.log('17:', c, c.two === 1, c.five === 1, c.ten === 1)
c = changeMoney(18)
console.log('18:', c, c.two === 4, c.five === 0, c.ten === 1)
c = changeMoney(19)
console.log('19:', c, c.two === 2, c.five === 1, c.ten === 1)
c = changeMoney(20)
console.log('20:', c, c.two === 0, c.five === 0, c.ten === 2)


// #array #object #fill
intersectionArray = () => {
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
    return res
}
// console.log(intersectionArray())


// #class #method #getter
class Polygon {
    constructor(arr) {
        this.arr = arr
    }

    get() {
        return this.perimeter()
    }

    perimeter() {
        return this.arr.reduce((a, b) => a + b)
    }
}
// const rectangle = new Polygon([10, 20, 10, 20]);
// console.log(rectangle.perimeter(), rectangle.perimeter() === 60)


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


// #time #conversion
timeConversion = (s) => {
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
// console.log(timeConversion('07:05:45PM'))
// console.log(timeConversion('12:00:00PM'))
// console.log(timeConversion('12:00:00AM'))
