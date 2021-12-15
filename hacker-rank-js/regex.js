// #string #regex
function reverseString(str) {
    let res = ''
    str.split('').forEach(a => {
        res += a.match(/[a-z]/) !== null ? a.toUpperCase() : a.toLowerCase()
    })
    return res
}
// console.log(reverseString('aaaBBB123!@#'),'AAAbbb123!@#')

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
