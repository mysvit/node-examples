// #regex #digital #all
// console.log('102, 1948948 and 1.3 and 4.5'.match(/\d+/g))


// #regex #first 2,3 and NOT next 2,3
// Mr. Sam - match
// Mrs.Dr. - not mach
// console.log('Mr. Sam'.match(/(^\S{2,3}[.])(?!\S{2,3}[.])/))
// console.log('Mr.De. Sam'.match(/(^\S{2,3}[.])(?!\S{2,3}[.])/))


// #regex #compare #first #last
// \1  matches the same text as most recently matched by the 1st capturing group
// ^ begin,  $ end,  .* any between
function vowelsStartEnd(s) {
    return s.match(/(^[aeiou])(.*)\1$/gi)
}
// console.log('aGGGGGa', vowelsStartEnd('aGGGGGa'), !!vowelsStartEnd('aGGGGGa'))
// console.log('aGGGGGb', vowelsStartEnd('aGGGGGb'), !!vowelsStartEnd('aGGGGGb'))
// console.log('aGGGGGi', vowelsStartEnd('aGGGGGi'))


// #regex #one char /g
// console.log('--0---0----0'.replace(/[0]/g,'-'))


// #string #regex
function reverseString(str) {
    let res = ''
    str.split('').forEach(a => {
        res += a.match(/[a-z]/) !== null ? a.toUpperCase() : a.toLowerCase()
    })
    return res
}
// console.log(reverseString('aaaBBB123!@#'),'AAAbbb123!@#')


// #regex #vowel #consonant
function vowelsAndConsonants(s) {
    const vowel = s.match(/[aeiou]/g).forEach(v => {
        console.log(v)
    })
    const consonant = s.match(/[^aeiou]/g).forEach(c => {
        console.log(c)
    })
}
// vowelsAndConsonants('javascriptloops')


// #string #regex
phoneFormat = (phone) => {
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
}
// const r = phoneFormat('1234567890')
// console.log(r, r === '(123) 456-7890')


// #string #regex
replaceAllNoAlphabet = (str) => {
    return str.replace(/[^a-zA-Z\s]/g, '')
}
// const r = replaceAllNoAlphabet('Hello, World!')
// console.log(r, r === 'Hello World')


// #string #regex
countDigit = (str) => {
    return str.match(/(1)/g).length
}
// const r = countDigit('1110000')
// console.log('Count digit:', r, r === 3)


// #string #compare
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


// #string repeat
staircase = (n) => {
    for (let i = 1; i < n; i++) {
        console.log(' '.repeat(n - i - 1), '#'.repeat(i))
    }
    console.log('#'.repeat(n))
}
// staircase(6)

export function validateConfirmCode(confirm_code) {
    return (/^[0-9]{5}$/).test(confirm_code)
}

console.log(validateConfirmCode('12345'))
