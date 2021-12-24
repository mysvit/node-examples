// interface Point {
//     x;
//     y;
//     tX;
//     tY;
// }
//
//
// function distXY(x1, y1, x2, y2) {
//     return Math.sqrt(Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2)
// }
//
// function angleXY(x1, y1, x2, y2) {
//     let deltaY = Math.abs(y1 - y2)
//     let deltaX = Math.abs(x1 - x2)
//     return (180 / Math.PI) * Math.atan2(deltaY, deltaX)
// }
//
// function midpointXY(x1, y1, x2, y2, mid = 2) {
//     let Y = Math.round(Math.abs(y1 + y2) / mid)
//     let X = Math.round(Math.abs(x1 + x2) / mid)
//     return {x: X, y: Y}
// }
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
// function calcTriangles(points: Array<Point>) {
//     for (let i = 0; i < points.length; i++) {
//         let i1 = i
//         let i2 = (i1 + 1 === points.length) ? 0 : i1 + 1
//         let i3 = (i2 + 1 === points.length) ? 0 : i2 + 1
//         let mpXY = midpointXY(points[i1].x, points[i1].y, points[i2].x, points[i2].y, 2)
//         let dist = distXY(mpXY.x, mpXY.y, points[i2].x, points[i2].y)
//         let thirdXY = thirdPoint(mpXY.x, mpXY.y, points[i2].x, points[i2].y, dist)
//         // choose the farthest point
//         if (distXY(thirdXY.x, thirdXY.y, points[i3].x, points[i3].y) >
//             distXY(thirdXY.uX, thirdXY.uY, points[i3].x, points[i3].y)) {
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
//
// let points: Array<Point> = []
// // [
// //   { x: 12438, y: 1354, tX: 15438, tY: 2420 },
// //   { x: 10561, y: 5990, tX: 13038, tY: 5644 },
// //   { x: 3551, y: 5189, tX: 5651, tY: 2354 },
// //   { x: 13591, y: 7616, tX: 13591, tY: 7616 }
// // ]
// let lap = 1
//
//
// // game loop
// while (true) {
//     var inputs: string[] = readline().split(' ');
//     const x: number = parseInt(inputs[0]);
//     const y: number = parseInt(inputs[1]);
//     let nextX: number = parseInt(inputs[2]); // x position of the next check point
//     let nextY: number = parseInt(inputs[3]); // y position of the next check point
//     const nextCheckpointDist: number = parseInt(inputs[4]); // distance to the next checkpoint
//     const nextCheckpointAngle: number = parseInt(inputs[5]); // angle between your pod orientation and the direction of the next checkpoint
//     var inputs: string[] = readline().split(' ');
//     const opponentX: number = parseInt(inputs[0]);
//     const opponentY: number = parseInt(inputs[1]);
//
//     // save laps position
//     let pIndex = points.findIndex(f => f.x === nextX)
//     if (pIndex < 0) {
//         points.push(<Point>{x: nextX, y: nextY})
//     } else {
//         if (pIndex === 0 && points.length > 1 && lap === 1) {
//             lap = 2
//             points = calcTriangles(points)
//         }
//     }
//
//     let distDelta = 0.99
//     let sizeDelta = 1
//     let angDelta = 1
//     let opponentDelta = 1
//     let currX = nextX;
//     let currY = nextY;
//     const oDist = distXY(nextX, nextY, opponentX, opponentY)
//
//     if (lap === 1) {
//         // first lap
//         angDelta = 1 - Math.abs(nextCheckpointAngle) / 180
//         if (Math.abs(nextCheckpointAngle) < 6){
//             angDelta = 1
//         }
//         if (nextCheckpointDist > 800 && nextCheckpointDist < 1700) {
//             distDelta = 0.50
//         } else  if (nextCheckpointDist > 200 && nextCheckpointDist < 800) {
//             distDelta = 0.25
//         } else  if (nextCheckpointDist > oDist) {
//             opponentDelta = 2
//         }
//     } else {
//         // 2,3 lap
//         distDelta = 1
//         currX = points[pIndex].tX
//         currY = points[pIndex].tY
//         // distance between car and triangle point
//         let dist = distXY(x, y, points[pIndex].tX, points[pIndex].tY)
//         let preIndex = pIndex-1 < 0 ? points.length-1 : pIndex-1
//         let distP = distXY(points[preIndex].x, points[preIndex].y, points[pIndex].tX, points[pIndex].tY)
//         let dist2P = distXY(points[preIndex].x, points[preIndex].y, points[pIndex].x, points[pIndex].y)
//         console.error('pIndex: ',pIndex, 'carDist: ', dist.toFixed(0), 'distP: ', distP.toFixed(0), 'dist2P: ',dist2P.toFixed(0))
//         sizeDelta = 0.9
//         // dist2P > 8800 ? 0.90 : dist2P > 4400 ? 0.83 : dist2P > 2500 ? 0.65 : 0.95
//         distP = distP * sizeDelta
//         console.error('distP***', distP.toFixed(0),'sizeDelta:',sizeDelta)
//         if (dist < distP || nextCheckpointDist < distP) {
//             currX = nextX
//             currY = nextY
//         }
//
//         angDelta =  1 - Math.abs(nextCheckpointAngle) / 180
//         if (nextCheckpointDist < distP && nextCheckpointDist < 2800) {
//             distDelta = 1 - nextCheckpointDist / distP
//         } else  if ((Math.abs(nextCheckpointAngle) < 44 && currX !== nextX)
//             || Math.abs(nextCheckpointAngle) < 11) {
//             angDelta = 1
//             distDelta = 1
//         }
//
//     }
//
//     // power
//     let power
//     if (opponentDelta > 1) {
//         power = 100 * angDelta * opponentDelta
//     } else {
//         power = 100 * angDelta * distDelta
//     }
//     power = power > 99 ? 'BOOST' : Math.round(power).toString();
//     console.log(currX + ' ' + currY + ' ' + power);
//
//
//     console.error('ang :', nextCheckpointAngle, 'chDist:', nextCheckpointDist, 'oponentDis', oDist)
//     console.error('angDelta:', angDelta.toFixed(2),
//         'distDel:', distDelta.toFixed(2),
//         'oponentDelta:', opponentDelta.toFixed(2),
//         'power', power)
//     console.error(points)
// }
//
