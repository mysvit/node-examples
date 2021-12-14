// #string #regex
exports.phoneFormat = (phone) => {
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
}
// #string #regex
exports.replaceAllNoAlphabet = (str) => {
    return str.replace(/[^a-zA-Z\s]/g, '')
}
