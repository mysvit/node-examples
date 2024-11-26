declare interface Number {
    inRange(begin: number, end: number): boolean;
}

Number.prototype.inRange = (begin: number, end: number) => {
    // @ts-ignore
    return begin <= this && this <= end
}

const num = 5
console.debug('inRange', num.inRange(1, 5))