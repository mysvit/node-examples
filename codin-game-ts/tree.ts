interface Cell {
    index: number
    richness: number
    size: number
    isMine: boolean
    isDormant: boolean
}

const MAX_TREE_SIZE = 3

let cells: Array<Cell> = []

function setInitCell(cells: Array<Cell>, cellIndex: number, richness: number) {
    cells.push(<Cell>{index: cellIndex, richness: richness})
}

function resetCells(cells: Array<Cell>) {
    for (let i = 0; i < cells.length; i++) {
        cells[i] = <Cell>{index: cells[i].index, richness: cells[i].richness}
    }
}

function setCell(cells: Array<Cell>, cellIndex: number, size: number, isMine: boolean, isDormant: boolean) {
    cells[cellIndex].size = size
    cells[cellIndex].isMine = isMine
    cells[cellIndex].isDormant = isDormant
}

function maxArrayObj(arr: any, field: string): Cell {
    let obj = arr[0]
    let maxValue = arr[0][field]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][field] > maxValue) {
            maxValue = arr[i][field]
            obj = arr[i]
        }
    }
    return arr[0]
}


function getCompleteTree(cells: Array<Cell>) {
    const arr = cells.filter(f => f.isMine && f.size === MAX_TREE_SIZE)
    if (arr.length > 0) {
        return maxArrayObj(arr, 'richness').index
    } else {
        return -1
    }
}

function getGrowTree(cells: Array<Cell>, growSize: number) {
    const arr = cells.filter(f => f.isMine && !f.isDormant && f.size === growSize)
    if (arr.length > 0) {
        return maxArrayObj(arr, 'richness').index
    } else {
        return -1
    }
}

function getCountTrees(cells: Array<Cell>, growSize: number) {
    return cells.filter(f => f.isMine && f.size === growSize).length
}

function growAction(cells: Array<Cell>, sun: number) {
    let action = 'WAIT'
    const cntLv2 = getCountTrees(cells, 2)
    const cntLv3 = getCountTrees(cells, 3)

    console.error(`sun:${sun}, 7 + cntLv3: ${cntLv3}`)
    if (action === 'WAIT') {
        // size 2 to 3 costs 7 sun points + the number of size 3 trees you already own.
        if (sun >= 7 + cntLv3 && cntLv3 <= 1) {
            const growIndex = getGrowTree(cells, 2)
            if (growIndex >= 0) {
                action = `GROW ${growIndex}`
                console.error(action, cells[growIndex])
            }
        }
    }

    console.error(`sun:${sun}, 3 + cntLv2: ${cntLv2}`)
    if (action === 'WAIT') {
        // size 1 to 2 costs 3 sun points + the number of size 2 trees you already own
        if (sun >= 3 + cntLv2 && cntLv2 <= 1) {
            const growIndex = getGrowTree(cells, 1)
            if (growIndex >= 0) {
                action = `GROW ${growIndex}`
                console.error(cells[growIndex])
            }
        }
    }

    return action
}

function completeAction(cells: Array<Cell>, sun: number) {
    // to get lv3 need 4 sun
    let action = 'WAIT'
    if (sun >= 4) {
        const completeIndex = getCompleteTree(cells)
        if (completeIndex >= 0) {
            action = `COMPLETE ${completeIndex}`
            console.error(cells[completeIndex])
        }
    }
    return action
}

//test
// cells = [
//     {index: 0, richness: 3},
//     {index: 1, richness: 3},
//     {index: 2, richness: 3},
//     {index: 3, richness: 3, size: 1, isMine: false, isDormant: false},
//     {index: 4, richness: 3},
//     {index: 5, richness: 3},
//     {index: 6, richness: 3, size: 1, isMine: true, isDormant: false},
//     {index: 7, richness: 2, size: 1, isMine: false, isDormant: false},
//     {index: 8, richness: 2},
//     {index: 9, richness: 2},
//     {index: 10, richness: 2},
//     {index: 11, richness: 2},
//     {index: 12, richness: 2},
//     {index: 13, richness: 2, size: 1, isMine: true, isDormant: false},
//     {index: 14, richness: 2},
//     {index: 15, richness: 2},
//     {index: 16, richness: 2},
//     {index: 17, richness: 2},
//     {index: 18, richness: 2},
//     {index: 19, richness: 1},
//     {index: 20, richness: 1},
//     {index: 21, richness: 1},
//     {index: 22, richness: 1, size: 1, isMine: false, isDormant: false},
//     {index: 23, richness: 1},
//     {index: 24, richness: 1},
//     {index: 25, richness: 1, size: 1, isMine: true, isDormant: false},
//     {index: 26, richness: 1},
//     {index: 27, richness: 1},
//     {index: 28, richness: 1},
//     {index: 29, richness: 1},
//     {index: 30, richness: 1},
//     {index: 31, richness: 1, size: 1, isMine: true, isDormant: false},
//     {index: 32, richness: 1},
//     {index: 33, richness: 1},
//     {index: 34, richness: 1, size: 1, isMine: false, isDormant: false},
//     {index: 35, richness: 1},
//     {index: 36, richness: 1}
// ]
//
// console.log(getCompleteTree(cells))