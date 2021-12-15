// #string #regex
exports.phoneFormat = (phone) => {
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
}
// #string #regex
exports.replaceAllNoAlphabet = (str) => {
    return str.replace(/[^a-zA-Z\s]/g, '')
}
// #string #regex
exports.countDigit = (str) => {
    str.match(/[1]+/g).length
}
// #MAX_VALUE #exponentiation #pow
exports.pow = (x, y) => {
    return x ** y
}
