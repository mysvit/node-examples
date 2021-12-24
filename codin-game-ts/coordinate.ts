interface Number {
    inRange(begin: number, end: number): boolean;
}

Number.prototype.inRange = function (begin: number, end: number) {
    return begin <= this && this <= end
}

class Point {
    constructor(public x: number, public y: number) {
    }

    goToStopPoint(p: Point) {
    }

    inRange(p: Point, range: number) {
        return distXY(p, this).inRange(0, range)
    }

    distXY(destination) {
        return distXY(this, destination)
    }
}

// const dist = new Point(100, 100)
// const p = new Point(100, 100)
// console.log(dist.inRange(p, 10))

function distXY(p1: Point, p2: Point) {
    return Math.round(Math.sqrt(Math.abs(p1.x - p2.x) ** 2 + Math.abs(p1.y - p2.y) ** 2))
}

// const dist = distXY(new Point(1, 1), new Point(1, 5))
// const dist = distXY(new Point(5000, 5000), new Point(7000, 7000))
// console.log('distXY', dist, dist == 2828)

//
//
// // angel to axil X
// function angleXY(p1, p2) {
//     let deltaY = Math.abs(p1.y - p2.y)
//     let deltaX = Math.abs(p1.x - p2.x)
//     return (180 / Math.PI) * Math.atan2(deltaY, deltaX)
// }
//
// // let ang = angleXY({x: 1, y: 1}, {x: 1, y: 5})
// // console.log('angleXY', ang, ang === 90)
// // ang = angleXY({x: 1, y: 1}, {x: 5, y: 1})
// // console.log('angleXY', ang, ang === 90)
//
//
// // midpoint XY
// function midpointXY(x1, y1, x2, y2, mid = 2) {
//     let Y = Math.round(Math.abs(y1 + y2) / mid)
//     let X = Math.round(Math.abs(x1 + x2) / mid)
//     return {x: X, y: Y}
// }
//
// // [ 12438, 10561, 3551, 13591 ] [ 1354, 5990, 5189, 7616 ]
// // console.log('midpointXY = 5', midpointXY(0, 0, 10, 10, 3))
//
// //a,b,c are the sides of the triangle
// function thirdPointTriangle(a, b, c) {
//     var result = {x: 0, y: 0};
//
//     if (a > 0) {
//         result.x = (c * c - b * b + a * a) / (2 * a);
//     }
//
//     result.y = Math.sqrt(c * c - result.x * result.x);
//     return result;
// }
//
// // console.log('thirdPointTriangle = 5', thirdPointTriangle(2, 2, 2))
//
// /**
//  * Find the coordinates for the third point of a triangle.
//  *
//  * @param Ax - x coordinate value of first known point
//  * @param Ay - y coordinate value of first known point
//  * @param Cx - x coordinate value of second known point
//  * @param Cy - y coordinate value of second known point
//  * @param a - the length of side a
//  * @param b - the length of side b
//  * @param c - the length of side c
//  * @param A - the angle of corner A in degrees
//  * @param B - the angle of corner B in degrees
//  * @param C - the angle of corner C in degrees
//  * @returns {{Bx: *, By: *}}
//  */
// function calculate_third_point(Ax, Ay, Cx, Cy, a, b, c, A, B, C) {
//     let Bx
//     let By
//
//     let Arad = A * Math.PI / 180; //degrees to radians
//
//     //unit vector
//     let uACx = (Cx - Ax) / b;
//     let uACy = (Cy - Ay) / b;
//
//     //rotated vector
//     let uABx = uACx * Math.cos(Arad) - uACy * Math.sin(Arad);
//     let uABy = uACx * Math.sin(Arad) + uACy * Math.cos(Arad);
//
//     //B position uses length of edge
//     Bx = Ax + c * uABx;
//     By = Ay + c * uABy;
//
//     //vector rotated into another direction
//     uABx = uACx * Math.cos(Arad) + uACy * Math.sin(Arad);
//     uABy = -uACx * Math.sin(Arad) + uACy * Math.cos(Arad);
//
//     //second possible position
//     Bx = Ax + c * uABx;
//     By = Ay + c * uABy;
//
//     return {Bx: Bx, By: By};
// }
//
// // console.log(calculate_third_point(0, 0, 0, 2, 2, 2, 2, 60, 60, 60))
//
// function thirdPoint(Ax, Ay, Cx, Cy, dist) {
//     const Arad = 60 * Math.PI / 180; //degrees to radians
//
//     //unit vector
//     let uACx = (Cx - Ax) / dist;
//     let uACy = (Cy - Ay) / dist;
//
//     //rotated vector
//     let uABx = uACx * Math.cos(Arad) - uACy * Math.sin(Arad);
//     let uABy = uACx * Math.sin(Arad) + uACy * Math.cos(Arad);
//
//     //B position uses length of edge
//     let Bx = Ax + dist * uABx;
//     let By = Ay + dist * uABy;
//
//     //vector rotated into another direction
//     uABx = uACx * Math.cos(Arad) + uACy * Math.sin(Arad);
//     uABy = -uACx * Math.sin(Arad) + uACy * Math.cos(Arad);
//
//     //second possible position
//     let uBx = Ax + dist * uABx;
//     let uBy = Ay + dist * uABy;
//
//     return {x: Bx, y: By, uX: uBx, uY: uBy};
// }
//
// interface Point {
//     x;
//     y;
//     tX?: number;
//     tY?: number;
// }
//
// function calcTriangles(points: Array<Point>) {
//     for (let i = 0; i < points.length; i++) {
//         let i1 = i
//         let i2 = (i1 + 1 === points.length) ? 0 : i1 + 1
//         let i3 = (i2 + 1 === points.length) ? 0 : i2 + 1
//         let mpXY = midpointXY(points[i1].x, points[i1].y, points[i2].x, points[i2].y)
//         let dist = distXY(mpXY, points[i2])
//         let thirdXY = thirdPoint(mpXY.x, mpXY.y, points[i2].x, points[i2].y, dist)
//         // choose the farthest point
//         if (distXY(thirdXY, points[i3]) > distXY(thirdXY, points[i3])) {
//             points[i2].tX = Math.round(thirdXY.x)
//             points[i2].tY = Math.round(thirdXY.y)
//         } else {
//             points[i2].tX = Math.round(thirdXY.uX)
//             points[i2].tY = Math.round(thirdXY.uY)
//         }
//     }
//     return points
// }
//
// let p: Array<Point> = [
//     {x: 12438, y: 1354},
//     {x: 10561, y: 5990},
//     {x: 3551, y: 5189},
//     {x: 13591, y: 7616}
// ]
//
// // let p1: Array<Point> = [
// //     {x: 100, y: 100},
// //     {x: 100, y: 500},
// //     {x: 500, y: 500},
// // ]
//
// // console.log(calcTriangles(p))