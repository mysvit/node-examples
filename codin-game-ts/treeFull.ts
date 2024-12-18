function readline() {
    return ''
}

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const numberOfCells: number = parseInt(readline()); // 37

for (let i = 0; i < numberOfCells; i++) {
    var inputs: string[] = readline().split(' ');
    const index: number = parseInt(inputs[0]); // 0 is the center cell, the next cells spiral outwards
    const richness: number = parseInt(inputs[1]); // 0 if the cell is unusable, 1-3 for usable cells
    const neigh0: number = parseInt(inputs[2]); // the index of the neighbouring cell for each direction
    const neigh1: number = parseInt(inputs[3]);
    const neigh2: number = parseInt(inputs[4]);
    const neigh3: number = parseInt(inputs[5]);
    const neigh4: number = parseInt(inputs[6]);
    const neigh5: number = parseInt(inputs[7]);
    setInitCell(cells, index, richness)
}

// game loop
while (true) {
    const day: number = parseInt(readline()); // the game lasts 24 days: 0-23
    const nutrients: number = parseInt(readline()); // the base score you gain from the next COMPLETE action
    var inputs: string[] = readline().split(' ');
    const sun: number = parseInt(inputs[0]); // your sun points
    const score: number = parseInt(inputs[1]); // your current score
    var inputs: string[] = readline().split(' ');
    const oppSun: number = parseInt(inputs[0]); // opponent's sun points
    const oppScore: number = parseInt(inputs[1]); // opponent's score
    const oppIsWaiting: boolean = inputs[2] !== '0'; // whether your opponent is asleep until the next day
    const numberOfTrees: number = parseInt(readline()); // the current amount of trees

    console.error(`day: ${day}, nutr: ${nutrients}, sun: ${sun}, score:${score}, numberOfTrees:${numberOfTrees}`)
    resetCells(cells)

    for (let i = 0; i < numberOfTrees; i++) {
        var inputs: string[] = readline().split(' ');
        const cellIndex: number = parseInt(inputs[0]); // location of this tree
        const size: number = parseInt(inputs[1]); // size of this tree: 0-3
        const isMine: boolean = inputs[2] !== '0'; // 1 if this is your tree
        const isDormant: boolean = inputs[3] !== '0'; // 1 if this tree is dormant

        setCell(cells, cellIndex, size, isMine, isDormant)
    }
    console.error('cells', cells.map(m => m.isMine))

    const numberOfPossibleActions: number = parseInt(readline()); // all legal actions
    const possibleActionArr: Array<string> = []
    for (let i = 0; i < numberOfPossibleActions; i++) {
        const possibleAction = readline()
        console.error(`possibleAction ${possibleAction}`);
        possibleActionArr.push(possibleAction)
    }

    let action = growAction(cells, sun)
    if (action === 'WAIT' && day > 3) {
        action = completeAction(cells, sun)
    }

    console.error(`action ${action}`)
    if (possibleActionArr.indexOf(action) > -1) {
        console.log(action)
    } else {
        console.log('WAIT')
    }

    // GROW cellIdx | SEED sourceIdx targetIdx | COMPLETE cellIdx | WAIT <message>
}


// console.error(`day: ${day}, nutr: ${nutrients}, sun: ${sun}, score:${score}, numberOfTrees:${numberOfTrees}`)

// function newArrayCell(length: number) {
//     return Array(length).fill(<Cell>{})
// }