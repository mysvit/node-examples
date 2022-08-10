declare interface Number {
    inRange(begin: number, end: number): boolean;
}

Number.prototype.inRange = function (begin: number, end: number) {
    return begin <= this && this <= end
}

const num = 5
console.debug('inRange', num.inRange(1, 5))
