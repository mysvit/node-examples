
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

function isEqualRightLeft(str) {
    let i = 0;
    let j = str.length - 1;
    let isEqual = true
    while (i < j) {
        if (str[i] !== str[j]) {
            isEqual = false
            break
        }
        i++
        j--
    }
    return isEqual
}

// console.log('madam', isEqualRightLeft('madam'))
// console.log('maddam', isEqualRightLeft('maddam'))
// console.log('maddam1', isEqualRightLeft('maddam1'))

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