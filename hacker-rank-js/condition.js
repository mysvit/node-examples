// #null & #undefined
function condition() {
    console.log('set default val for null and undefined')
    let nu = null
    console.log('NULL', nu ?? 'default VAL')
    nu = undefined
    console.log('UNDEFINED', nu ?? 'default VAL')
    nu = 0
    console.log('0', nu ?? 'default null')
    nu = 1
    console.log('1', nu ?? 'default null')

    console.log('Show null if null or undefined and val if val for BOOLEAN')
    let b = false
    console.log('FALSE', b ?? null)
    b = true
    console.log('TRUE', b ?? null)
    b = null
    console.log('NULL', b ?? null)
    b = undefined
    console.log('UNDEFINED', b ?? null)

    // n ??= 42
    // n ?? n = 42
    // n = n ?? 42
}

condition()