const warm = require('./warmup')
const impl = require('./implementation')
const t = require('./test')
const cl = require('./clash')

// console.log(cl.replaceAllNoAlphabet('Hello, World!'), cl.replaceAllNoAlphabet('Hello, World!') === 'Hello World')

// console.log(cl.phoneFormat('1234567890'))

// console.log('madam', t.rightLeftRight('madam'))
// console.log('maddam', t.rightLeftRight('maddam'))
// console.log('maddam1', t.rightLeftRight('maddam1'))
// t.interArray()


// const arr = impl.countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])
// console.log(arr, arr[0] === 1, arr[1] === 1)


// console.log('floatToLog', warm.floatToLog() === '4.0')

// console.log('PI', warm.PI('2.6'), warm.PI('2.6')[0] === 21.237166338267002, warm.PI('2.6')[1] === 16.336281798666924)
//
// console.log('factorial', warm.factorial(4), warm.factorial(4) === 24)
//
// console.log(warm.timeConversion('07:05:45PM'))
// console.log(warm.timeConversion('12:00:00PM'))
// console.log(warm.timeConversion('12:00:00AM'))
//
// console.log(warm.birthdayCakeCandles([3, 2, 1, 3]))
//
// warm.staircase(6)
//
// warm.plusMinus([-4, 3, -9, 0, 4, 1])
// warm.plusMinus([1, 2, 3, -1, -2, -3, 0, 0])
//
// const aVeryBigSum = warm.aVeryBigSum([1, 2, 3, 5555555])
// console.log('aVeryBigSum', aVeryBigSum, aVeryBigSum === 5555561)
// console.log('diagonalDifference', warm.diagonalDifference([[1, 2, 15], [4, 5, 6], [7, 8, 9]]))
// console.log('miniMaxSum', warm.miniMaxSum([1, 2, 3, 4, 5]))
// console.log('iceCreamParlor', warm.iceCreamParlor(9, [1, 3, 4, 6, 7, 9]))
//
// console.log(100)
// console.log('2:', warm.changeMoney(100)?.two, warm.changeMoney(100)?.two === 0)
// console.log('5:', warm.changeMoney(100)?.five, warm.changeMoney(100)?.five === 0)
// console.log('10:', warm.changeMoney(100)?.ten, warm.changeMoney(100)?.ten === 10)
// console.log(43)
// console.log('2:', warm.changeMoney(43)?.two, warm.changeMoney(43)?.two === 4)
// console.log('5:', warm.changeMoney(43)?.five, warm.changeMoney(43)?.five === 1)
// console.log('10:', warm.changeMoney(43)?.ten, warm.changeMoney(43)?.ten === 3)
// console.log(11)
// console.log('2:', warm.changeMoney(11)?.two, warm.changeMoney(11)?.two === 3)
// console.log('5:', warm.changeMoney(11)?.five, warm.changeMoney(11)?.five === 1)
// console.log('10:', warm.changeMoney(11)?.ten, warm.changeMoney(11)?.ten === 0)
// console.log(15)
// console.log('2:', warm.changeMoney(15)?.two, warm.changeMoney(15)?.two === 0)
// console.log('5:', warm.changeMoney(15)?.five, warm.changeMoney(15)?.five === 1)
// console.log('10:', warm.changeMoney(15)?.ten, warm.changeMoney(15)?.ten === 1)
