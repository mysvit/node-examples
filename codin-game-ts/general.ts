export class General {

    // #loop #string repeat
    public static fibonacci() {
        const N = 7
        const ch = 'F'
        let fi = 0
        let n2 = 1
        let nextTerm = 0
        for (let i = 0; i < N; i++) {
            nextTerm = fi + n2
            fi = n2
            n2 = nextTerm
            console.log(ch.repeat(fi))
        }
    }

    // #loop #encoding #array
    public static caesarCipher() {
        const ALPHABET: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ_';
        const MESSAGE: string = 'NQVTMO_S';
        const WORD: string = 'WHAT';

        // length of alphabet
        let L = ALPHABET.length
        // shift
        loop1:
            for (let A = 0; A <= L; A++) {
                // multiplier
                loop2:
                    for (let B = 0; B <= L; B++) {

                        // new alphabet
                        let SHIFT_ALPHABET = []
                        // new alphabet
                        for (let X = 0; X < L; X++) {
                            SHIFT_ALPHABET.push(ALPHABET[((X + A) * B) % L])
                        }
                        // console.error('shift:', A, ', multiplier:', B)
                        // console.error(ALPHABET_X.join(""))

                        // decrypt
                        let resultStr = [];
                        for (let i = 0; i < MESSAGE.length; i++) {
                            for (let j = 0; j < L; j++) {
                                if (MESSAGE[i] === ALPHABET[j]) {
                                    resultStr.push(SHIFT_ALPHABET[j]);
                                }
                            }
                        }
                        // if contain the word
                        if (resultStr.join("").indexOf(WORD) >= 0) {
                            console.error('shift:', A, ', multiplier:', B)
                            console.error(SHIFT_ALPHABET.join(""))
                            console.log(resultStr.join(""))
                            break loop1;
                        }

                    }
            }

    }

    // #loop #ascii #array
    public static shadowCasting() {
        const N: number = 7;
        const rl = [
            '#     #',
            ' #   #',
            '  # #',
            '   #',
            '  # #',
            ' #   #',
            '#     #',
        ]
        let arr: Array<string> = []
        let arrShadow: Array<string> = []

        // fill array
        for (let i = 0; i < N; i++) {
            arr.push(rl[i])
            arrShadow.push(' '.repeat(arr[i].length))
        }
        arrShadow.push('')
        arrShadow.push('')

        // drawing shadow in shadow's array
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j].charCodeAt(0) > 32) {
                    arrShadow[i + 1] = insertShadow(arrShadow[i + 1], j + 1, '-')
                    arrShadow[i + 2] = insertShadow(arrShadow[i + 2], j + 2, '`')
                }
            }
        }

        // apply image on shadow
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j].charCodeAt(0) > 32) {
                    arrShadow[i] = replaceAt(arrShadow[i], j, arr[i][j])
                }
            }
        }

        function insertShadow(str: string, shadowIndex: number, shadowChar: string) {
            if (shadowIndex >= str.length) {
                str = str.concat(' '.repeat(shadowIndex - str.length))
            }
            return str.substring(0, shadowIndex) + shadowChar + str.substring(shadowIndex + 1);
        }

        function replaceAt(str: string, index: number, replacement: string) {
            return str.substring(0, index) + replacement + str.substring(index + replacement.length);
        }

        // output
        for (let i = 0; i < N + 2; i++) {
            console.log(arrShadow[i].trimEnd())
        }

    }

    // #loop #cryptography #array 2D
    public static foldingANote(arr: string[][], expected: string) {

        let currLevel = 0

        while (arr[0].length > 1) {
            rightToLeftTo(true)
            console.info(arr)
            bottomToTop(true)
            console.info(arr)
            rightToLeftTo(false)
            console.info(arr)
            bottomToTop(false)
            console.info(arr)
        }
        console.log('expected:', expected, ', result:', arr.reverse().join(''))

        // right to left = true
        // left to right = false
        function rightToLeftTo(rl: boolean) {
            if (arr[0].length === 1) {
                return
            }
            for (let foldLevel = currLevel; foldLevel >= 0; foldLevel--) {
                currLevel++
                arr[currLevel] = []
                const s2 = arr[foldLevel][0].length / 2
                for (let i = 0; i < arr[foldLevel].length; i++) {
                    arr[currLevel].push(arr[foldLevel][i]
                        .split('').splice((rl ? -1 * s2 : 0), s2).reverse().join(''))
                    arr[foldLevel][i] = arr[foldLevel][i]
                        .split('').splice((rl ? 0 : s2), s2).join('')
                }
            }
        }

        // bottom to top = true
        // top to bottom = false
        function bottomToTop(bt: boolean) {
            if (arr[0].length === 1) {
                return
            }
            // top to bottom
            for (let foldLevel = currLevel; foldLevel >= 0; foldLevel--) {
                currLevel++
                arr[currLevel] = []
                let a2 = arr[foldLevel].length / 2
                if (bt) {
                    arr[currLevel] = arr[foldLevel].splice(-1 * a2).reverse()
                } else {
                    arr[currLevel] = arr[foldLevel].splice(0, a2).reverse()
                }
            }
        }
    }

    // loop
    public static greenValleys(H: number, N: number, valley: number[][]) {
        const result = []
        const levels = []
        let levelIndex = 0
        createLevels()
        mergeLevels()
        countValleys()

        console.error(H)
        console.error(N)
        console.error(valley)
        console.error(levels)

        if (result.length === 0) {
            return 0
        } else {
            result.sort((a, b) => b[1] - a[1] || a[0] - b[0])
            console.error(result)
            return result[0][0]
        }

        function createLevels() {
            valley.forEach((row, i) =>
                row.forEach((column, j) => {
                        // find if level exist
                        if (valley[i][j] <= H) {
                            levelIndex = levels.findIndex(item => isPartOfValley(item, i, j, N))
                            if (levelIndex < 0) {
                                levels.push(newArray(N))
                                levelIndex = levels.length - 1
                                levels[levelIndex][i][j] = valley[i][j]
                            } else {
                                levels[levelIndex][i][j] = valley[i][j]
                            }
                        }
                    }
                ))
        }


        function mergeLevels() {
            let isMergedGlobal = true
            while (isMergedGlobal) {
                isMergedGlobal = false
                let mergeLevel = 0
                let isMerged = false
                if (levels.length <= 1) {
                    return
                }
                while (mergeLevel < levels.length - 1) {
                    let i = 0
                    while (!isMerged && i < N) {
                        let j = 0
                        while (!isMerged && j < N) {
                            if (levels[mergeLevel][i][j] != undefined) {
                                levelIndex = levels.slice(mergeLevel + 1).findIndex(item => isPartOfValley(item, i, j, N))
                                // merge levels below
                                if (levelIndex >= 0) {
                                    isMerged = true
                                    isMergedGlobal = true
                                    simpleMerge(mergeLevel, levelIndex + mergeLevel + 1)
                                    levels.splice(levelIndex + mergeLevel + 1, 1)
                                }
                            }
                            j++
                        }
                        i++
                    }
                    isMerged ? isMerged = false : mergeLevel++
                }
            }
        }


        function simpleMerge(mergeLevel, levelIndex) {
            // simple merge level
            for (let i = 0; i < N; i++) {
                for (let j = 0; j < N; j++) {
                    if (levels[levelIndex][i][j] != undefined) {
                        levels[mergeLevel][i][j] = levels[levelIndex][i][j]
                    }
                }
            }
        }

        function countValleys() {
            levels.forEach((lev, l) => {
                    result[l] = [H - 1, 0]
                    lev.forEach((row, i) =>
                        row.forEach((column, j) => {
                                result[l][1]++
                                result[l][0] = minVal(result[l][0], lev[i][j])
                            }
                        )
                    )
                }
            )
        }

        function isPartOfValley(item, i, j, length) {
            if (item[i][j] >= 0) {
                return true
            } else if (i - 1 >= 0 && item[i - 1][j] >= 0) {
                return true
            } else if (i + 1 < length && item[i + 1][j] >= 0) {
                return true
            } else if (j - 1 >= 0 && item[i][j - 1] >= 0) {
                return true
            } else if (j + 1 < length && item[i][j + 1] >= 0) {
                return true
            }
            return false
        }

        function minVal(min, b) {
            return b > 0 && min < b ? min : b
        }

        function newArray(length) {
            return Array.from(Array(length), () => new Array(length))
        }

    }

}