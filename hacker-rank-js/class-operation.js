// #class #prototype #inheritance

class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = function () {
    return this.w * this.h
}

class Square extends Rectangle {
    constructor(wh) {
        super(wh, wh);
    }
}

// const rec = new Rectangle(3, 4);
// const sqr = new Square(3);
// console.log('Rectangle area prototype', rec.area(), rec.area() === 12)
// console.log('Square Inheritance', sqr.area(), sqr.area() === 9)


// #literals
function sides(literals, ...expressions) {
    console.log('literals: ', literals)
    console.log('expressions: ', expressions)
    // literals:  [ 'The area is: ', '.\nThe perimeter is: ', '.' ]
    // expressions:  [ 140, 48 ]
    const A = expressions[0]
    const P = expressions[1]
    const s11 = (P + Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4
    const s22 = (P - Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4
    return [s11, s22].sort()
}

// const s1 = 10
// const s2 = 14
// const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
// console.log((s1 === x) ? s1 : -1);
// console.log((s2 === y) ? s2 : -1);



// this.selectedImage.patchState({selectedMovieId});
// Object.defineProperty(image, 'type', {
// 	writable: true,
// 	value: this.getInsightFileTypes(this.selectedImage.type)
// });
// console.debug(image, Object.getOwnPropertyDescriptor(image, 'type'));
// this.selectedImage.type = ;
